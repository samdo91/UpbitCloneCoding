import { Link, useParams, Outlet } from "react-router-dom";
import CandlestickChartMaker from "../../mainPage/mainChart/candlesticChart/candlestickChartMaker";
function MarketPage() {
  const params = useParams();
  console.log("ss", params);
  return (
    <div>
      <div>
        <CandlestickChartMaker market={params.marketMarket} />
      </div>
    </div>
  );
}

export default MarketPage;
