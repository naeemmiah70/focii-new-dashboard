import React from "react";
import "./SingleStudy.css";
import Card from "../../storybookComponents/Card/Card";
import PieChart from "../../storybookComponents/PieChart/PieChart";
import Heading from "../../storybookComponents/Heading/Heading";
import Tooltip from "../../storybookComponents/Tooltip/Tooltip";

const SingleStudy = () => {
  return (
    <div style={{ marginTop: "15px" }}>
      <div
        style={{ padding: "15px 0px", display: "flex", alignItems: "center" }}
      >
        <Heading
          label="Select Session :"
          color="#FFFFFF"
          fontSize="16px"
          fontWeight={500}
        ></Heading>

        <div className="select-dropdown">
          <select className="dropdown-button">
            <option selected>Math 06/11/22</option>
            <option value="1">Math 06/11/22</option>
            <option value="2">Physics 06/03/22</option>
            <option value="3">Biology 08/03/22</option>
          </select>
        </div>
      </div>
      <Card width="100%" height="auto">
        <div className="row">
          <div className="col-md-9">
            <video controls src="" height="102%" width="100%"></video>
          </div>
          <div className="col-md-3">
            <div className="">
              <div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "10px",
                    lineHeight: "22px",
                  }}
                >
                  <Heading
                    label="Learner’s Drop and New Engagement"
                    fontSize="16px"
                  ></Heading>
                  <div>
                    <Tooltip label="Tooltip text" />
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  <div className="middle-border">
                    <Heading
                      label="Active Learners Drop"
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
                      <div style={{ paddingRight: "2px" }}>
                        <Heading
                          label="18"
                          color="#1974CE"
                          fontSize="24px"
                        ></Heading>
                      </div>
                      <Heading
                        label="%"
                        color="#1974CE"
                        fontSize="16px"
                        fontWeight={400}
                      ></Heading>
                    </div>
                  </div>

                  <div>
                    <Heading
                      label="Newly Engaged"
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
                      <div style={{ paddingRight: "2px" }}>
                        <Heading
                          label="29"
                          color="#1974CE"
                          fontSize="24px"
                        ></Heading>
                      </div>
                      <Heading
                        label="%"
                        color="#1974CE"
                        fontSize="16px"
                        fontWeight={400}
                      ></Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "2.5rem",
                  }}
                >
                  <Heading
                    label="Learner’s Drop and New Engagement"
                    fontSize="16px"
                  ></Heading>
                  <div>
                    <Tooltip label="Tooltip text" />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <PieChart
                    labels={["Low", "Average", "High"]}
                    data={[33, 33, 44]}
                    backgroundColor={["#5BA4EB", "#328DE6", "#1974CE"]}
                    legendColor="#1974CE"
                    width="180px"
                  ></PieChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleStudy;
