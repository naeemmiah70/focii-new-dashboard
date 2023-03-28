import React from "react";
import Card from "../../storybookComponents/Card/Card";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";
import Emoji from "../../../resources/icons/Expression-emojis.png";

const LearnerHappiness = () => {
  return (
    <Card width="100%" height="100%">
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <Heading label="Learner Happiness"></Heading>
        <div style={{ marginLeft: "10px" }}>
          <Tooltip label="Tooltip text" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          height: "90%",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={Emoji} alt="" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                gap: "5px",
              }}
            >
              <Heading
                label="67.2"
                color="#1974CE"
                fontSize="24px"
                fontWeight={500}
              ></Heading>
              <Heading
                label="%"
                color="#1974CE"
                fontSize="16px"
                fontWeight={400}
              ></Heading>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              gap: "5px",
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/3F9729/long-arrow-up.png"
              style={{ width: "22px", height: "22px" }}
            />
            <Heading
              label="1.8"
              color="rgba(81, 176, 57, 1)"
              fontSize="24px"
              fontWeight={500}
            ></Heading>
            <Heading
              label="%"
              color="rgba(81, 176, 57, 1)"
              fontSize="16px"
              fontWeight={400}
            ></Heading>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LearnerHappiness;
