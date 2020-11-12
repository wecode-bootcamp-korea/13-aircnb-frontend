import styled, { css } from "styled-components";
import { flexSet, displayNone, visibilityHidden } from "../../Styles/Theme";

// STUB button template
const buttonStyle = (
  firstNode,
  secondNode,
  last,
  active,
  search,
  input = null
) => css`
  width: 100%;
  > ${firstNode} {
    ${search && flexSet("space-between", "center")}
    width: 100%;
    height: 66px;
    border-radius: 33px;
    padding: ${last ? "14px 10px 14px 32px" : "14px 32px"};
    box-shadow: ${active && "0px 4px 10px 4px #ddd"};
    cursor: pointer;

    &:hover {
      background-color: ${active ? "transparent" : "#eee"};
    }

    &:focus {
      outline: none;
    }

    > div {
      width: ${(secondNode === "input" && 204) || (last && 120)}px;
      transition: 0.2s ease;
      font-size: 13px;

      > div {
        &:first-child {
          text-indent: ${secondNode === "input" ? "2px" : "0"};
          line-height: 18px;
          font-size: 12px;
          font-weight: 700;
        }

        ${secondNode === "div" &&
        css`
          &:last-child {
            color: #555;
            line-height: 18px;
          }
        `}
      }

      ${secondNode === "input" &&
      css`
        input {
          border: 0px;
          background-color: transparent;
          outline: none;

          &::placeholder {
            color: #555;
            line-height: 18px;
          }
        }
      `}
    }
    > span {
      ${!active && displayNone}
    }
  }
`;

export const searchMenuPreset = css`
  position: absolute;
  top: 0px;
  width: 100%;
  transition: ease 0.3s;
  z-index: 101;

  > div {
    padding: 0 80px;

    form {
      margin: 0 auto;
      width: 850px;

      fieldset {
        ${flexSet("center", "center")};
        height: 80px;

        span {
          text-align: center;
          line-height: 80px;
          transition: ease 0.2s;

          &::before {
            content: "";
            position: absolute;
            height: 2px;
            background-color: #000;
            border-radius: 1px;
            top: 60px;
            width: 18px;
            transform: translateX(5px);
          }
        }
      }

      > div {
        ${flexSet("center")}
        transition: ease 0.2s;

        > div {
          ${flexSet("space-between", "center")};
          border: 1px solid #ddd;
          border-radius: 33px;
          transition: 0.2s ease;
        }
      }
    }
  }
`;

// SECTION Styled
export const SearchMenu = styled.div`
  ${({ searchActive, active }) => {
    return css`
      ${searchMenuPreset}
      background-color: #fff;

      > div {
        form {
          fieldset {
            span {
              transform: ${!searchActive && "translateY(-70px)"};
              opacity: ${searchActive ? 1 : 0};
            }
          }

          > div {
            height: ${searchActive ? 100 : 0}px;

            > div {
              width: ${searchActive ? "100%" : "300px"};
              height: ${searchActive ? "66px" : "48px"};
              transform: ${!searchActive &&
              "translate(18px, -155px) scale(0.4)"};
              opacity: ${searchActive ? 1 : 0};
              background-color: ${active ? "#f8f8f8" : "#fff"};
            }
          }
        }
      }
    `;
  }}
`;

export const SearchInput = styled.div`
  ${({ active, checkin, checkout, guest, theme, searchActive, input }) => {
    const isFirstActive = active === 1;
    const isSecondActive = active === 2;
    const isThirdActive = active === 3;
    const isForthActive = active === 4;
    return css`
      ${buttonStyle(
        "label",
        "input",
        false,
        isFirstActive,
        searchActive,
        input
      )};
      ${checkin &&
      buttonStyle("div", "div", false, isSecondActive, searchActive)}
      ${checkout &&
      buttonStyle("div", "div", false, isThirdActive, searchActive)}
        ${guest && buttonStyle("div", "div", true, isForthActive, searchActive)}
        button {
        width: ${active ? 80 : 48}px;
        height: 48px;
        margin-left: 10px;
        background-color: ${theme.primaryColor};
        border: 1px solid ${theme.primaryColor};
        border-radius: 24px;
        cursor: pointer;
        transition: ease 0.2s;

        div {
          ${flexSet("center", "center")}
          color: #fff;
          span {
            &:first-child {
              font-size: 15px;
            }

            &:last-child {
              ${!active && displayNone};
              margin-left: 8px;
              font-size: 16 px;
              font-weight: 600;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    `;
  }}
`;

export const SearchDivider = styled.div`
  ${({ first, second, third, active }) => {
    const firstActive = first && active === 1;
    const secondActive = (first || second) && active === 2;
    const thirdActive = (second || third) && active === 3;
    const forthActive = third && active === 4;
    return css`
      ${(firstActive || secondActive || thirdActive || forthActive) &&
      visibilityHidden}
    `;
  }}

  ${flexSet("center", "center")}
    border-right: 1px solid #ddd;
  height: 32px;
`;
