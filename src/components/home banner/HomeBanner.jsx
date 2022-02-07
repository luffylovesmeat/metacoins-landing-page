import React from "react";
import bannerCube from "../../assets/images/banner-cube.svg";
import "./homebanner.scss"

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="content-box banner-content">
        <h2>
          Buying bitcoin is cool. You know what is cooler? Buying the next
          bitcoin in the Metaverse.
        </h2>
        <p>
          Enter the metaverse, with metacoins. Work and play is merging and we
          are at the forefront of the new token economy.
        </p>
        <div className="buttons-div">
          <button className="btn">Pre Registration</button>
          <button className="btn-outline">Join Community</button>
        </div>
      </div>
      <div className="mobile-hidden tablet-hidden">
        <img className="banner-cube" src={bannerCube} alt="banner-cube" />
      </div>
    </div>
  );
};

export default HomeBanner;
