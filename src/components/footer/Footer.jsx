import React from "react";
import "./footer.scss";
import metacoinBwImg from "../../assets/images/metacoin-logo-bw.svg";
import instagramImg from "../../assets/images/instagram.svg";
import facebookImg from "../../assets/images/facebook.svg";
import twitterImg from "../../assets/images/twitter.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <img
            className="metacoin-bw"
            src={metacoinBwImg}
            alt="metacoin-logo-bw"
          />
          <a className="footer-link" href="tel:044-44444444">
            Tel: 044-44444444
          </a>
          <a className="footer-link" href="mailto: info@metacoins.in">
            metacoins.info.in
          </a>
        </div>
        <div className="footer-col">
          <a href="/" className="footer-link white">
            Home
          </a>
          <a href="/" className="footer-link white">
            Services
          </a>
          <a href="/" className="footer-link white">
            About Us
          </a>
          <a href="/" className="footer-link white">
            Partners
          </a>
        </div>
        <div className="footer-col">
          <a href="/" className="footer-link white">
            Home
          </a>
          <a href="/" className="footer-link white">
            News
          </a>
          <a href="/" className="footer-link white">
            Team
          </a>
        </div>
        <div className="footer-col">
          <a href="/" className="footer-link white">
            FAQ's
          </a>
          <a href="/" className="footer-link white">
            Terms and Condition
          </a>
          <a href="/" className="footer-link white">
            Privacy Policy
          </a>
          <a href="/" className="footer-link white">
            Disclaimers
          </a>
        </div>
        <div className="footer-col">
          <h3>Get in Touch:</h3>
          <a className="footer-link" href="mailto:hello@metacoins.sg">
            hello@metacoins.sg
          </a>
          <div className="social">
            <div>
              <img src={instagramImg} alt="instagram-link" />
            </div>
            <div>
              <img src={facebookImg} alt="facebook-link" />
            </div>
            <div>
              <img src={twitterImg} alt="twitter-link" />
            </div>
          </div>
        </div>
      </div>
      <p className="footer-foot">
        Copyright © {year} Metacoins All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
