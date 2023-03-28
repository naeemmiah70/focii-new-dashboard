import React from "react";
import Card from "../../storybookComponents/Card/Card";
import LastSeven from "../../storybookComponents/LastSeven/LastSeven";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";

const LastSevenSession = () => {
  const labels = [
    "Study1",
    "Study2",
    "Study3",
    "Study4",
    "Study5",
    "Study6",
    "Study7",
  ];
  const learnArray = [20, 30, 20, 25, 18, 22, 11];
  return (
    <>
      <Card width={"100%"} height="100%">
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <Heading label="Engagement For Last 7 Sessions"></Heading>
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
              label="16%"
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
              label="32%"
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
              label="26%"
              color="#1982CE"
              fontSize="16px"
              fontWeight="700"
            ></Heading>
          </div>
        </div>
        <LastSeven
          labels={labels}
          learnArray={learnArray}
          backgroundColor="#1974CE"
          borderColor="#1982CE"
          // height="220px"
          // width="700px"
        ></LastSeven>
      </Card>
    </>
  );
};

export default LastSevenSession;
