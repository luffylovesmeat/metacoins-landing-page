import React from "react";
import "./nftcard.scss";

const NFTCard = (props) => {
  const { id, name, price, saleEnd, nft, likes, asset } = props;
  
  const handleClick = (event) => {
    if (event.target.name === "asset") {
    } else {
    }
  };
  const handleView = (event) => {};

  return (
    <div className="nft-card">
      <img src={nft} alt={name} />
      <div className="nft-info">
        <div className="row">
          <h4>{name || ""}</h4>
          <h4>{likes || ""}</h4>
        </div>
        <div className="row">
          <div>
            <p>Current Bid:</p>
            <p className="accent-color">{price || ""}</p>
          </div>
          <div>
            <p>Ends In:</p>
            <p className="accent-color">{saleEnd || ""}</p>
          </div>
        </div>
        <div className="row button-box">
          <button onClick={handleView} name="view" className="btn-outline">
            View
          </button>
          <button
            onClick={handleClick}
            name={asset ? "asset" : "bid"}
            className="btn"
          >
            {asset ? `Withdraw` : `Bid Now`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
