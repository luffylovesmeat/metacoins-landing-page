import React from "react";
import "./partners.scss";
import binanceImg from "../../assets/images/binance.svg";
import diemImg from "../../assets/images/diem.svg";
import ethImg from "../../assets/images/ethereum.svg";
import solanaImg from "../../assets/images/solana.svg";

const Partners = () => {
  const brands = [binanceImg, diemImg, ethImg, solanaImg];
  return (
    <div className="partners">
      <div className="content-box">
        <h2>Partners</h2>
        <p>
          We have collaborated with our partners and partners by showing them
          how data and process can be strategic business assets. Contact us and
          we can help you achieve the same success!
        </p>
      </div>
      <div className="brands-box">
        <div className="partner-brands">
          {brands.map((brand, index) => (
            <div className="partner-brand" key={index}>
              <img src={brand} alt={brand} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
