import React, { useState } from "react";
import "./token locker.scss";
import Header from "../../header/Header";
import LoggedHeader from "../../logged header/LoggedHeader";


const TokenLocker = (props) => {
  const [isConnected, setConnected] = useState(false);
  const handleConnect = () => {
    setConnected(true);
  };

  return (
    <div className="page">
      <LoggedHeader />
      <Header class="mobile-visible-flex" />
      <div className="liquidity-locker">
        <div className="content-box row">
          <h2>Token Locker</h2>
        </div>
        <div className="locker-box">
          <div className={isConnected ? "hidden" : ""}>
            <h4>
              Introducing Token Vesting Locking Pools. Token locks are
              represented as shares of a pool, in a similar way to a uniswap
              pool, allowing all ERC20 tokens including Rebasing and
              Deflationary mechanisms to be supported. This means lock amounts
              may change due to decimal rounding, but you will always retain
              your share of the pool. Do not lock Liquidity tokens here, they
              will not be shown in the Unicrypt browser, and will not be
              migrateable.
            </h4>
            <button onClick={handleConnect} className="btn" value="uniswapV2">
              Connect Your Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TokenLocker;
