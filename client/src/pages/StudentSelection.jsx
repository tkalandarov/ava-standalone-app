import React from "react";
import Header from "../components/Header/Header";

import { Lisa, Tim, Khan } from "../components/Students/StudentsData";

export const StudentSelection = () => {
  return (
    <div className="studentSelectionPage">
      <Header />
      <div className="page-content">
        <div className="dashboardPage__title">
          <a href="/demo">Demo </a>|<span> Student Selection</span>
        </div>
      </div>

      <div className="students">
          <div className="card">
              <img src={Lisa.imgSrc} alt="Lisa" width={300} height={300} />
          </div>
      </div>
      <div className="students">
          <div className="card">
              <img src={Tim.imgSrc} alt="Lisa" width={300} height={300} />
          </div>
      </div>
      <div className="students">
          <div className="card">
              <img src={Khan.imgSrc} alt="Lisa" width={300} height={300} />
          </div>
      </div>
    </div>
  );
};
