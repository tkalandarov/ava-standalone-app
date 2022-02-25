const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const dialogflow = require("@google-cloud/dialogflow");
const firebaseAdmin = require("firebase-admin")
const uuid = require("uuid");

const app = express();

const PORT = process.env.PORT || config.get("port");

const projectId = config.get("project_id");
const googleCredentials = config.get("google_credentials");

let currUser;

// Allows access to Firebase
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(googleCredentials),
    databaseURL: `https://${projectId}-default-rtdb.firebaseio.com/`
});

const db = firebaseAdmin.database();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/public")));

app.post('/student', async (req, res) => {
    currUser = await getStudentData(req.body.id);
    res.send(currUser);
});

app.post("/chat", async (req, res) => {
    const response = await chat(req.body.query);
    res.send(response);
});

async function getStudentData(id) {
    const snapshot = await db.ref(`/universities/0/students/${id}`).once("value");
    return snapshot.val();
}

async function getDynamicResponse(intentTopic) {
    const snapshot = await db.ref(`/universities/0/dynamicIntents/${intentTopic}`).once("value");
    return snapshot.val();
}

async function chat(query) {
    const sessionId = uuid.v4();

    const sessionClient = new dialogflow.SessionsClient({
        credentials: {
            client_email: googleCredentials.client_email,
            private_key: googleCredentials.private_key
        }
    });

    console.log(projectId);
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: "en-US"
            }
        }
    };

    const responses = await sessionClient.detectIntent(request);
    const intentDisplayName = responses[0].queryResult.intent.displayName;

    let avaResponse = "";

    if (intentDisplayName && intentDisplayName.includes("**")) {
        const intentTopic = intentDisplayName.split("**")[0];
        const responseObj = await getDynamicResponse(intentTopic);

        if (currUser) {
            avaResponse = responseObj[currUser.category];
        }
    }
    else {
        avaResponse = responses[0].queryResult.fulfillmentText;
    }

    return avaResponse;
}

// Set up CORS middleware
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://ava-standalone-app.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(/*corsOptions*/)) // CORS filtration is turned off

// Tell the app to serve React instead of backend files
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
    })
}

async function start() {
    try {
        app.listen(PORT, () => console.log("App has been started on port " + PORT + " ..."));
    }
    catch (error) {
        console.log("Server Error", error.message);
        process.exit(1);
    }
}
start();