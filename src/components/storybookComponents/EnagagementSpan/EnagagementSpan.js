import React from "react";
import { ProgressBarLine } from "react-progressbar-line";
import PropTypes from "prop-types";

const EngagementSpan = ({
  value = [80, 73, 64, 63, 61],
  height = 8,
  pathColor = "#1974CE",
  trailColor = "#141415",
  textColor = "#FFF",
}) => {
  return (
    <div>
      <div
        style={{
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
              marginTop: "10px",
            }}
          >
            <ProgressBarLine
              value={data}
              min={0}
              max={100}
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
              %
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
EngagementSpan.propTypes = {
  value: PropTypes.array,
  height: PropTypes.number,
  pathColor: PropTypes.string,
  trailColor: PropTypes.string,
  color: PropTypes.string,
};

export default EngagementSpan;
