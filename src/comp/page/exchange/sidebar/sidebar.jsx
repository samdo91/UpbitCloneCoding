/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { request } from "../../../userStore/api/api";

function Sidebar() {
  const [coinList, setConList] = useState({
    isList: false,
    list: [],
  });
  const coinArr = [];
  // marketList를 받아서
  const markerApi = async (List) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const Lists = List.slice(0, 10);
    Lists.forEach(async (coin) => {
      const currentPrice = await request(
        `https://api.upbit.com/v1/ticker?markets=${coin.market}`,
        options
      );
      const apiList = {
        currentPrice: currentPrice[0],
        market: coin.market,
        koreanName: coin.korean_name,
        englishName: coin.english_name,
      };
      coinArr.push(apiList);

      setConList({ isList: true, list: coinArr });
    });
  };
  // 각 마켓의 api를 가져온다. 리스트에 포암된 것은 마켓이름 한국어이름 시장정보
  const marketList = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const List = await request(
      "https://api.upbit.com/v1/market/all?isDetails=false",
      options
    );
    markerApi(List);
  };

  useEffect(() => {
    marketList();
  }, []);
  return (
    <div
      css={css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      })}
    >
      <div>
        <table>
          <thead>
            <tr>
              <th>영문명</th>
              <th>현재가</th>
              <th>전일대비</th>
              <th>거래대금</th>
            </tr>
          </thead>
          <tbody>
            {coinList.isList
              ? coinList.list.map((market, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Link to={`/exchange/${market.market}`}>
                          {market.englishName}
                        </Link>
                      </td>
                      <td>
                        <Link to={`/exchange/${market.market}`}>
                          {market.currentPrice.trade_date}
                        </Link>
                      </td>
                      <td>
                        <Link to={`/exchange/${market.market}`}>
                          {market.currentPrice.signed_change_rate}
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <Link to={`/exchange/${market.market}`}>
                          {market.currentPrice.acc_trade_price}
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sidebar;
