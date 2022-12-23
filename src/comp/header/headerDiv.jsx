/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const colors = {
  blue: "#093687",
  gray: "#677faf",
  black: "rgb(9, 105, 218)",
  red: "red",
};

function HeaderDiv({ children, variant = "black" }) {
  return (
    <div
      css={css({
        margin: "30px",
        color: colors[variant],
        textDecoration: "none",
      })}
    >
      {children}
    </div>
  );
}

export default HeaderDiv;
