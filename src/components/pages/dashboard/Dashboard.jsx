import React, { useState } from "react";
import Header from "../../header/Header";
import LoggedHeader from "../../logged header/LoggedHeader";
import Assets from "../../my assets/Assets";
import Statistics from "../../statistics/Statistics";
import "./dashboard.scss";

const Dashboard = () => {
  const [page, setPage] = useState(<Assets asset />);
  const assets = [{}];
  const handleSwitch = (event) => {
    setPage(() => {
      if (event.target.name === "assets") return <Assets asset />;
      return <Statistics />;
    });
  };
  return (
    <div className="page">
      <LoggedHeader />
      <Header class="mobile-visible-flex" />
      <div className="dashboard-page">
        <div className="page-switch-box mobile-visible">
          <button onClick={handleSwitch} className="page-switch" name="assets">
            Assets
          </button>
          <button onClick={handleSwitch} className="page-switch" name="stats">
            Statistics
          </button>
        </div>
        <div className="mobile-visible">{page}</div>
        <div className="row mobile-hidden">
          <Assets asset />
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
