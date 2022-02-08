import React from "react";
import { useParams } from "react-router-dom";
import "./uploadnft.scss";
import Error from "../error404/Error";
import { TextField } from "@mui/material";
import LoggedHeader from "../../logged header/LoggedHeader";
import Header from "../../header/Header";

const UploadNft = () => {
  const { type } = useParams();
  if (type === "image" || type === "video" || type === "audio")
    return (
      <div className="page">
        <LoggedHeader />
        <Header class="mobile-visible-flex" />
        <div className="upload-nft-page">
          <div className="upload-nft-box">
            <div className="preview-box">
              <h4>Preview</h4>
              <div className="preview"></div>
              <div className="multi-preview">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="nft-details">
              <h4>Name</h4>
              <TextField
                InputLabelProps={{ className: "textfield-label" }}
                InputProps={{
                  className: "textfield",
                  style: {
                    fontSize: "14px",
                    fontWeight: "400",
                  },
                }}
                className="text-area"
                placeholder="e.g: Reddemable T-shirt with logo"
                variant="standard"
              />
              <h4>Author</h4>
              <TextField
                InputLabelProps={{ className: "textfield-label" }}
                InputProps={{
                  className: "textfield",
                  style: {
                    fontSize: "14px",
                    fontWeight: "400",
                  },
                }}
                className="text-area"
                placeholder="e.g: John Doe"
                variant="standard"
              />
              <h4>Description</h4>
              <TextField
                InputLabelProps={{ className: "textfield-label" }}
                InputProps={{
                  className: "textfield",
                  style: {
                    fontSize: "14px",
                    fontWeight: "400",
                  },
                }}
                className="text-area"
                placeholder="e.g: Reddemable T-shirt with logo"
                multiline
                rows={6}
              />
              <div className="center">
                <button className="btn">Create NFT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <Error />;
};

export default UploadNft;
