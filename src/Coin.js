import React from "react";
import "./Coin.css";
import load from "./loading.gif";

const Coin = ({ image, name, price, volume, pricechange, marketcap,high,low }) => {
  if(!Coin){
    document.getElementsByClassName("coin-container").innerHTML = load
  }
  else
  {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{price}</p>
          
          <p className="coin-max-val">High : {high}</p>
          <p className="coin-low-val">Low : {low}</p>

          {pricechange < 0 ? (
            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: Rs.{marketcap.toLocaleString()}
          </p>

        </div>
      </div>
    </div>
  );
          }
};

export default Coin;
