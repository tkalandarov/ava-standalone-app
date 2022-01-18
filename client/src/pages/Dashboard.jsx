import React from "react";
import Header from "../components/Header/Header";

import "../css/dashboard.css";

import NivoPie from "../components/Dashboard/NivoPie/NivoPie";
import NivoBar from "../components/Dashboard/NivoBar/NivoBar";
import NivoLine from "../components/Dashboard/NivoLine/NivoLine";
import NivoCalendar from "../components/Dashboard/NivoCalendar/NivoCalendar";

export function Dashboard() {
  return (
    <div className="dashboardPage">
      <Header />
      <div className="page-content">
        <div className="dashboardPage__title">
          <a href="/demo">Demo </a>|
          <span> Dashboard</span>
        </div>
        <div className="row">
          <div className="stats" id="stats1">
            <span className="stats__label">Students</span>
            <h6 className="stats__value">23648</h6>
            <span className="stats__percentage">4.7%</span>
          </div>
          <div className="stats" id="stats2">
            <span className="stats__label">Applications</span>
            <h6 className="stats__value">14016</h6>
            <span className="stats__percentage">6.3%</span>
          </div>
          <div className="stats" id="stats3">
            <span className="stats__label">Admission Rate</span>
            <h6 className="stats__value">16.6</h6>
            <span className="stats__percentage">1.12%</span>
          </div>
          <div className="stats" id="stats4">
            <span className="stats__label">Average GPA</span>
            <h6 className="stats__value">3.44</h6>
            <span className="stats__percentage">24.1%</span>
          </div>
          <div className="stats" id="stats5">
            <span className="stats__label">Requests Today</span>
            <h6 className="stats__value">247</h6>
            <span className="stats__percentage">12.4%</span>
          </div>
        </div>

        <div className="dashboard__graphs">
          <div className="graph-wrapper">
            <div className="graph__title">Applications by Country</div>
            <div className="graph">
              <NivoPie />
            </div>
          </div>

          <div className="graph-wrapper">
            <div className="graph__title">
              Applications by College and Gender
            </div>
            <div className="graph">
              <NivoBar />
            </div>
          </div>

          <div className="graph-wrapper">
            <div className="graph__title">Support Requests</div>
            <div className="graph">
              <NivoLine />
            </div>
          </div>

          <div className="graph-wrapper">
            <div className="graph__title">Requests by Date</div>
            <div className="graph">
              <NivoCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
