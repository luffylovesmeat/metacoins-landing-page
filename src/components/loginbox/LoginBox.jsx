import React, { useState } from "react";
import "./loginbox.scss";
import metamaskImg from "../../assets/images/metamask.svg";
import coinbaseImg from "../../assets/images/coinbase.svg";
import trustWalletImg from "../../assets/images/trust-wallet.svg";
import twitterImg from "../../assets/images/twitter-blue.svg";
import facebookImg from "../../assets/images/facebook-blue.svg";
import googleImg from "../../assets/images/google.svg";
import { TextField, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const LoginBox = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const usingCryptoWallet = [
    {
      name: "metamask",
      image: metamaskImg,
      redirect: "",
    },
    {
      name: "coinbase",
      image: coinbaseImg,
      redirect: "",
    },
    {
      name: "trustwallet",
      image: trustWalletImg,
      redirect: "",
    },
  ];
  const usingSocialMedia = [
    {
      name: "twitter",
      image: twitterImg,
      redirect: "",
    },
    {
      name: "facebook",
      image: facebookImg,
      redirect: "",
    },
    {
      name: "google",
      image: googleImg,
      redirect: "",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };
  const handleTick = (event) => {
    const { name, checked } = event.target;
    setInputs((prevVal) => ({
      ...prevVal,
      [name]: checked,
    }));
  };
  const handleSubmit = (event) => {
    setInputs({
      email: "",
      password: "",
      remember: false,
    });
    event.preventDefault();
  };

  return (
    <div className="login-box">
      <p className="login-box-heading">LOGIN WITH CRYPTO WALLET</p>
      <div className="login-using">
        {usingCryptoWallet.map((wallet) => (
          <div key={wallet.name} className="login-using-btn">
            <img src={wallet.image} alt={`${wallet.name}-img`} />
          </div>
        ))}
      </div>
      <p className="login-box-heading">LOGIN WITH SOCIAL MEDIA</p>
      <div className="login-using">
        {usingSocialMedia.map((social) => (
          <div key={social.name} className="login-using-btn">
            <img src={social.image} alt={`${social.name}-img`} />
          </div>
        ))}
      </div>
      <p className="login-box-heading">OR</p>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            InputLabelProps={{ className: "textfield-label" }}
            InputProps={{ className: "textfield" }}
            className="login-input"
            onChange={handleChange}
            name="email"
            label="Email"
            type="email"
            variant="standard"
            value={inputs.email}
          />
        </div>
        <div>
          <TextField
            InputLabelProps={{ className: "textfield-label" }}
            InputProps={{ className: "textfield" }}
            className="login-input"
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            variant="standard"
            value={inputs.password}
          />
        </div>
        <div className="row">
          <div>
            <Checkbox
              onChange={handleTick}
              name="remember"
              inputProps={{ className: "checkbox" }}
              style={{ color: "#6c77a1" }}
            />{" "}
            Remember Me
          </div>
          <Link to="/passwordreset" className="link forgot-password-link">
            Forgot Password
          </Link>
        </div>
        <div className="center">
          <button className="btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginBox;
