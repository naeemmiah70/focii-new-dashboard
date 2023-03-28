import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserEngagement from "./components/graphs/UserEngagement/UserEngagement";
import TotalVsEngaged from "./components/graphs/TotalVsEngaged/TotalVsEngaged";
import QuartileGraph from "./components/graphs/QuartileGraph/QuartileGraph";
import TopSevenSession from "./components/graphs/TopSevenSession/TopSevenSession";
import EnagementCorrelations from "./components/graphs/EngagementCorrelations/EnagementCorrelations";
import LastSevenSession from "./components/graphs/LastSevenSession/LastSevenSession";
import LearnerHappiness from "./components/graphs/LearnerHappiness/LearnerHappiness";
import AttensionSpan from "./components/storybookComponents/AttensionSpan/AttensionSpan";
import EngagementAndAttension from "./components/graphs/EnagagementAndAttension/EngagementAndAttension";

function App() {
  return (
    <section style={{ backgroundColor: "#141415", paddingBottom: "15px" }}>
      <div className="container ">
        {/* First Row */}
        <div className="row">
          <div className="col-lg-2 col-md-4 col-12 py-3">
            <UserEngagement></UserEngagement>
          </div>
          <div className="col-lg-5 col-md-8 col-12 py-3">
            <TotalVsEngaged></TotalVsEngaged>
          </div>
          <div className="col-lg-5 col-md-12 col-12 py-3">
            <QuartileGraph></QuartileGraph>
          </div>
        </div>
        {/* Second Row */}
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12 py-3">
            <div className="pb-2">
              <TopSevenSession></TopSevenSession>
            </div>
            <div className="pt-2">
              <LastSevenSession></LastSevenSession>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12 py-3">
            <EnagementCorrelations></EnagementCorrelations>
          </div>
        </div>
        {/* Third Row */}
        <div className="row">
          <div className="col-lg-2  col-md-4 col-12 py-3">
            <LearnerHappiness></LearnerHappiness>
          </div>
          <div className="col-lg-10 col-md-8 col-12 py-3">
            <EngagementAndAttension></EngagementAndAttension>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
