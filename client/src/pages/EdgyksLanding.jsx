import React, {useEffect} from "react";

import "../css/edgyks.css";
import EdgyksHeader from "../components/Edgyks/EdgyksHeader";

import CogsImg from "../img/edgyks/cogs.png";
//import LaptopImg from "../img/edgyks/laptop.png";
//import EarthImg from "../img/edgyks/earth.png";
import MountainsImg from "../img/edgyks/mountains.png";
import CloudImg from "../img/edgyks/cloud.png";
//import GraphImg from "../img/edgyks/graph.png";

import iphoneAVA from "../img/iphone_ava.png";

import documentPlusImg from "../img/edgyks/document_plus.svg";
import pencilImg from "../img/edgyks/pencil.svg";
import plusImg from "../img/edgyks/plus.svg";
import tasksTickImg from "../img/edgyks/tasks_tick.svg";

export const EdgyksLanding = (props) => {
  useEffect(() => {
    document.title = "Edgy - Cutting Edge Solutions for Modern Higher Education";
  }, []);

  return (
    <div className="edgyksPage">
      <EdgyksHeader />
      <main>
        <div className="intro-text">
          <div className="intro-text__container container">
            <h1 className="intro-text__text">
              Cutting edge solutions for modern higher education.
            </h1>
            <p className="intro-text__description">
              Edgy Knowledge Solutions specializes in identifying virtual
              solutions for educational organizations.
              <br />
              <br />
              Whether you are a K-12 school looking to modernize communication
              or a university seeking to incorporate artificial intelligence
              into your workflow, Edgy Knowledge Solutions can develop the
              bespoke solutions your organization needs 🚀
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
            {/* <div className="intro-text__bgElem intro-text__cogs"></div>
            <div className="intro-text__bgElem intro-text__laptop"></div> */}
            <div className="intro-text__bgElem intro-text__earth"></div>
          </div>
        </div>

        <section className="about" id="about">
          <div className="section__title">What does Edgy Knowledge do?</div>

          <div className="paragraph features-paragraph">
            <div className="paragraph-card">
              <img className="paragraph__img" src={CloudImg} alt="AI" />
              <h2 className="paragraph__title">Artificial Intelligence</h2>
              <p className="paragraph__text">
                Weaving artificial intelligence into human systems can help save
                valuable resources, allowing your organization to do what it
                does best — educate and connect. Our AI solutions can aid
                students with administrative tasks like registration, offer
                on-demand advising that streamlines common questions, and
                provide data for classroom improvement.
              </p>
            </div>
            <div className="paragraph-card">
              <img className="paragraph__img" src={MountainsImg} alt="AI" />
              <h2 className="paragraph__title">Bespoke Solutions</h2>
              <p className="paragraph__text">
                Each application we develop is specific to its organization and
                purpose. Whether you’re looking to make communication more
                effective or enhance education, we can provide a custom
                integrative solution that communicates with the systems your
                organization already has in place.
              </p>
            </div>
            <div className="paragraph-card">
              <img className="paragraph__img" src={CogsImg} alt="AI" />
              <h2 className="paragraph__title">Expertise & Support</h2>
              <p className="paragraph__text">
                With experts in education at the helm, our solutions are
                grounded in proven strategies to solve educational and
                administrative problems. Our team offers both consulting and
                support services, so you not only get the precise product your
                organization needs, but the support needed to continue using and
                improving your solution.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="section__title">Featured Project</div>
          <div className="paragraph paragraph-card">
            <div className="paragraph__side">
              <h2 className="paragraph__title">AVA: The Academic Chatbot</h2>
              <div className="paragraph__text">
                The Academic Virtual Assistant (AVA) is a revolutionary chatbot
                application that does more than answer simple questions. Since
                AVA is connected to the organization’s records and business
                systems, AVA is able to give individuals answers that pertain to
                them and their specific situation.
              </div>
            </div>
            <img
              className="convesation-img"
              src={iphoneAVA}
              alt="iphoneAVA"
              width={440}
              height={284}
            />
          </div>

          <div className="ava-description">
            <div className="paragraphs-container">
              <div className="paragraph">
                <div className="paragraph__ico">
                  <img src={plusImg} alt="" width="24" height="24" />
                </div>
                <div className="paragraph__content">
                  <div className="paragraph__title">Use case</div>
                  <div className="paragraph__description">
                    In this instance, the chatbot is connected to a university's
                    business systems and assists in answering routine academic
                    advising questions to save students time and preserve
                    advisor resources.
                  </div>
                </div>
              </div>
              <div className="paragraph">
                <div className="paragraph__ico">
                  <img src={documentPlusImg} alt="" width="24" height="24" />
                </div>
                <div className="paragraph__content">
                  <div className="paragraph__title">The problem</div>
                  <div className="paragraph__description">
                    The EDGY team sat down and investigated the pain points
                    within the educational process that affected students,
                    faculty, and staff. We quickly discovered the overabundance
                    of similar, simple questions being asked by students that
                    advisors claimed ate up time for more complex queries.
                  </div>
                </div>
              </div>
              <div className="paragraph">
                <div className="paragraph__ico">
                  <img src={tasksTickImg} alt="" width="24" height="24" />
                </div>
                <div className="paragraph__content">
                  <div className="paragraph__title">The solution </div>
                  <div className="paragraph__description">
                    EDGY developed a chatbot system, AVA, to help redirect
                    generic query traffic away from advisors and toward a
                    knowledge base informed by the College's own materials.
                    Students would now access a portal online to ask AVA their
                    questions and receive expert answers.
                  </div>
                </div>
              </div>
              <div className="paragraph">
                <div className="paragraph__ico">
                  <img src={pencilImg} alt="" width="24" height="24" />
                </div>
                <div className="paragraph__content">
                  <div className="paragraph__title">Why it works</div>
                  <div className="paragraph__description">
                    Since AVA is powered by a cutting-edge AI, it can give
                    students customized answers to their questions. Demand is
                    reduced for already-overbooked advising appointments,
                    freeing up valuable advisor time to answer less-prescriptive
                    student questions and dedicate their time to more complex
                    problems.
                  </div>
                </div>
              </div>
            </div>
            <a href="/ava" target="_blank" className="intro-text__button button">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10">
                <path
                  d="M2.24453637.04051454l-.00546268 1.12293125 6.54261813.03124938L.84566837 9.13071862l.79394536.79394537 7.93602345-7.93602346.03124939 6.54261814 1.12293117-.00546276-.03772853-7.88876765c-.00149878-.3081526-.2505944-.55724822-.55873428-.55873428L2.24453637.04051454z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </section>

        <footer className="contact-footer bg-black" id="contact">
          <div className="section__title">
            Are you ready for your next Edgy Solution?
          </div>
          <div className="section__titleDescription">
            Share a little about your situation and we'll be in touch ASAP.
          </div>

          <div className="connectFormWrapper">
            <form className="connectForm" id="connectForm">
              <div className="formField">
                <label htmlFor="connectNameInput" className="formLabel">
                  Name
                </label>
                <input
                  id="connectNameInput"
                  className="formInput"
                  type="text"
                />
              </div>
              <div className="formField">
                <label htmlFor="connectEmailInput" className="formLabel">
                  Email
                </label>
                <input
                  id="connectEmailInput"
                  className="formInput"
                  type="email"
                />
              </div>
              <div className="formField">
                <label htmlFor="connectOrgInput" className="formLabel">
                  Institution
                </label>
                <input
                  id="connectOrgInput"
                  className="formInput"
                  type="text"
                />
              </div>
              <div className="formField">
                <label htmlFor="connectMsgInput" className="formLabel">
                  Message
                </label>
                <textarea
                  id="connectMsgInput"
                  name="connectMsgInput"
                  className="formTextarea"
                  placeholder="Optional: Give us a short message about your situation or what you're interested in!"
                ></textarea>
              </div>
            </form>
          </div>
          <button
            type="submit"
            className="connectFormSubmit"
            form="connectForm"
          >
            <span>Submit</span>
          </button>

          <h5>© Edgy Knowledge Solutions</h5>
        </footer>
      </main>
    </div>
  );
};
