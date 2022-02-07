import React from "react";
import "./mobile footer.scss";
import homeImg from "../../assets/images/home-logo.svg";
import logo2Img from "../../assets/images/logo-2.svg";
import logo3Img from "../../assets/images/logo-3.svg";
import logo4Img from "../../assets/images/logo-4.svg";
import profileImg from "../../assets/images/profile-logo.svg";
import { Link } from "react-router-dom";

const MobileFoot = () => {
  return (
    <div className="mobile-visible floating">
      <div className="floating-container">
        <Link className="link" to="/">
          <div>
            <img className="foot-logo" src={homeImg} alt="home-logo" />
          </div>
        </Link>
        <Link className="link" to="/">
          <div>
            <img className="foot-logo" src={logo2Img} alt="menu-logo" />
          </div>
        </Link>
        <Link className="link" to="/create">
          <div className="create-nft-btn">
            <img className="foot-logo" src={logo3Img} alt="create-nft-logo" />
          </div>
        </Link>
        <Link className="link" to="/">
          <div>
            <img className="foot-logo" src={logo4Img} alt="box-logo" />
          </div>
        </Link>
        <Link className="link" to="/login">
          <div>
            <img className="foot-logo" src={profileImg} alt="profile-logo" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileFoot;
