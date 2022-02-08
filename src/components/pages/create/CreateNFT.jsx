import React from "react";
import "./create-nft.scss";
import imageNftImg from "../../../assets/images/image-nft.svg";
import videoNftImg from "../../../assets/images/video-nft.svg";
import audioNftImg from "../../../assets/images/audio-nft.svg";
import { Link } from "react-router-dom";
import LoggedHeader from "../../logged header/LoggedHeader";
import Header from "../../header/Header";

const CreateNft = () => {
  const nftTypes = [
    {
      name: "Image",
      alt: "create-pic-nft",
      image: imageNftImg,
      types: "JPEG, PNG, GIF",
    },
    {
      name: "Video",
      alt: "create-video-nft",
      image: videoNftImg,
      types: "MP4, MPEG, AVI",
    },
    {
      name: "Audio",
      alt: "create-audio-nft",
      image: audioNftImg,
      types: "WAV, MP3",
    },
  ];

  return (
    <div className="page">
      <LoggedHeader />
      <Header class="mobile-visible-flex" />
      <div className="create-nft-page">
        <div className="content-box">
          <h2>Create NFT</h2>
        </div>
        <div className="create-nft-parent">
          {nftTypes.map((type) => {
            const route = type.name.toLowerCase();
            return (
              <Link key={type.name} className="link" to={`/create/${route}`}>
                <div className="create-nft-item">
                  <div>
                    <img src={type.image} alt={type.alt} />
                  </div>
                  <div>
                    <h3 className="create-nft-type">{type.name}</h3>
                    <p>{type.types}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateNft;
