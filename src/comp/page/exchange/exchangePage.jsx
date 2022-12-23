/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "../../header/header";
import Sidebar from "./sidebar/sidebar";
import { Link, Outlet } from "react-router-dom";
function ExchangePage() {
  return (
    <div>
      <Header />
      <Outlet />
      <Sidebar />
    </div>
  );
}
export default ExchangePage;
