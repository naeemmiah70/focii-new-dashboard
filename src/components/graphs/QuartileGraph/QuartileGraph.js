import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Quartile from "../../storybookComponents/Quartile/Quartile";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";

const QuartileGrapH = () => {
  const labels = [
    "1st Quartile",
    "2nd Quartile",
    "3rd Quartile",
    "4th Quartile",
  ];
  const quater = [82, 65, 65, 50];
  const barColors = ["#8DC0F1", "#5BA4EB", "#328DE6", "#1974CE"];
  return (
    <>
      <Card width="100%" height="100%">
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <Heading label="Engagements in each Quartile"></Heading>
          <div style={{ marginLeft: "10px" }}>
            <Tooltip label="Tooltip text" />
          </div>
        </div>
        <Quartile
          labels={labels}
          quater={quater}
          barColors={barColors}
          height="215px"
          width="420px"
        ></Quartile>
      </Card>
    </>
  );
};

export default QuartileGrapH;
