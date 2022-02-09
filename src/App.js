import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import MobileFoot from "./components/mobile footer/MobileFoot";
import CreateNft from "./components/pages/create/CreateNFT";
import UploadNft from "./components/pages/upload nft/UploadNft";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Marketplace from "./components/pages/marketplace/Marketplace";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateNft />} />
          <Route path="/create/:type" element={<UploadNft />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <MobileFoot />
      </div>
    </Router>
  );
}

export default App;
