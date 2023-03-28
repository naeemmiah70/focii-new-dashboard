import React from "react";
import PropTypes from "prop-types";
import "./Heading.css";

const Heading = ({ label, color, fontSize, fontWeight }) => {
  const style = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  return (
    <h5 style={style} className="heading-style">
      {label}
    </h5>
  );
};

Heading.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
};

export default Heading;
