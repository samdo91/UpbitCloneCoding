/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext, useEffect } from "react";

import MainPageHeader from "../../header/mainPageHeader";
import MainPageTitle from "./mainPageTitle/mainPageTitle";
import SwiperBanner from "./swiperBanner/swiperBanner";
import CandlestickChartMaker from "./mainChart/candlesticChart/candlestickChartMaker";
import CoinPricePage from "./coinPricePage/coinPricePage";

import {
  dailyRecordContext,
  setDailyRecordContext,
} from "../../userStore/context/contextApi";

function MainPage() {
  const dailyRecord = useContext(dailyRecordContext);
  const setDailyRecord = useContext(setDailyRecordContext);

  return (
    <div>
      <MainPageHeader />
      <MainPageTitle />
      <SwiperBanner />
      <div
        css={css({
          display: "flex",
          margin: "40px",
          justifyContent: "space-around",
        })}
      >
        <CandlestickChartMaker market="KRW-BTC" />
        <CandlestickChartMaker market="KRW-DOGE" />
        <CoinPricePage />
      </div>
    </div>
  );
}
export default MainPage;
