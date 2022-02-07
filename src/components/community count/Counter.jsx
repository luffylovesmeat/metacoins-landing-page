import React, { useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [users, setUsers] = useState(19999);

  return (
    <div className="counter-box">
      <div className="content-box">
        <h2>People joining Pantem Community</h2>
        <div className="counter">
          {users
            .toString()
            .split("")
            .map((num, index) => {
              return (
                <div key={index} className="num-box">
                  <span className="number">{num}</span>
                </div>
              );
            })}
        </div>
        <div className="right-align-sm">
          <button className="btn">Join Us Now</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
