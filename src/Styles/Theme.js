import { css } from "styled-components";

const theme = {
  primaryColor: "#fe5131",
  subColor: "#59C3C3",
  borderColor: "#ddd",
  borderSet: "1px solid #ddd"
};

export const flexSet = (justifyContent, alignItems, flexDirection) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;

export const displayNone = css`
  display: none !important;
`;

export const visibilityHidden = css`
  visibility: hidden !important;
`;

export default theme;
