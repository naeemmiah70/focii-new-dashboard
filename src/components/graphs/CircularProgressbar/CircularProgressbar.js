import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({
  value = 88.84,
  text = "88.84%",
  color = "black",
  pathColor = "#1974CE",
  trailColor = "#313135",
  height = "150px",
  width = "150px",
}) => {
  const styleCircle = buildStyles({
    rotation: 0,
    strokeLinecap: "butt",
    textSize: "16px",
    pathTransitionDuration: 1,
    pathColor: pathColor,
    textColor: color,
    trailColor: trailColor,
  });
  const style = {
    height: height,
    width: width,
  };
  return (
    <div style={style}>
      <CircularProgressbar
        value={value}
        text={text}
        strokeWidth={13}
        styles={styleCircle}
      />
    </div>
  );
};

export default CircularProgressBar;
