/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import "./candlesticChart.css";

/* // priceData에 경우 
구성에 대해서
 *tiem : "yyyy-mm-dd"   ex) time: "2018-10-19",  - 날짜임
 *open: number          ex) open: 180.34,        - 시가
 *high: number          ex) high: 180.99,        - 고가
 *low: number           ex) low: 178.57,         - 저가
 *close: number         ex) close: 179.85,       - 종가 
 종합적으로다가
  {
    time: "2018-10-19",
    open: 180.34,
    high: 180.99,
    low: 178.57,
    close: 179.85,
  },
   {
    time: "2018-10-22",
    open: 180.82,
    high: 181.4,
    low: 177.56,
    close: 178.75,
  },
 */

//

// Bars can be individually coloured with 'color' prop.
// const green = 'rgba(75, 255, 181, 0.4)';
// const red = 'rgba(255, 73, 118, 0.4)';
/*// volumeData에 경우 
구성의 경우 
* time: "yyyy-mm-dd"  ex) time: "2018-10-19"    -날짜임 
* value: number       ex) value: 19103293.0     -그날의 체결량

종합적으로다가

{ time: "2018-10-19", value: 19103293.0 },
*/

// const volumeData = [];

function CandlesticChart(props) {
  const { priceDataList, volumeDataList, isDataList } = props;
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

  /* // priceData에 경우 
구성에 대해서
 *tiem : "yyyy-mm-dd"   ex) time: "2018-10-19",  - 날짜임
 *open: number          ex) open: 180.34,        - 시가
 *high: number          ex) high: 180.99,        - 고가
 *low: number           ex) low: 178.57,         - 저가
 *close: number         ex) close: 179.85,       - 종가 
 종합적으로다가
  {
    time: "2018-10-19",
    open: 180.34,
    high: 180.99,
    low: 178.57,
    close: 179.85,
  },
   {
    time: "2018-10-22",
    open: 180.82,
    high: 181.4,
    low: 177.56,
    close: 178.75,
  },
 */
  const reverse = priceDataList.reverse();
  const priceData = reverse;

  // const priceData = [
  //   {
  //     time: "2018-10-19",
  //     open: 180.34,
  //     high: 180.99,
  //     low: 17800.57,
  //     close: 17900.85,
  //   },
  //   {
  //     time: "2018-10-22",
  //     open: 18000.82,
  //     high: 18100.4,
  //     low: 17700.56,
  //     close: 17800.75,
  //   },
  //   {
  //     time: "2018-10-23",
  //     open: 17500.77,
  //     high: 17900.49,
  //     low: 17500.44,
  //     close: 17800.53,
  //   },
  //   {
  //     time: "2018-10-24",
  //     open: 18000.82,
  //     high: 18100.4,
  //     low: 17700.56,
  //     close: 17800.75,
  //   },
  //   {
  //     time: "2018-10-25",
  //     open: 17500.77,
  //     high: 17900.49,
  //     low: 17500.44,
  //     close: 17800.53,
  //   },
  // ];

  // Bars can be individually coloured with 'color' prop.
  // const green = 'rgba(75, 255, 181, 0.4)';
  // const red = 'rgba(255, 73, 118, 0.4)';
  /*// volumeData에 경우 
구성의 경우 
* time: "yyyy-mm-dd"  ex) time: "2018-10-19"    -날짜임 
* value: number       ex) value: 19103293.0     -그날의 체결량

종합적으로다가

{ time: "2018-10-19", value: 19103293.0 },
*/

  const volumeData = [];

  useEffect(() => {
    if (isDataList) {
      chart.current = createChart(chartContainerRef.current, {
        width: 100,
        height: 400,
        // width: "200px", //chartContainerRef.current.clientWidth,
        // height: "200px", //"300px", //chartContainerRef.current.clientHeight,
        layout: {
          backgroundColor: "#253248",
          textColor: "rgba(255, 255, 255, 0.9)",
        },
        grid: {
          vertLines: {
            color: "#334158",
          },
          horzLines: {
            color: "#334158",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        priceScale: {
          borderColor: "#485c7b",
        },
        timeScale: {
          borderColor: "#485c7b",
        },
      });

      const candleSeries = chart.current.addCandlestickSeries({
        upColor: "#4bffb5",
        downColor: "#ff4976",
        borderDownColor: "#ff4976",
        borderUpColor: "#4bffb5",
        wickDownColor: "#838ca1",
        wickUpColor: "#838ca1",
      });

      candleSeries.setData(priceData);

      // const areaSeries = chart.current.addAreaSeries({
      //   topColor: 'rgba(38,198,218, 0.56)',
      //   bottomColor: 'rgba(38,198,218, 0.04)',
      //   lineColor: 'rgba(38,198,218, 1)',
      //   lineWidth: 2
      // });

      // areaSeries.setData(areaData);

      const volumeSeries = chart.current.addHistogramSeries({
        color: "red",
        // "#182233",
        lineWidth: 2,
        priceFormat: {
          type: "volume",
        },
        overlay: true,
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });

      volumeSeries.setData(volumeData);
    }
  }, [isDataList]);

  // Resize chart on container resizes.
  useEffect(() => {
    if (isDataList) {
      resizeObserver.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        chart.current.applyOptions({ width, height });
        setTimeout(() => {
          chart.current.timeScale().fitContent();
        }, 0);
      });

      resizeObserver.current.observe(chartContainerRef.current);

      return () => resizeObserver.current.disconnect();
    }
  }, [isDataList]);

  return (
    <div>
      <div
        css={css({
          height: "250px",
          width: "400px",
        })}
        ref={chartContainerRef}
        className="chart-container"
      />
    </div>
  );
}
export default CandlesticChart;
