import React, { useState } from "react";
import "./assets.scss";
import Carousel from "react-elastic-carousel";
import nftImg from "../../assets/images/nft.svg";
import NFTCard from "../nft card/NFTCard";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Assets = (props) => {
  const [category, setCategory] = useState("Category");
  const categories = [
    {
      value: "Category",
      label: "Category",
    },
  ];

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const assetData = [
    {
      id: 1,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
      status: `sold`,
    },
    {
      id: 2,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
      status: `owned`,
    },
    {
      id: 3,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `video`,
      status: `bought`,
    },
    {
      id: 4,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
      status: `owned`,
    },
    {
      id: 5,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
      status: `sold`,
    },
    {
      id: 6,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `video`,
      status: `sold`,
    },
    {
      id: 7,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
      status: `sold`,
    },
    {
      id: 8,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
      status: `sold`,
    },
    {
      id: 9,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `video`,
      status: `bought`,
    },
  ];
  const bannerData = [
    {
      id: 1,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
    },
    {
      id: 2,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `image`,
    },
    {
      id: 3,
      name: `Round Hall Wondershall`,
      price: `1.5ETH`,
      author: `Alexander Sand`,
      saleEnd: `x Hours`,
      nft: nftImg,
      type: `video`,
    },
  ];
  const [assetArr, setAssestArr] = useState(assetData);

  const handleFilter = (event) => {
    if (event.target.name === `all`) return setAssestArr(assetData);
    setAssestArr(
      assetData.filter((data) => {
        return data.status === event.target.name;
      })
    );
  };
  const hidden = props.bannerHidden ? "hidden" : "";

  const buttonRow = props.asset ? (
    <div className="buttons-box-box">
      <div className="row buttons-box">
        <button onClick={handleFilter} name="all" className="btn">
          All
        </button>
        <button onClick={handleFilter} name="owned" className="btn-outline">
          Owned
        </button>
        <button onClick={handleFilter} name="bought" className="btn-outline">
          Bought
        </button>
        <button onClick={handleFilter} name="sold" className="btn-outline">
          Sold
        </button>
      </div>
    </div>
  ) : (
    <div className="buttons-box-box">
      <div className="row buttons-box">
        <button onClick={handleFilter} name="all" className="btn">
          All
        </button>
        <button onClick={handleFilter} name="art" className="btn-outline">
          Art
        </button>
        <button onClick={handleFilter} name="game" className="btn-outline">
          Game
        </button>
        <button
          onClick={handleFilter}
          name="photography"
          className="btn-outline"
        >
          Photography
        </button>
        <button onClick={handleFilter} name="video" className="btn-outline">
          Video
        </button>
        <button onClick={handleFilter} name="audio" className="btn-outline">
          Audio
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className={`sale-banner mobile-hidden ${hidden}`}>
        <Carousel
          className="banner-carousel"
          itemsToShow={1}
          showArrows={false}
          enableAutoPlay={true}
        >
          {bannerData.map((data) => (
            <div className="banner" key={data.id}>
              <div>
                <img
                  className="nft-banner-img"
                  src={data.nft}
                  alt={data.name}
                />
              </div>
              <div className="banner-data">
                <h2>{data.name}</h2>
                <h3>{data.price}</h3>
                <p>Uploaded by {data.author}</p>
                <div className="buttons-box">
                  <button className="btn">Bid Now</button>
                  <div>
                    <p className="no-padding accent-color">Ends In:</p>
                    <p className="no-padding">{data.saleEnd}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="all-assets">
        <div className="asset-filters row">
          <div className="row mobile-hidden">
            <h4 className="right-1rem">My Assets</h4>
            <TextField
              size="small"
              inputProps={{ className: "dropdown-input" }}
              select
              value={category}
              onChange={handleChange}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {buttonRow}
        </div>
        <div className="assets">
          {assetArr.map((data) => (
            <NFTCard
              key={data.id}
              name={data.name}
              likes={50}
              price={data.price}
              saleEnd={data.saleEnd}
              nft={data.nft}
              asset={props.asset}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Assets;
