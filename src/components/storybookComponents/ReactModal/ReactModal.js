import React from "react";
import Modal from "react-modal";
import Heading from "../Heading/Heading";
import close from "../../../resources/icons/cross.png";
import application from "../../../resources/icons/application.png";
import Eye from "../../../resources/icons/Eye.png";
import topArrow from "../../../resources/icons/top-arrow.png";
import PropTypes from "prop-types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: 0,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "none",
  },
};
Modal.setAppElement("#root");

const ReactModal = ({
  modalIsOpen,
  closeModal,
  participants = [],
  backgroundColor = "#000000",
  color = "#fff",
  fontSize = "14px",
  fontWeight = 400,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ background: backgroundColor }} className="modal-style">
          <div onClick={closeModal} className="participant-header">
            <Heading
              label="Participants"
              color="#FFFFFF"
              fontSize="16px"
            ></Heading>
            <img style={{ cursor: "pointer" }} src={close} alt="" />
          </div>
          <div
            style={{ background: backgroundColor }}
            className="participant-overflow"
          >
            {participants.map((data) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div className="name-and-img">
                  <img src={data.img} alt="" />
                  <p
                    style={{
                      color: color,
                      fontSize: fontSize,
                      fontWeight: fontWeight,
                      paddingTop: "10px",
                      position: "relative",
                      top: "3px",
                    }}
                  >
                    {data.name}
                  </p>
                </div>
                <div>
                  <img src={application} alt="" />
                  <img
                    style={{ marginRight: "10px",  marginLeft: "10px", cursor: "pointer" }}
                    src={Eye}
                    alt=""
                  />
                  <img src={topArrow} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

ReactModal.propTypes = {
  participants: PropTypes.array,
  learnArray: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
};

export default ReactModal;
