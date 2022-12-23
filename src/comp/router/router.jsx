import { createBrowserRouter } from "react-router-dom";
import MainPage from "../page/mainPage/mainPage";
import ExchangePage from "../page/exchange/exchangePage";
import BalancesPage from "../page/balances/balancesPage";
import InvestmentsPage from "../page/investments/investmentsPage";
import TrendsPage from "../page/trends/trendsPage";
import StakingPage from "../page/staking/stakingPage";
import NftPage from "../page/nft/nftPage";
import ServiceCenterPage from "../page/service_center/service_centerPage";
import LoginPage from "../page/login/loginPage";
import MarketPage from "../page/exchange/marketPage/marketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/exchange",
    element: <ExchangePage />,
    children: [
      {
        path: "/exchange/:marketMarket",
        element: <MarketPage />,
      },
    ],
  },

  {
    path: "/Balances",
    element: <BalancesPage />,
  },
  {
    path: "/Investments",
    element: <InvestmentsPage />,
  },
  {
    path: "/Trends",
    element: <TrendsPage />,
  },
  {
    path: "/Staking",
    element: <StakingPage />,
  },
  {
    path: "/Nft",
    element: <NftPage />,
  },
  {
    path: "/Service_center",
    element: <ServiceCenterPage />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
]);
