import React from "react";
import "./header.scss";
import metacoinLogo from "../../assets/images/metacoin-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar-brand">
        <img
          onClick={() => navigate("/")}
          src={metacoinLogo}
          alt="metacoins-logo"
        />
      </div>
      <div className="navbar-menu">
        <NavLink className="navbar-link" to="/">
          Create NFT
        </NavLink>
        <button onClick={() => navigate("/login")} className="navbar-link btn">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
