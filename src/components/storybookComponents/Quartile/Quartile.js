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
      suggestedMax: 100,
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

const Quartile = ({
  labels = ["1st Quartile", "2nd Quartile", "3rd Quartile", "4th Quartile"],
  quater = [82, 65, 65, 50],
  barColors = ["#6200EE", "#AC42FF", "#46B9FA", "#82FFF7"],
  height = "220px",
  width = "400px",
}) => {
  return (
    <div style={{ margin: 0 }}>
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

Quartile.propTypes = {
  labels:PropTypes.array,
  quater:PropTypes.array,
  barColors:PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Quartile;
