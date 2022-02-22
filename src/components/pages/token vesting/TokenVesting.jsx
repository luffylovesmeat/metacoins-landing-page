import React, { useState } from "react";
import Header from "../../header/Header";
import LoggedHeader from "../../logged header/LoggedHeader";
import { Select, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./token vesting.scss";

const TokenVesting = () => {
  const [network, setNetwork] = useState("ETH");
  const handleNetwork = (event) => {
    setNetwork("");
  };

  return (
    <div className="page">
      <LoggedHeader />
      <Header class="mobile-visible-flex" />
      <div className="token-vesting-page">
        <div className="content-box row">
          <h2>Token Vesting</h2>
          <div className="row network-select">
            <span>Select network</span>
            <Select
              value={network}
              onChange={handleNetwork}
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
              <MenuItem value="ETH">ETH</MenuItem>
            </Select>
          </div>
        </div>
        <div className="token-vesting-body">
          <div className="row">
            <h4>Lock</h4>
            <div>
              <button className="btn-outline-blue">Download CSV</button>
              <button className="btn-outline-blue">Import CSV</button>
            </div>
          </div>
          <div className="row">
            <div className="vesting-inputs">
              <TextField
                fullWidth
                inputProps={{
                  className: "vesting-input-field",
                }}
                InputLabelProps={{
                  className: "vesting-input-label",
                }}
                label="Token Address?"
                placeholder="Token Address"
                variant="standard"
                helperText=" "
              />
              <TextField
                fullWidth
                label="Who can withdraw the tokens?"
                inputProps={{
                  className: "vesting-input-field",
                }}
                InputLabelProps={{
                  className: "vesting-input-label",
                }}
                placeholder="Who can withdraw the tokens?"
                helperText="(Allow someone else to withdraw these tokens after the lock date)"
                variant="standard"
              />
              <div className="row">
                <TextField
                  fullWidth
                  label="Unlocker Address"
                  inputProps={{
                    className: "vesting-input-field",
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText="Invalid Address"
                  variant="standard"
                />
                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  inputProps={{
                    className: "vesting-input-field",
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText=" "
                  variant="standard"
                />
              </div>
              <div className="row">
                <TextField
                  fullWidth
                  label="Unlocker Address"
                  inputProps={{
                    className: "vesting-input-field",
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText="Invalid Address"
                  variant="standard"
                />
                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  inputProps={{
                    className: "vesting-input-field",
                    min: 0,
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText=" "
                  variant="standard"
                />
              </div>
            </div>
            <div className="vesting-inputs">
              <TextField
                fullWidth
                label="Lock how many tokens?"
                inputProps={{
                  className: "vesting-input-field",
                }}
                InputLabelProps={{
                  className: "vesting-input-label",
                }}
                helperText="(Minimum lock amount 100 tokens)"
                variant="standard"
              />
              <div className="row">
                <TextField
                  fullWidth
                  label="Unlocker Address"
                  inputProps={{
                    className: "vesting-input-field",
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText="Invalid Address"
                  variant="standard"
                />
                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  inputProps={{
                    className: "vesting-input-field",
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText=" "
                  variant="standard"
                />
              </div>
              <div className="row">
                <TextField
                  fullWidth
                  label="Unlocker Address"
                  inputProps={{
                    className: "vesting-input-field",
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText="Invalid Address"
                  variant="standard"
                />
                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  inputProps={{
                    className: "vesting-input-field",
                  }}
                  InputLabelProps={{
                    className: "vesting-input-label",
                  }}
                  helperText=" "
                  variant="standard"
                />
              </div>
              <div className="align-right">
                <button className="btn-outline-blue">Approve</button>
                <button className="btn-outline-blue">Add More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TokenVesting;
