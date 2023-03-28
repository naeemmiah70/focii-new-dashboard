import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";
import CircularProgressBar from "../CircularProgressbar/CircularProgressbar";
import "./TotalVsEngaged.css";

const TotalVsEngaged = () => {
  return (
    <Card width="100%" height="100%">
      <div style={{ display: "flex" }}>
        <Heading label="Total and Engaged"></Heading>
        <div style={{ marginLeft: "10px" }}>
          <Tooltip label="Tooltip text" />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            textAlign: "center",
          }}
        >
          <div className="middle-border">
            <Heading
              label="Engaged User Hours"
              color="#DADEE3
"
              fontWeight={400}
            ></Heading>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <div style={{ paddingRight: "5px" }}>
                <Heading label="450" color="#1974CE" fontSize="20px"></Heading>
              </div>
              <Heading
                label="Hrs"
                color="#1974CE"
                fontSize="13px"
                fontWeight={400}
              ></Heading>
            </div>
          </div>

          <div>
            <Heading
              label="Total User Hours"
              color="#DADEE3
"
              fontWeight={400}
            ></Heading>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ paddingRight: "5px" }}>
                <Heading label="510" color="#1974CE" fontSize="20px"></Heading>
              </div>
              <Heading
                label="Hrs"
                color="#1974CE"
                fontSize="13px"
                fontWeight={400}
              ></Heading>
            </div>
          </div>
        </div>

        <div
          style={{ width: "30%", display: "flex", justifyContent: "center" }}
        >
          <div>
            <CircularProgressBar
              width="140px"
              color="white"
              value={88.84}
              pathColor="#1974CE"
              trailColor="#313135"
            ></CircularProgressBar>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalVsEngaged;
