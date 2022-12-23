/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { request } from "../../../../userStore/api/api";
import CandlesticChart from "./candlesticChart";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
function CandlestickChartMaker(props) {
  const { market } = props;
  const [dailyRecord, setDailyRecord] = useState({
    //하루의 OHLC를 각각의 배열을 만들어서 관리
    OHLC: [],
    //  전일 종가 대비 변화 금액
    changePrice: "",
    // priceData를 저장한다. porps로 CandlesticChart 컨포넌트로 넘겨준다.
    priceDataList: [],
    //volumeData를 저장한다. porps로 CandlesticChart 컨포넌트로 넘겨준다.
    volumeDataList: [],
    //데이터리스트가 준비되었는가 하는 이야기다.
    isDataList: false,
    //종가
    trade_price: "",
    //전일 종가 대비 체인지 레이트
    change_rate: "",
  });

  const OHLCArr = [];
  const volumeDataArr = [];

  //   const volumeData = (bitCoinDaillyRecord) => {
  //     bitCoinDaillyRecord.forEach((candle) => {
  //       const dailyVolume = {
  //         time: candle.candle_date_time_utc.substr(0, 10),
  //         valiue: candle.candle_acc_trade_volume,
  //       };
  //       const volumeList = volumeDataArr.push(dailyVolume);

  //       setDailyRecord({
  //         ...dailyRecord,
  //         volumeDataList: volumeDataArr.reverse(),
  //       });
  //     });
  //   };

  const priceData = (bitCoinDaillyRecord) => {
    bitCoinDaillyRecord.forEach((candle) => {
      // 시가    candle.opening_price,
      // 고가   candle.high_price,
      // 저가  candle.low_price,
      // 종가  candle.trade_price
      //  전일 종가 대비 변화 금액 change_price

      const daillyOHLC = {
        time: {
          day: parseInt(candle.candle_date_time_utc.substr(8, 2)),
          month: parseInt(candle.candle_date_time_utc.substr(5, 2)),
          year: parseInt(candle.candle_date_time_utc.substr(0, 4)),
        },
        open: candle.opening_price,
        high: candle.high_price,
        low: candle.low_price,
        close: candle.trade_price,
      };

      const OHLCList = OHLCArr.push(daillyOHLC);

      const dailyVolume = {
        time: {
          day: parseInt(candle.candle_date_time_utc.substr(8, 2)),
          month: parseInt(candle.candle_date_time_utc.substr(5, 2)),
          year: parseInt(candle.candle_date_time_utc.substr(0, 4)),
        },
        value: candle.candle_acc_trade_volume,
      };
      const volumeList = volumeDataArr.push(dailyVolume);

      setDailyRecord({
        ...dailyRecord,
        data: bitCoinDaillyRecord,
        OHLC: OHLCArr,
        changePrice: candle.change_price,
        priceDataList: [...OHLCArr],
        volumeDataList: volumeDataArr,
        isDataList: true,
        trade_price: candle.trade_price,
        change_rate: candle.change_rate,
      });
    });
  };

  // 각각 캔들을 꺼내 OHLC를 채취한다.
  const daillyCandleMaker = (bitCoinDaillyRecord) => {
    priceData(bitCoinDaillyRecord);
    // volumeData(bitCoinDaillyRecord);
  };

  const daillyRecordfuntion = async (market) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const coinDaillyRecord = await request(
      `https://api.upbit.com/v1/candles/days?market=${market}&to=2022-12-20T00%3A00%3A00&count=200&convertingPriceUnit=KRW`,
      options
    );
    daillyCandleMaker(coinDaillyRecord);
  };

  useEffect(() => {
    daillyRecordfuntion(market);
    setDailyRecord({
      ...dailyRecord,
    });
  }, []);

  return (
    <div>
      <div css={css({ display: "" })}>
        <h1> {market}</h1>
        <h3
          css={css({
            color: dailyRecord.changePrice > 0 ? "red" : "blue",
          })}
        >
          {" "}
          {dailyRecord.trade_price}
        </h3>
        <p
          css={css({
            color: dailyRecord.changePrice > 0 ? "red" : "blue",
          })}
        >
          {dailyRecord.changePrice > 0 ? (
            <TiArrowSortedUp />
          ) : (
            <TiArrowSortedDown />
          )}
          {dailyRecord.changePrice} {dailyRecord.change_rate}
        </p>
      </div>
      <div>
        <CandlesticChart
          priceDataList={dailyRecord.priceDataList}
          volumeDataList={dailyRecord.volumeDataList}
          isDataList={dailyRecord.isDataList}
        />
      </div>
    </div>
  );
}

export default CandlestickChartMaker;
