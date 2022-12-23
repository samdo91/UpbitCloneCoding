import React, { useState, useEffect } from "react";
import { request } from "../../../userStore/api/api";

const coinList = [
  { market: "KRW-BTC", korean_name: "비트코인", english_name: "Bitcoin" },
  { market: "KRW-ETH", korean_name: "이더리움", english_name: "Ethereum" },
  { market: "BTC-XRP", korean_name: "리플", english_name: "Ripple" },
  { market: "BTC-DOGE", korean_name: "도지코인", english_name: "Dogecoin" },
  { market: "KRW-ADA", korean_name: "에이다", english_name: "Ada" },
];

function CoinPricePage() {
  const [priceState, setPriceState] = useState({ price: [] });
  const pricearrs = [];

  const todayCoinPrice = () => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    coinList.map(async (coin) => {
      const coninsPrice = await request(
        `https://api.upbit.com/v1/ticker?markets=${coin.market}`,
        options
      );
      pricearrs.push({
        koreanName: `${coin.korean_name}`,
        price: coninsPrice[0],
      });
      setPriceState({ price: pricearrs });
    });
  };

  useEffect(() => {
    todayCoinPrice();
  }, []);

  return (
    <div>
      <h1>코인시세</h1>

      {priceState.price.map((coinItem, index) => {
        return (
          <div key={index}>
            <div>
              {coinItem.koreanName} {coinItem.price.trade_price} KRW
            </div>
            <div> </div>
          </div>
        );
      })}
    </div>
  );
}

export default CoinPricePage;
