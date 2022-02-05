import React from "react";
import "./header.scss";
import metacoinLogo from "../../assets/images/metacoin-logo.svg";

const Header = () => {
  return (
    <nav>
      <div className="navbar-brand">
        <img src={metacoinLogo} alt="metacoins-logo" />
      </div>
      <div className="navbar-menu">
          <a className="navbar-link" href="/">Create NFT</a>
          <button className="navbar-link btn">Login</button>
      </div>
    </nav>
  );
};

export default Header;
