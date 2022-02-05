import "./App.scss";
import backroundImg from "./assets/images/background.svg";
import Counter from "./components/community count/Counter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeBanner from "./components/home banner/HomeBanner";
import Partners from "./components/partners/Partners";
import Roadmap from "./components/roadmap/Roadmap";
import Services from "./components/services/Services";
import Staff from "./components/staff/Staff";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backroundImg})` }}>
      <Header />
      <div>
        <HomeBanner />
        <Counter />
        <Services />
        <Partners />
        <Roadmap />
        <Staff />
        <Footer />
      </div>
    </div>
  );
}

export default App;
