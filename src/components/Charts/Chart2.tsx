/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

//@ts-ignore
const MyChart = ({ chartData }) => {
  const canvasRef = useRef(null);
  let myChart: Chart<"bar", any, string>;

  useEffect(() => {
    const labels = ["Januari", "Februari", "Maret", "April", "Mei"];
    //@ts-ignore
    const ctx = canvasRef.current?.getContext("2d");

    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Data",
            data: chartData,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return <canvas ref={canvasRef}></canvas>;
};

export default MyChart;
