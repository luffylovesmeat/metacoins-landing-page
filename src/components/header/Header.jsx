import React from "react";
import "./header.scss";
import metacoinLogo from "../../assets/images/metacoin-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Header = (props) => {
  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <nav className={props.class}>
      <div className="navbar-brand">
        <img
          onClick={() => navigate("/")}
          src={metacoinLogo}
          alt="metacoins-logo"
        />
      </div>
      <div className="navbar-menu mobile-hidden">
        <NavLink className="navbar-link" to="/create">
          Create NFT
        </NavLink>
        <button onClick={() => navigate("/login")} className="navbar-link btn">
          Login
        </button>
      </div>
      <Search className="mobile-visible">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search???"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </nav>
  );
};

export default Header;
