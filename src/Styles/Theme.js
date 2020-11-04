import { css } from "styled-components";

const theme = {
  primaryColor: "#fe5131",
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

export default theme;
