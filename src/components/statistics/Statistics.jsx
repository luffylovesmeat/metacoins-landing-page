import React from "react";
import { Link } from "react-router-dom";
import "./statistics.scss";
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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = (props) => {
  const labels = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  const options = {
    tension: 0.5,
    responsive: true,
    fill: true,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [3, 4, 6, 2, 7, 2, 8, 0, 8, 1, 4, 7],
        borderColor: "#72DAB0",
        fill: true,
        // backgroundColor: "#72DAB0dd",
      },
    ],
  };
  return (
    <div className="stats-box">
      <div className="stats">
        <div className="row">
          <h4>Statistics</h4>
          <Link
            className="link accent-color"
            style={{ fontSize: "12px" }}
            to="/"
          >
            View More
          </Link>
        </div>
        <div className="artwork-stats">
          <div className="row artwork-stat">
            <span>Artwork Sold</span>
            <span className="accent-color">{46}</span>
          </div>
          <div className="row artwork-stat">
            <span>Artwork Cancel</span>
            <span className="accent-color">{4}</span>
          </div>
          <div className="row artwork-stat">
            <span>Total Earned</span>
            <span className="accent-color">{`456 ETH`}</span>
          </div>
        </div>
        <div className="line-chart">
          <Line options={options} data={data} />
        </div>
        <div className="center">
          <button className="btn">Withdraw</button>
        </div>
      </div>
      <div className="activity-box">
        <div className="row">
          <h4>Activity</h4>
          <Link
            className="link accent-color"
            style={{ fontSize: "12px" }}
            to="/"
          >
            View More
          </Link>
        </div>
        <div>
          <div className="activity row">
            <div className="placeholder-box"></div>
            <div>
              <p>Karma Anime</p>
              <span style={{ fontSize: 12 }}>
                Liked your post "Pyramid NFT"{" "}
              </span>
            </div>
          </div>
          <div className="activity row">
            <div className="placeholder-box"></div>
            <div>
              <p>Karma Anime</p>
              <span style={{ fontSize: 12 }}>
                Liked your post "Pyramid NFT"{" "}
              </span>
            </div>
          </div>
          <div className="activity row">
            <div className="placeholder-box"></div>
            <div>
              <p>Karma Anime</p>
              <span style={{ fontSize: 12 }}>
                Liked your post "Pyramid NFT"{" "}
              </span>
            </div>
          </div>
          <div className="activity row">
            <div className="placeholder-box"></div>
            <div>
              <p>Karma Anime</p>
              <span style={{ fontSize: 12 }}>
                Liked your post "Pyramid NFT"{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
