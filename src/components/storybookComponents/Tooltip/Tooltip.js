import React from "react";
import PropTypes from "prop-types";
import "./Tooltip.css";
import Question from "../../../resources/icons/question.png";

const Tooltip = ({ label, color, backgroundColor }) => {
  const style = {
    color: color,
    backgroundColor: backgroundColor,
  };
  return (
    <div class="ToolTip">
      <img src={Question} alt="" />
      <span style={style} class="tooltiptext">
        {label}
      </span>
    </div>
  );
};

Tooltip.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Tooltip;
