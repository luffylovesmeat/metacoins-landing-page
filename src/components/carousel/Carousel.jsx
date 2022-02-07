import React, { useEffect, useState } from "react";
import "./carousel.scss";
import Carousel from "react-elastic-carousel";
import MetaServicesImg from "../../assets/images/metaServices.svg";

const MultiCarousel = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setState(window.innerWidth <= 1000 ? false : true);
    });
  });

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  const services = [
    {
      projectName: `LAUNCHPAD`,
      content: [
        `Launchpad is a token launch platform for transformative project.`,
        `The new subscription format allows Metacoin holders to commit an amount of Metacoin towards a token sale where their final allocation of the new token is determined by the ratio of their committed Metacoin against the total committed Metacoins by all participating users.`,
        `There will be max cap of token allocation per user to ensure a fair allocation for all participants.`,
      ],
    },
    {
      projectName: `DEFI`,
      content: [
        `Metacoin Earn is a one-stop hub on Metacoin where you can see all your earning possibilities open for you and the crypto funds you hold. You can find alternative crypto earning options if you are a Holder.`,
        `Using Metacoin Earn is easy. Choose from dozens of available crypto financial products displayed on the platform, transfer your crypto into your chosen solution, and watch your funds grow. Cashing out your profits is also about as easy as opting into your selected product.`,
      ],
    },
    {
      projectName: `NFT`,
      content: [
        `A non-fungible token (NFT) is a cryptographic token that represents a unique asset. They function as verifiable proofs of authenticity and ownership within a blockchain network. NFTs are not interchangeablewith each other and introduce scarcity to the digital world. Metacoins offer a robust NFT marketplace and NFT engine to both mint and buy/sell raribles.`,
      ],
    },
  ];

  return (
    <Carousel showArrows={state} breakPoints={breakpoints}>
      {services.map((data, index) => {
        const { projectName, content } = data;
        return (
          <div key={index} className="service-card">
            <img
              className="metacoin-service-img"
              src={MetaServicesImg}
              alt="MetaCoins-services"
            />
            <div className="card">
              <h3>{projectName}</h3>
              {content.map((con, indexC) => (
                <p key={indexC}>{con}</p>
              ))}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MultiCarousel;
