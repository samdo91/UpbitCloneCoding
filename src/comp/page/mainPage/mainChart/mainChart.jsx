import React, { useState, useEffect } from "react";
import { request } from "../../../userStore/api/api";

function MainChart(props) {
  const { market } = props;

  const [dailyRecord, setDailyRecord] = useState({
    //한번에 불러온 캔들의 전체 데이터
    date: [],
    //하루의 OHLC를 각각의 배열을 만들어서 관리
    OHLC: [],
    //  전일 종가 대비 변화 금액
    changePrice: "",
  });

  console.log("데일리 차트", dailyRecord);

  const OHLCArr = [];
  // 각각 캔들을 꺼내 OHLC를 채취한다.
  const daillyCandle = (bitCoinDaillyRecord) => {
    bitCoinDaillyRecord.forEach((candle) => {
      // 시가    candle.opening_price,
      // 고가   candle.high_price,
      // 저가  candle.low_price,
      // 종가  candle.trade_price
      //  전일 종가 대비 변화 금액 change_price

      const daillyOHLC = [
        candle.opening_price,
        candle.high_price,
        candle.low_price,
        candle.trade_price,
      ];

      const OHLCList = OHLCArr.push(daillyOHLC);
      setDailyRecord({
        ...dailyRecord,
        data: bitCoinDaillyRecord,
        OHLC: OHLCArr.reverse(),
        changePrice: candle.change_price,
        list: [market, ...OHLCArr.reverse()],
      });
    });
  };

  const daillyRecordfuntion = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const bitCoinDaillyRecord = await request(
      `https://api.upbit.com/v1/candles/days?market=${market}&to=2022-11-23T00%3A00%3A00&count=5&convertingPriceUnit=KRW`,
      options
    );
    daillyCandle(bitCoinDaillyRecord);
  };

  useEffect(() => {
    daillyRecordfuntion();
  }, []);

  return (
    <div>
      <h1>차일드 </h1>
    </div>
  );
}

export default MainChart;
