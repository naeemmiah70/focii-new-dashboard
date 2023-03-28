import React from "react";
import { ProgressBarLine } from "react-progressbar-line";
import PropTypes from "prop-types";

const AttensionSpan = ({
  value = [18, 20, 15, 15, 10],
  height = 8,
  pathColor = "#1974CE",
  trailColor = "#141415",
  textColor = "#FFFFFFF",
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginBottom: "-10px",
        }}
      >
        <p style={{ color: textColor, fontSize: "12px", fontWeight: 400 }}>
          Attension Span
        </p>
      </div>
      {value.map((data) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              color: textColor,
              gap: "3px",
            }}
          >
            <span
              style={{ fontSize: "16px", fontWeight: 700, color: textColor }}
            >
              {data}
            </span>{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: textColor,
                paddingBottom: "1px",
              }}
            >
              Min
            </span>
          </div>
          <div
            style={{
              marginTop: "10px",
              rotate: "180deg",
            }}
          >
            <ProgressBarLine
              value={data}
              min={0}
              max={25}
              strokeWidth={height}
              trailWidth={height}
              styles={{
                path: {
                  stroke: pathColor,
                },
                trail: {
                  stroke: trailColor,
                },
                text: {
                  fontSize: "1px",
                  display: "none",
                },
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
AttensionSpan.propTypes = {
  value: PropTypes.array,
  height: PropTypes.number,
  pathColor: PropTypes.string,
  trailColor: PropTypes.string,
  color: PropTypes.string,
};

export default AttensionSpan;
