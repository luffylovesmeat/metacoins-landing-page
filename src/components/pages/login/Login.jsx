import React from "react";
import metacoin from "../../../assets/images/metacoin-logo.svg";
import LoginBox from "../../loginbox/LoginBox";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <img src={metacoin} alt="metacoin-logo" />
      <LoginBox />
    </div>
  );
};

export default Login;
