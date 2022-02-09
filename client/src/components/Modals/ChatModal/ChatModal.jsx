import React, { useState } from "react";
import moment from "moment";

import { connect } from "react-redux";
import { ChatBubble }  from "./Bubble/ChatBubble";
import "./ChatModal.css";

import axios from "axios";

export const ChatModal = (props) => {
  const [userInput, setUserInput] = useState("");
  const [sendEnabled, setSendEnabled] = useState(false);
  const [messages, setMessages] = useState([
    {
      text:
        "Hi, " +
        props.selectedStudent +
        "! My name is AVA. How can I help you?",
      time: moment().format("h:mm A"),
      sentByUser: false
    },
  ]);

  const addNewMessage = (message) => {
    setMessages((messages) => [...messages, message]);
  };

  const sendMessage = () => {
    setUserInput("");
    setSendEnabled(false);
    
    addNewMessage({
      text: userInput,
      time: moment().format("h:mm A"),
      sentByUser: true
    });

    axios.post("http://localhost:5000/chat", {
      query: userInput
    })
    .then(res => {
      addNewMessage({
        text: res.data,
        time: moment().format("h:mm A"),
        sentByUser: false
      });
    });
  };

  const sendIfEnter = (e) => {
    if (e.key === "Enter" && sendEnabled) {
      sendMessage();
    }
  };

  const handleOnChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    const formattedInput = input.trim().replace(/\s\s+/g, " "); // Remove whitespaces, tabs, newlines, etc.
    if (!formattedInput) {
      setSendEnabled(false);
      return;
    }

    setSendEnabled(true);
  };

  return (
    <div className="chatModal">
      <div className="chatModal__head">
        <button
          type="button"
          className="chatModal__close"
          onClick={props.onCloseClicked}
        ></button>

        <div className="chatModal__head-ava">
          <div className="chatModal__online-indicator"></div>
        </div>
        <div className="chatModal__head-text">
          <div className="chatModal__head-botName">AVA Chatbot</div>
          <div className="chatModal__head-title">Virtual Assistant</div>
        </div>
      </div>

      <div className="chatModal__body">
        {messages.map((message, index) => (
          <ChatBubble
            text={message.text}
            time={message.time}
            sentByUser={message.sentByUser}
            key={index}
          />
        ))}
      </div>

      <div className="chatModal__footer">
        <textarea
          className="chatModal__compose-textarea"
          maxLength={1000}
          autoComplete="false"
          placeholder="Write a message"
          onChange={handleOnChange}
          onKeyUp={sendIfEnter}
          value={userInput}
        ></textarea>
        {sendEnabled && (
          <div className="chatModal__send active" onClick={sendMessage}></div>
        )}
        {!sendEnabled && <div className="chatModal__send"></div>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.demoReducer.selectedStudent
  };
};

export default connect(mapStateToProps, null)(ChatModal);
