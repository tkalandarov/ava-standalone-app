import React from "react";

import "../css/homePage.css";
import Header from "../components/Header/Header";

import ConversationImg from "../img/ava-conversation.png";
import ClockImg from "../img/clock.png";
import DayNightImg from "../img/day-night.svg";
import Girl from "../img/girl.jpg";
import Cogs from "../img/cogs.svg";
import Graph from "../img/graph.svg";
import Laptop from "../img/laptop.png";
import Devices from "../img/ava-devices.png";

export const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <main>
        <div className="intro-text">
          <div className="intro-text__container container">
            <h1 className="intro-text__text">
              Personalized integration of AI technologies for student advising.
            </h1>
            <p className="intro-text__description">
              Advisors have to answer hundreds of questions of the same type.
              Leave this to the AVA chatbot: it will answer frequently asked
              questions and provide 24/7 student support.
              <br />
              <br />
              Your employees will no longer waste time on template answers 🙌
            </p>
            <a href="#about" className="intro-text__button button">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                <path
                  d="M2.24453637.04051454l-.00546268 1.12293125 6.54261813.03124938L.84566837 9.13071862l.79394536.79394537 7.93602345-7.93602346.03124939 6.54261814 1.12293117-.00546276-.03772853-7.88876765c-.00149878-.3081526-.2505944-.55724822-.55873428-.55873428L2.24453637.04051454z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="intro-text__ava"></div>
          </div>
        </div>
        <section className="about bg-black" id="about">
          <div className="paragraph paragraph-card">
            <div className="paragraph__side">
              <h2 className="paragraph__title">Optimize Advising Process</h2>
              <div className="paragraph__text">
                Advisors process a huge amount of messages every day, but only a
                small part of them is indeed urgent or unique.
                <br />
                <br />
                The chatbot will professionally answer the user's common
                questions, help make a decision, save advisors time and let them
                focus on the most important inquiries.
              </div>
            </div>
            <img
              className="convesation-img"
              src={ConversationImg}
              alt="Sample conversation"
              width={640} height={584}
            />
          </div>

          <div className="paragraph" id="features">
            <div className="paragraph__left">
              <h2 className="paragraph__title">There are no working hours</h2>
              <p className="paragraph__text">
                With chatbot integrated, students get help right when they need
                it
              </p>
            </div>
            <div className="paragraph__right paragraph__clock-image-wrapper">
              <img src={ClockImg} alt="Clock" />
            </div>
          </div>

          <div className="paragraph paragraph-equal-sides">
            <div className="paragraph__left">
              <div className="column">
                <div className="paragraph-card">
                  <img src={Cogs} alt="Clock" width={80} height={80} />
                  <h2 className="paragraph__title">Customize Your Bot</h2>
                  <p className="paragraph__text">
                    AVA provides agile integration and learns from data you give
                    it. Your students will get customized answers related to
                    your specific educational organization.
                  </p>
                </div>
                <div className="paragraph-card">
                  <img
                    src={DayNightImg}
                    alt="DayNight"
                    width={195}
                    height={118}
                  />
                  <h2 className="paragraph__title">Be online 24/7</h2>
                  <p className="paragraph__text">
                    The chatbot responds instantly and is available at any time
                    from any device, which means that students can always get
                    up-to-date information.
                  </p>
                </div>
              </div>
            </div>
            <div className="paragraph__right">
              <div className="column">
                <div className="paragraph-card">
                  <img src={Graph} alt="Clock" width={80} height={80} />
                  <h2 className="paragraph__title">
                    Scalability and Analytics
                  </h2>
                  <p className="paragraph__text">
                    The more requests from students, the better the answers of
                    the bot. AVA will privately keep track of everything that
                    student ask her about and create analytics you can access
                    anytime.
                  </p>
                </div>
                <img className="paragraph-card-img" src={Girl} alt="Girl" />
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="demo">
          <h1 className="intro-text__text">Try our Live Demo</h1>
          <div className="paragraph-card">
            <img src={Devices} alt="Laptop" width={600} />
            <a className="button demo-button" href="/demo">
              Launch AVA
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
              >
                <path
                  d="M2.24453637.04051454l-.00546268 1.12293125 6.54261813.03124938L.84566837 9.13071862l.79394536.79394537 7.93602345-7.93602346.03124939 6.54261814 1.12293117-.00546276-.03772853-7.88876765c-.00149878-.3081526-.2505944-.55724822-.55873428-.55873428L2.24453637.04051454z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
