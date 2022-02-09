import React from "react";
import "./marketplace.scss";
import Header from "../../header/Header";
import LoggedHeader from "../../logged header/LoggedHeader";
import Assets from "../../my assets/Assets";

const Marketplace = () => {
  return (
    <div className="page">
      <LoggedHeader />
      <Header class="mobile-visible-flex" />
      <div className="marketplace-page">
        <Assets bannerHidden />
      </div>
    </div>
  );
};

export default Marketplace;
