import React, { useState, useEffect } from "react";
import "./roadmap.scss";
import roadmapImg from "../../assets/images/roadmap.svg";
import roadmapVImg from "../../assets/images/roadmap-v.svg";

const Roadmap = () => {
  const [state, setState] = useState(window.innerWidth <= 768 ? false : true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setState(window.innerWidth <= 768 ? false : true);
    });
  });
  return (
    <div className="roadmap">
      <div className="align-right">
        <div className="content-box">
          <h2>Roadmap</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat a
            officiis cumque. Sed minima rerum expedita, temporibus reiciendis
            commodi sunt error blanditiis ea? Repellendus laboriosam nihil optio
            voluptatem dolor? Error!
          </p>
        </div>
      </div>
      <div className="roadmap-map">
        <div className="roadmaps">
          <div className="map map-1">
            <h3>Q1, 2022</h3>
            Website Launch Pre-hype Raise Seed Funding Development Plan
          </div>
          <div className="map map-2">
            <h3>Q2, 2022</h3>
            Community Building Token Generation NFT Marketplace Launch DEX
            Launch (Muliple AMMs) Onboard Gampay NFTs
          </div>
          <div className="map map-3">
            <h3>Q3, 2022</h3>
            Launch Token Vesting Service Round 1 Fund Raise Launchpad Release
            Onboard Gampay IDO In Launchpad Onboarding to DEXes
          </div>
          <div className="map map-4">
            <h3>Q4, 2022</h3>
            Launch Token Vesting Service Round 2 Fund Raise Launchpad Release
            Onboard Gampay IDO In Launchpad Onboarding to DEXes
          </div>
        </div>
        <img src={state ? roadmapImg : roadmapVImg} alt={roadmapImg} />
      </div>
    </div>
  );
};

export default Roadmap;
