import React from "react";
import { Pie } from "react-chartjs-2";
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
  ArcElement,
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
  Filler,
  ArcElement
);

const PieChart = ({
  labels = ["Low", "Average", "High"],
  data = [33, 33, 44],
  backgroundColor = ["#5BA4EB", "#328DE6", "#1974CE"],
  legendColor = "#1974CE",
  width = "180px",
}) => {
  return (
    <div style={{ width: width }}>
      <Pie
        options={{
          responsive: true,
          plugins: {
            legend: {
              labels: {
                boxWidth: 10,
                boxHeight: 12,
                borderRadius: 5,
                borderColor: "none",
                borderWidth: 0,
                usePointStyle: true,
                margin: 10,
                padding: 10,
                color: legendColor,

                font: {
                  size: 12,
                  weight: "500",
                },
              },

              display: "block",
              position: "top",
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
              borderColor: "none",
            },
          },
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "My First Dataset",
              data: data,
              backgroundColor: backgroundColor,
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  );
};

PieChart.propTypes = {
  labels: PropTypes.array,
  data: PropTypes.array,
  backgroundColor: PropTypes.array,
  legendColor: PropTypes.string,
  width: PropTypes.string,
};

export default PieChart;
