import React from "react";
import "./staff.scss";
import staff1 from "../../assets/images/Mask Group 1.png";
import staff2 from "../../assets/images/Mask Group 2.png";
import staff3 from "../../assets/images/Mask Group 3.png";
import linkedInImg from "../../assets/images/linkedIn.svg";

const Staff = () => {
  const members = [
    {
      name: `Daniel Dos Santos`,
      image: staff1,
      post: `CEO`,
      linkedin: `/`,
    },
    {
      name: `Esra Selvakumar`,
      image: staff2,
      post: `CTO`,
      linkedin: `/`,
    },
    {
      name: `Christopher Clower`,
      image: staff3,
      post: `COO/CFO`,
      linkedin: `/`,
    },
  ];
  return (
    <div className="staff">
      <div className="content-box">
        <h2>Team Metacoin</h2>
        <p>
          Metacoin is a group of +50 entrepreneurs, designers, artists, and
          developers with rich experience in art, design, and game development
          in popular titles such as Call of Duty, Street Fighter, Final Fantasy,
          Tekken, Marvel Vs Capcom, Soul Calibur, Dreamworks. We have a strong
          passion for revolutionizing the gaming industry by blockchain.
        </p>
      </div>
      <div className="staff-members">
        {members.map((member) => {
          const { name, image, post, linkedin } = member;
          return (
            <div key={name} className="staff-card">
              <img className="staff-img" src={image} alt={name} />
              <p>{name}</p>
              <p>{post}</p>
              <img className="linkedIn-img" src={linkedInImg} alt="linkedIn" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
