import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Heading from "../../storybookComponents/Heading/Heading";
import RadarChart from "../../storybookComponents/RadarChart/RadarChart";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";

const EnagementCorrelations = () => {
  return (
    <Card width="100%" height="100%">
      <div style={{ display: "flex" }}>
        <Heading label="Engagement Correlations"></Heading>
        <div style={{ marginLeft: "10px" }}>
          <Tooltip label="Tooltip text" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
        }}
      >
        <RadarChart />
      </div>
    </Card>
  );
};

export default EnagementCorrelations;
