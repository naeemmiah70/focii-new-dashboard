import React from "react";
import Card from "../../storybookComponents/Card/Card";
import TopSeven from "../../storybookComponents/TopSeven/TopSeven";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";
import "./TopSevenSession.css";

const SevenSession = () => {
  const labels = [
    "Study1",
    "Study2",
    "Study3",
    "Study4",
    "Study5",
  ];
  const barColors = [
    "#1974CE",
    "#1974CE",
    "#1974CE",
    "#1974CE",
    "#1974CE",
    "#1974CE",
    "#1974CE",
  ];
  return (
    <>
      <Card width="100%" height="100%">
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <Heading label="Engagement For Top 5 Sessions"></Heading>
          <div style={{ marginLeft: "10px" }}>
            <Tooltip label="Tooltip text" />
          </div>
        </div>

        <div style={{ display: "flex", marginBottom: "10px" }}>
          <div className="percentage-div">
            <Heading
              label="Lowest"
              color="#8A8A93"
              fontSize="12px"
              fontWeight="400"
            ></Heading>
            <Heading
              label="17%"
              color="#1982CE"
              fontSize="16px"
              fontWeight="700"
            ></Heading>
          </div>
          <div className="percentage-div">
            <Heading
              label="Highest"
              color="#8A8A93"
              fontSize="12px"
              fontWeight="400"
            ></Heading>
            <Heading
              label="31%"
              color="#1982CE"
              fontSize="16px"
              fontWeight="700"
            ></Heading>
          </div>
          <div className="percentage-div">
            <Heading
              label="Overall"
              color="#8A8A93"
              fontSize="12px"
              fontWeight="400"
            ></Heading>
            <Heading
              label="24%"
              color="#1982CE"
              fontSize="16px"
              fontWeight="700"
            ></Heading>
          </div>
        </div>

        <TopSeven
          labels={labels}
          barColors={barColors}
          height="220px"
          width="800px"
        ></TopSeven>
      </Card>
    </>
  );
};

export default SevenSession;
