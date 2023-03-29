import React from "react";
import DashboardGraph from "../../storybookComponents/DashboardGraph/DashboardGraph";
import "./Dashboard.css";
import Heading from "../../storybookComponents/Heading/Heading";
import Cross from "../../../resources/icons/cross.png";
import lightSquar from "../../../resources/icons/SquaresFour.png";
import GraySquar from "../../../resources/icons/SquaresFour (1).png";
import horizontal from "../../../resources/icons/AlignLeftSimple.png";
import LightHorizontal from "../../../resources/icons/AlignLeftSimple (1).png";
import verticle from "../../../resources/icons/AlignTopSimple.png";
import GrayVerticle from "../../../resources/icons/AlignTopSimple (1).png";
import participant from "../../../resources/icons/participants.png";
import smile from "../../../resources/icons/smile.png";
import ReactModal from "../../storybookComponents/ReactModal/ReactModal";
import { useState } from "react";
import male from "../../../resources/img/male.png";
import female from "../../../resources/img/female.png";

const Dashboard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const participants = [
    {
      id: 1,
      name: "Bob Ross",
      img: male,
    },
    {
      id: 2,
      name: "Natasha Romanosoff",
      img: female,
    },
    {
      id: 3,
      name: "Wanda Maximoff",
      img: male,
    },
    {
      id: 4,
      name: "Rober Downey Jr.",
      img: female,
    },
    {
      id: 5,
      name: "Bucky Barnes",
      img: male,
    },
    {
      id: 6,
      name: "Loki",
      img: female,
    },
    {
      id: 7,
      name: "Ebony Maw",
      img: male,
    },
    {
      id: 8,
      name: "Dalia",
      img: female,
    },
  ];

  const [type, setType] = useState("horizontal");

  return (
    <div className="">
      {/* dashboard header */}
      <div
        className={`dashboard-header ${
          type === "verticle" && "verticleDashboard"
        }`}
      >
        <Heading label="Analytics"></Heading>
        <img src={Cross} alt="" />
      </div>
      {/* Size picker buttons  */}

      <div
        className={`dashbord-style ${
          type === "verticle" && "verticleDashboard"
        }`}
      >
        <div className={`${type !== "verticle" && "verticle-picker-btns"}`}>
          <div
            className={`size-picker-btns ${
              type === "verticle" && "d-flex justify-content-between"
            }`}
          >
            {type === "squar" ? (
              <img src={lightSquar} alt="" />
            ) : (
              <img onClick={() => setType("squar")} src={GraySquar} alt="" />
            )}
            {type === "verticle" ? (
              <img src={GrayVerticle} alt="" />
            ) : (
              <img onClick={() => setType("verticle")} src={verticle} alt="" />
            )}
            {type === "horizontal" ? (
              <img src={LightHorizontal} alt="" />
            ) : (
              <img
                onClick={() => setType("horizontal")}
                src={horizontal}
                alt=""
              />
            )}
          </div>
          <div
            style={{ display: "flex", gap: "15px", cursor: "pointer" }}
            className={` ${
              type === "verticle" && "my-4 d-flex justify-content-between"
            }`}
          >
            <div onClick={openModal} className="participant-box">
              <img src={participant} alt="" />
              <Heading
                label="08"
                color="#AAAAB1"
                fontSize="12px"
                fontWeight={700}
              ></Heading>
            </div>
            <img style={{ height: "25px" }} src={smile} alt="" />
          </div>
        </div>

        <div
          className={` ${
            type === "verticle" ? "verticleDiv" : "horizontal-flex-div"
          }`}
        >
          <div className="enagement-room-div">
            <Heading
              label="Enagement"
              color="#DADEE3"
              fontSize="16px"
            ></Heading>
            <div style={{ marginTop: "7px" }}>
              <Heading label="40%" color="#1974CE" fontSize="22px"></Heading>
            </div>
          </div>
          <div
            className={`enagement-room-div ${
              type !== "veticle" && "verticle-margin-top"
            } `}
          >
            <Heading
              label="Attendance"
              color="#DADEE3"
              fontSize="16px"
            ></Heading>
            <div style={{ marginTop: "7px" }}>
              <Heading label="70%" color="#1974CE" fontSize="22px"></Heading>
            </div>
          </div>
        </div>
        <div className={`graph-border ${type !== "squar" && "hideSquar"} `}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px",
            }}
          >
            <div>
              <Heading
                label="Engagement Graph"
                color="#DADEE3"
                fontSize="font-size: 16px;"
              ></Heading>
            </div>
            <div className="peak-style">
              <Heading
                label="Peak:"
                color="#FFFFFF"
                fontSize="8px"
                fontWeight={500}
              ></Heading>
              <Heading
                label="50%"
                color="#FFFFFF"
                fontSize="12px"
                fontWeight={700}
              ></Heading>
            </div>
          </div>
          <DashboardGraph
            labels={[1, 2, 3, 4, 5, 6, 7]}
            data={[10, 38, 25, 53, 22, 76, 33]}
            height="119px"
            width="312px"
            borderColor="#1974CE"
            fillColor="#1974CE"
          ></DashboardGraph>
        </div>
      </div>

      <ReactModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        participants={participants}
        backgroundColor="#000000"
        color="#fff"
        fontSize="14px"
        fontWeight={400}
      ></ReactModal>
    </div>
  );
};

export default Dashboard;
