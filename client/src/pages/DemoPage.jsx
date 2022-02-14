import React, { useState, useEffect } from "react";

import Header from "../components/Header/Header";

import DashboardIcon from "../img/dashboard.png";
import StudentIcon from "../img/students-cap.png";

import Dashboard from "../img/ava-devices.png";
import StudentView from "../img/StudentView.png";

import "../css/demoPage.css";

export const DemoPage = () => {
  const [imageState, setImageState] = useState(1); // either 1 or 2

  useEffect(() => {
    document.title = "AVA Demo - Edgy Knowledge Solutions";
  }, []);

  return (
    <div className="demoPage">
      <Header />
      <div className="demoPage__title-container container">
        <h1 className="demoPage__title">No more words. Try it yourself!</h1>
      </div>
      <div className="grid">
        <div className="paragraphs-container">
          <a
            className="paragraph student-link"
            href="/ava/demo/student"
            onPointerOver={() => setImageState(1)}
          >
            <div className="paragraph__ico">
              <img src={StudentIcon} alt="" width="24" height="24" />
            </div>
            <div className="paragraph__content">
              <div className="paragraph__title">Chat with AVA</div>
              <div className="paragraph__description">
                Feel the experience of having a conversation with AVA as a
                student.
              </div>
            </div>
          </a>
          <a
            className="paragraph dashboard-link"
            href="/ava/demo/dashboard"
            onPointerOver={() => setImageState(2)}
          >
            <div className="paragraph__ico">
              <img src={DashboardIcon} alt="" width="18" height="18" />
            </div>
            <div className="paragraph__content">
              <div className="paragraph__title">Advisor's Dashboard</div>
              <div className="paragraph__description">
                Jump into the command center of the advisors.
              </div>
            </div>
          </a>
        </div>
        <div className="image-preview">
          {imageState === 1 && (
            <img
              className="student-img"
              src={StudentView}
              alt="StudentView"
              width={400}
              height={400}
            />
          )}
          {imageState === 2 && (
            <img
              className="dashboard-img"
              src={Dashboard}
              alt="StudentView"
              width={400}
              height={400}
            />
          )}
        </div>
      </div>
    </div>
  );
};
