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
  smoothing: 1,
  accent: "palevioletred",
  hover: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: "#fff",
        display: false,
      },
    },
    y: {
      display: false,

      grid: {
        display: false,
        drawBorder: false,
      },
      gridLines: {
        display: false,
      },
      suggestedMin: 10,
      suggestedMax: 100,

      ticks: {
        beginAtZero: true,
        steps: 5,
        stepSize: 5,
        max: 100,
        color: "#fff",
        display: false,
      },
    },
  },
};

const DashboardGraph = ({
  labels = [1, 2, 3, 4, 5, 6, 7],
  data = [10, 38, 25, 53, 22, 76, 33],
  height = "119px",
  width = "312px",
  borderColor = "#1974CE",
  fillColor = "#1974CE",
}) => {
  return (
    <div style={{ height: height, width: width, borderRadius:"25px" }}>
      <Line
        options={options}
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              borderColor: borderColor,
              backgroundColor: borderColor,
              smoothing: 1,
              accent: "palevioletred",
              hover: true,
              fill: {
                target: "origin",
                above: fillColor,
              },
              tension: 0.5,
            },
          ],
        }}
      />
    </div>
  );
};

DashboardGraph.propTypes = {
  labels: PropTypes.array,
  data: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
};

export default DashboardGraph;
