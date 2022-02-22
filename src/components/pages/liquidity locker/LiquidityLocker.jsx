import React, { useState } from "react";
import "./liquidity locker.scss";
import Header from "../../header/Header";
import LoggedHeader from "../../logged header/LoggedHeader";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const LiquidityLocker = (props) => {
  const [isConnected, setConnected] = useState(false);
  const tokens = [`SILK`, `BINANCE`, `ETH`, `BNB`, `MATIC`, `CHIKEY`];
  const [network, setNetwork] = useState("");
  const [exchange, setExchange] = useState("");
  const [tokenSelected, setToken] = useState(false);
  const [lockDetails, setLockDetails] = useState({
    address: "",
    amount: 0,
    unlockDate: "",
    feeType: "",
  });

  const available = 0.0000000619;

  const handleChange = (event) => {
    setNetwork(event.target.value);
  };
  const handleEntry = (event) => {
    const { name, value } = event.target;
    if (name === "amount") {
      return setLockDetails((prevVal) => {
        return {
          ...prevVal,
          [name]: Math.abs(value),
        };
      });
    }
    setLockDetails((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const handleExchange = (event) => {
    setExchange(event.target.value);
    setConnected(true);
  };
  const handleToken = (event) => {
    setToken(true);
  };

  return (
    <div className="page">
      <LoggedHeader />
      <Header class="mobile-visible-flex" />
      <div className="liquidity-locker">
        <div className="content-box row">
          <h2>Liquidity Locker</h2>
          <div className="row network-select">
            <span>Select network</span>
            <Select
              value={network}
              onChange={handleChange}
              displayEmpty
              size="small"
              inputProps={{
                "aria-label": "Select Network",
                className: "dropdown-input",
              }}
              MenuProps={{ className: "dropdown" }}
            >
              <MenuItem disabled value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Mainnet">Mainnet</MenuItem>
            </Select>
          </div>
        </div>
        <div className="locker-box">
          <div className={isConnected ? "hidden" : ""}>
            <h4>Lock Liquidity on which exchange?</h4>
            <button onClick={handleExchange} className="btn" value="uniswapV2">
              Uniswap V2
            </button>
            <button
              onClick={handleExchange}
              className="btn"
              value="sushiswapV1"
            >
              Sushiswap V1
            </button>
          </div>
          <div className={` ${isConnected ? "" : "hidden"}`}>
            <div className="row">
              <div>
                <button className="locker-head-btn active">
                  Lock LP Token
                </button>
                <button className="locker-head-btn">Manage LP Token</button>
              </div>
              <div className={tokenSelected ? "hidden" : ""}>
                <TextField
                  id="outlined-basic"
                  label="Token Address"
                  variant="outlined"
                  placeholder="Enter Token Address"
                  inputProps={{
                    className: "token-input",
                  }}
                  InputLabelProps={{
                    className: "token-input",
                  }}
                />
              </div>
            </div>
            <div className={`token-grid ${tokenSelected ? "hidden" : ""}`}>
              {tokens.map((token, index) => {
                return (
                  <button
                    onClick={handleToken}
                    className="token-btn"
                    key={index}
                  >
                    {token}
                  </button>
                );
              })}
            </div>
            <div className={`lock-details ${tokenSelected ? "" : "hidden"}`}>
              <div className="box">
                <TextField
                  required
                  label="Enter LP tokens address"
                  onChange={handleEntry}
                  placeholder="Enter LP Token Address"
                  name="address"
                  value={lockDetails.address}
                  variant="standard"
                  fullWidth
                  inputProps={{
                    className: "liq-lock-area",
                  }}
                  InputLabelProps={{
                    className: "liq-lock-label",
                    required: false,
                  }}
                />
              </div>
              <div className="box">
                <TextField
                  fullWidth
                  required
                  type="number"
                  label={
                    <div className="row">
                      <span>Enter LP Token Amount to lock</span>
                      <span className="available-token-lock">
                        Available:{" "}
                        {(available - lockDetails.amount).toFixed(20)}
                      </span>
                    </div>
                  }
                  onChange={handleEntry}
                  name="amount"
                  value={lockDetails.amount}
                  variant="standard"
                  placeholder="Enter LP Token amount to lock"
                  inputProps={{
                    className: "liq-lock-area",
                  }}
                  InputLabelProps={{
                    className: "liq-lock-label",
                    required: false,
                  }}
                />
              </div>
              <div className="box">
                <TextField
                  fullWidth
                  required
                  label="Unlock Token"
                  onChange={handleEntry}
                  name="unlockDate"
                  value={lockDetails.unlockDate}
                  variant="standard"
                  placeholder="DD/MM/YYYY"
                  inputProps={{
                    className: "liq-lock-area",
                  }}
                  InputLabelProps={{
                    className: "liq-lock-label",
                    required: false,
                  }}
                />
              </div>
              <div className="box">
                <TextField
                  fullWidth
                  required
                  label="Select Fee Type"
                  onChange={handleEntry}
                  name="feeType"
                  value={lockDetails.feeType}
                  variant="standard"
                  inputProps={{
                    className: "liq-lock-area",
                  }}
                  InputLabelProps={{
                    className: "liq-lock-label",
                    required: false,
                  }}
                />
              </div>
            </div>
            <div className={`align-right ${tokenSelected ? "" : "hidden"}`}>
              <button className="btn">Approve</button>
              <button className="btn">Lock</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LiquidityLocker;
