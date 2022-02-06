import React from "react";
import backroundImg from ".././../../assets/images/background.svg";
import HomeBanner from "../../home banner/HomeBanner";
import Partners from "../../partners/Partners";
import Roadmap from "../../roadmap/Roadmap";
import Services from "../../services/Services";
import Staff from "../../staff/Staff";
import Counter from "../../community count/Counter";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import './home.scss'

const Home = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${backroundImg})` }}>
      <Header />
      <HomeBanner />
      <Counter />
      <Services />
      <Partners />
      <Roadmap />
      <Staff />
      <Footer />
    </div>
  );
};

export default Home;
