import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import MobileFoot from "./components/mobile footer/MobileFoot";

function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <MobileFoot />

      </div>
    </Router>
  );
}

export default App;
