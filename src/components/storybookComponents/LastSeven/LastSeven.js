import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import PropTypes from "prop-types";
import "./LastSeven.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMax: 50,
      display: true,
      ticks: {
        color: "#fff",
        stepSize: 5,
        beginAtZero: true,
      },
      grid: {
        color: "#141415",
      },
    },
    x: {
      grid: {
        color: "#141415",
      },
    },
  },
};

const LastSeven = ({
  labels = [
    "Study1",
    "Study2",
    "Study3",
    "Study4",
    "Study5",
    "Study6",
    "Study7",
  ],
  learnArray = [20, 30, 20, 25, 18, 22, 11],
  backgroundColor = "#1974CE",
  borderColor = "#fff",
  height = "220px",
  width = "700px",
}) => {
  return (
    <div className="last-seven" style={{ height: height, width: width }}>
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              data: learnArray,
              borderColor: borderColor,
              backgroundColor: borderColor,
              pointBorderColor: backgroundColor,
              pointBackgroundColor: "#fff",
              fill: {
                target: "origin",
                above: backgroundColor,
              },
            },
          ],
        }}
      />
    </div>
  );
};

LastSeven.propTypes = {
  labels: PropTypes.array,
  learnArray: PropTypes.array,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default LastSeven;
