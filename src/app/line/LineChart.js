"use client";

import React, { useRef, useEffect, useState } from "react";
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
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import Papa from "papaparse";

// Chart.js 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // CSV 파일을 로드하여 데이터로 변환
      fetch("/assets/data.csv")
        .then((response) => response.text())
        .then((csvText) => {
          const parsedData = Papa.parse(csvText, { header: true });
          const labels = parsedData.data.map((row) => row.Year);
          const data = parsedData.data.map((row) => parseFloat(row.Data));
          const smoothedData = parsedData.data.map((row) =>
            parseFloat(row["Smoothed Data"])
          );

          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Data",
                data: data,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Smoothed Data",
                data: smoothedData,
                fill: false,
                borderColor: "rgb(192, 75, 192)",
                tension: 0.1,
              },
            ],
          });
        });
    }
  }, []);

  const options = {
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          drag: {
            enabled: true,
          },
          mode: "x",
          limits: {
            x: { minRange: 1 }, // 최소 확대 범위를 설정하여 너무 많이 확대되지 않도록 제한
          },
        },
      },
    },
  };

  return (
    <div>
      {chartData && <Line ref={chartRef} data={chartData} options={options} />}
    </div>
  );
};

export default LineChart;
