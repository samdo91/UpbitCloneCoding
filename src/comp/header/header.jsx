/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import HeaderDiv from "./headerDiv";
import React, { useEffect } from "react";
function Header() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const itemArr = nav ? nav.querySelectorAll("a") : "";
    const varlant = nav
      ? itemArr.forEach((node) => (node.style.color = "677faf"))
      : "";

    const tittleColor = nav
      ? itemArr.forEach((item) => {
          item.addEventListener("click", (e) => {
            itemArr.forEach((item) => (item.style.color = "gray "));
            e.target.style.color = "white";
          });
        })
      : "";
  }, []);

  return (
    <div
      css={css({
        backgroundColor: "#093687",
        display: "flex",
      })}
    >
      <section css={css({ display: "flex" })}>
        <Link
          to={"/"}
          css={css({
            color: "#ffffff",
            padding: "5px",
            textDecoration: "none",
          })}
        >
          <h1
            css={css({
              marginLeft: "270px",
            })}
          >
            UPbit
          </h1>
        </Link>
        <nav
          css={css({
            display: "flex",
          })}
        >
          <Link
            to={"/exchange"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              className="headerItem"
              css={css({
                margin: "30px",
                textDecoration: "none",
              })}
            >
              거래소
            </div>
          </Link>
          <Link
            to={"/Balances"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              className="headerItem"
              css={css({
                margin: "30px",
              })}
            >
              입출금
            </div>
          </Link>
          <Link
            to={"/Investments"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              className="headerItem"
              css={css({
                margin: "30px",
                textDecoration: "none",
              })}
            >
              투자내역
            </div>
          </Link>
          <Link
            to={"/Trends"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              className="headerItem"
              css={css({
                margin: "30px",
                textDecoration: "none",
              })}
            >
              코인동향
            </div>
          </Link>
          <Link
            to={"/Staking"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              className="headerItem"
              css={css({
                margin: "30px",
                textDecoration: "none",
              })}
            >
              스테킹
            </div>
          </Link>
          <Link
            to={"/Nft"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              className="headerItem"
              css={css({
                margin: "30px",
                textDecoration: "none",
              })}
            >
              NFT
            </div>
          </Link>
          <Link
            to={"/Service_center"}
            css={css({
              textDecoration: "none",
            })}
          >
            <div
              className="headerItem"
              css={css({
                margin: "30px",
                textDecoration: "none",
              })}
            >
              고객센터
            </div>
          </Link>
        </nav>
      </section>
      <section
        css={css({
          display: "flex",
        })}
      >
        <div>로그인</div>
        <div>회원가입</div>
      </section>
    </div>
  );
}

export default Header;
