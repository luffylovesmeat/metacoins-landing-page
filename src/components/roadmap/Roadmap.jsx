import React from "react";
import "./roadmap.scss";
import roadmapImg from "../../assets/images/roadmap.svg";

const Roadmap = () => {
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
            Website Launch Pre-hype Raise Seed Funding Development Plan
          </div>
          <div className="map map-2">
            Community Building Token Generation NFT Marketplace Launch DEX
            Launch (Muliple AMMs) Onboard Gampay NFTs
          </div>
          <div className="map map-3">
            Launch Token Vesting Service Round 1 Fund Raise Launchpad Release
            Onboard Gampay IDO In Launchpad Onboarding to DEXes
          </div>
          <div className="map map-4">
            Launch Token Vesting Service Round 2 Fund Raise Launchpad Release
            Onboard Gampay IDO In Launchpad Onboarding to DEXes
          </div>
        </div>
        <img src={roadmapImg} alt={roadmapImg} />
      </div>
    </div>
  );
};

export default Roadmap;
