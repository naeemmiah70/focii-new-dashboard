import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  grouped: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMax: 50,
      ticks: {
        color: "#FFFFFF",
      },
      grid: {
        color: "#141415",
      },
    },
    x: {
      ticks: {
        color: "#FFFFFF",
        fontWeight: 400,
        fontSize: "8px",
      },
      grid: {
        color: "#141415",
      },
    },
  },
};

const TopSeven = ({
  labels = [
    "Study1",
    "Study2",
    "Study3",
    "Study4",
    "Study5",
    
  ],
  quater = [25, 20, 28, 23, 35],
  barColors = [
    "#6200EE",
    "#6200EE",
    "#6200EE",
    "#6200EE",
    "#6200EE",
    "#6200EE",
    "#6200EE",
  ],
  height = "220px",
  width = "800px",
}) => {
  return (
    <div>
      <Bar
        height={height}
        width={width}
        options={options}
        data={{
          labels,
          datasets: [
            {
              data: quater,
              backgroundColor: barColors,
            
            },
          ],
        }}
      />
    </div>
  );
};

TopSeven.propTypes = {
  labels:PropTypes.array,
  quater:PropTypes.array,
  barColors:PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string,
};


export default TopSeven;
