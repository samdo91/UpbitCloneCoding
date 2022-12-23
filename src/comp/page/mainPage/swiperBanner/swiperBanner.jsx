import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Pagination } from "swiper";

function SwiperBanner() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          11월 22일부터 업비트 로그인만 서비스 이용이 가능합니다.
        </SwiperSlide>
        <SwiperSlide>
          생체인증으로 업비트 로그인을 더욱 빠르게 이용해보세요.
        </SwiperSlide>
        <SwiperSlide>
          생체인증으로 업비트 로그인을 더욱 빠르게 이용해보세요.
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperBanner;
