// import React from "react";
// import { Radar } from "react-chartjs-2";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   RadialLinearScale,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   RadialLinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// const RadarChart = () => {
//   const data = {
//     labels: [
//       "Eating",
//       "Drinking",
//       "Sleeping",
//       "Designing",
//       "Coding",
//       "Cycling",
//       "Running",
//     ],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [65, 59, 90, 81, 56, 55, 40],
//         fill: true,
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         pointBackgroundColor: "rgba(255, 99, 132, 1)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgba(255, 99, 132, 1)",
//       },
//       {
//         label: "My Second Dataset",
//         data: [28, 48, 40, 19, 96, 27, 100],
//         fill: true,
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         borderColor: "rgba(54, 162, 235, 1)",
//         pointBackgroundColor: "rgba(54, 162, 235, 1)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgba(54, 162, 235, 1)",
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       r: {
//         angleLines: {
//           display: false,
//         },
//         suggestedMin: 0,
//         suggestedMax: 100,
//       },
//     },
//   };

//   return <Radar data={data} options={options} />;
// };

// export default RadarChart;

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function customColor(context) {
  let index = context.chart.legend.legendItems;
  console.log(context.chart.legend.legendItems, "kjafsdkajs");
  // console.log(index[0]);
  // if (index == "Study1") {
  //   return "#E323FF";
  // }

  return "rgb(102 102 102)";
}

export const options = {
  responsive: true,
  grouped: true,
  maintainAspectRatio: true,
  tooltips: { enabled: false },
  hover: { mode: null },
  plugins: {
    legend: {
      labels: {
        boxWidth: 10,
        color: "rgba(255, 255, 255, 0.774)",
        padding: 20,
        font: {
          size: 14,
          weight: "600",
          color: "#fff",
          paddingLeft: 10,
        },
        usePointStyle: true,
      },
      padding: 10,
      display: "block",
      position: "top",
    },
  },

  scales: {
    r: {
      // pointLabels: {
      //   display: false, // Hides the labels around the radar chart
      // },
      beginAtZero: true,
      angleLines: {
        display: true,
        color: "#c0c0c0",
        borderDash: [2, 2],
      },

      // backgroundColor: "#c0c0c0",
      grid: {
        display: true,
        // color: "#c0c0c0",
      },
      ticks: {
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        backgroundColor: "transparent",
        display: false, // Hides the labels in the middel (numbers)
        color: "white",
        marginLeft: "20px",
      },
    },
  },
};

function RadarChart(props) {
  const [dataset, setdataset] = useState([
    {
      label: "Study1",
      data: [65, 59, 90, 81],

      backgroundColor: "rgba(238, 242, 7, 0.16)",
      borderColor: "rgba(238, 242, 7)",
    },
    {
      label: "Study2",
      data: [28, 48, 40, 19],
      backgroundColor: "rgba(74, 255, 92, 0.16)",
      borderColor: "rgba(74, 255, 92)",
    },
    {
      label: "Study3",
      data: [81, 56, 55, 40],
      backgroundColor: "rgba(77, 255, 223, 0.16)",
      borderColor: "rgba(77, 255, 223)",
    },
    {
      label: "Study4",
      data: [65, 59, 55, 40],
      backgroundColor: "rgba(227, 35, 255, 0.16)",
      borderColor: "rgba(227, 35, 255)",
    },
    {
      label: "Study5",
      data: [28, 48, 40, 100],
      backgroundColor: "rgba(10, 232, 246, 0.16)",
      borderColor: "rgba(10, 232, 246)",
    },
  ]);
  console.log(props);
  useEffect(() => {
    // {
    //   data: [90, 90, 90, 30],
    //   backgroundColor: "transparent",
    //   borderColor: "rgba(255, 99, 132, 1)",
    //   borderWidth: 1,
    // },
    // {
    //   data: [70, 60, 50, 30],
    //   backgroundColor: "transparent",
    //   borderColor: "rgba(0,0, 132, 1)",
    //   borderWidth: 1,
    // },
    return () => {};
  }, []);
  return (
    <Radar
      options={options}
      data={{
        labels: ["Engagement", "Performance", "Rating", "Duration"],

        datasets: dataset,
      }}
      //   style={{ background: "red" }}
    />
  );
}
export default RadarChart;
