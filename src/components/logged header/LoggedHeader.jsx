import React from "react";
import "./logged-header.scss";
import metacoinsLogo from "../../assets/images/metacoin-logo.svg";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const LoggedHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="logged-header mobile-hidden">
      <img className="header-logo" src={metacoinsLogo} alt="metacoins-logo" />
      <div className="header-menu">
        <div className="btn-link" onClick={handleClick}>
          Services
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Service 1</MenuItem>
          <MenuItem onClick={handleClose}>Service 2</MenuItem>
          <MenuItem onClick={handleClose}>Service 3</MenuItem>
        </Menu>
        <div className="btn-link">Dashboard</div>
        <div className="btn-link">
          <Link className="link" to="/create">
            Create NFT
          </Link>
        </div>
        <div className="profile-btn">Profile Name</div>
      </div>
    </div>
  );
};

export default LoggedHeader;
