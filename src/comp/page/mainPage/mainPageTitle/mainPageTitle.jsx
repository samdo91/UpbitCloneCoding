/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function MainPageTitle() {
  return (
    <div
      css={css({
        width: "1690px",
        height: "580px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      {/* 사진이랑 그림을 이용해여 타이틀 이미지를 만든다 */}
      <div className="mainPageTitle" css={css({})}>
        <h1
          css={css({
            color: "#333333",
            fontSize: "36px",
            textAlign: "center",
          })}
        >
          가장 신뢰받는 글로벌 표준 디지털 자산 거래소
        </h1>
        <span
          className="app__subTitle--3hvKt"
          css={css({
            color: "  #666666",
            fontSize: "16px",
            textAlign: "center",
          })}
        >
          안전하고 투명한 시스템으로 빠르고 편리한 거래 환경을 제공합니다.
        </span>
      </div>
      {/* 코인과 마켓 , 거래소 로그인 바로가기*/}
      <div className="Coinscreen">
        <ul
          css={css({
            listStyle: "none",
            paddingLeft: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <li
            css={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingLeft: "0px",
            })}
          >
            <div>
              <span
                css={css({
                  color: "#093687",
                  fontSize: "48px",
                  textAlign: "center",
                  fontWeight: "500",
                  // height: "58px",
                  // with: "170px",
                  marginRight: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                178
              </span>
            </div>
            <div
              css={css({
                color: "#7588aa;",
                fontSize: "16px",
                textAlign: "center",
                // with: "170px",
                marginRight: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              Coin
            </div>
          </li>
          <li
            css={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            })}
          >
            <div>
              <span
                css={css({
                  color: "#093687",
                  fontSize: "48px",
                  textAlign: "center",
                  fontWeight: "500",
                  // height: "58px",
                  // with: "170px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                287
              </span>
            </div>
            <div
              css={css({
                color: "#7588aa;",
                fontSize: "16px",
                textAlign: "center",
                // with: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              Market
            </div>
          </li>
        </ul>
        <div
          css={css({
            paddingLeft: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Link
            to={"/exchange"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              css={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "64px",
                width: "150px",
                color: "white",
                backgroundColor: "#0062df",
                marginRight: "40px",
              })}
            >
              거래소 둘러보기
            </div>
          </Link>
          <Link
            to={"/Login"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              css={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "64px",
                width: "150px",
                color: "white",
                backgroundColor: "#093687",
              })}
            >
              로그인
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPageTitle;
