import React from "react";
import MultiCarousel from "../carousel/Carousel";
import "./services.scss";

const Services = () => {
  return (
    <div className="services-box">
      <div className="align-right">
        <div className="content-box">
          <h2>Services and Products</h2>
          <p>
            The full stack solution for crypto Play, Stake and Earn the best new
            crypto assets all under one roof
          </p>
        </div>
      </div>
      <div className="services-carousel">
        <MultiCarousel />
      </div>
    </div>
  );
};

export default Services;
