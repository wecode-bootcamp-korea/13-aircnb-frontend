import styled, { css } from "styled-components";
import { flexSet, displayNone } from "../../Styles/Theme";

export const Navbar = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  background-color: #fff;
  z-index: 100;

  > section {
    height: 100%;
    > div {
      ${flexSet("space-between", "center")};
      height: 100%;
      padding: 0 80px;
    }
  }
`;

export const LogoSet = styled.div`
  ${({ theme }) => {
    const primaryColor = theme.primaryColor;
    return css`
      z-index: 200;

      & div {
        ${flexSet(null, "center")};

        span {
          &:first-child {
            ${flexSet("center", "center")}
            > img {
              width: 60px;
              height: auto;
            }
          }
          &:last-child {
            color: ${primaryColor};
            font-size: 25px;
            font-weight: 700;
          }
        }
      }
    `;
  }}
`;

export const SearchTrigger = styled.div`
  ${({ theme, active }) => {
    const primaryColor = theme.primaryColor;
    const borderColor = theme.borderColor;

    return css`
      padding: 0 24px;
      z-index: 200;

      & > div {
        width: 100%;

        button {
          ${flexSet("space-between", "center")};
          position: absolute;
          top: 19%;
          left: 50%;
          width: ${active ? 600 : 300}px;
          height: 48px;
          background-color: #fff;
          border: 1px solid ${borderColor};
          border-radius: 24px;
          transition: 0.2s ease-in;
          opacity: ${active ? 0 : 1};
          transform: translateX(-50%) ${active && "translateY(40px)"};
          transition: 0.2s ease;
          cursor: pointer;

          &:hover {
            box-shadow: 0px 2px 4px 0.5px ${borderColor};
          }

          span {
            &:first-child {
              font-size: 14px;
              font-weight: 550;
              padding: 0 16px 0 24px;
              line-height: 18px;
            }

            &:last-child {
              ${flexSet("center", "center")};
              width: 32px;
              height: 32px;
              color: #fff;
              background-color: ${primaryColor};
              border-radius: 50%;
            }
          }
        }
      }
    `;
  }}
`;

export const ProfileTrigger = styled.div`
  z-index: 200;
  button {
    ${flexSet("center", "center")};
    width: 77px;
    height: 42px;
    padding: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 24px;
    box-shadow: ${({ active }) => active && "0px 2px 4px 0.5px #ddd"};
    transition: ease 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 2px 4px 0.5px #ddd;
    }

    > div {
      ${flexSet("space-between", "center")};
      width: 100%;
      padding: 5px 5px 5px 12px;
      span {
        color: #717171;
        &:first-child {
          font-size: 16px;
        }
        &:last-child {
          font-size: 30px;
        }
      }
    }
  }
`;

export const ProfileMenu = styled.div`
  ${({ active }) => !active && displayNone}
  position: fixed;
  top: 75px;
  right: 80px;
  width: 240px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0.5px #ddd;
  border-radius: 10px;
  font-size: 14px;
  z-index: 200;

  div {
    padding: 3px 0;
    ul {
      li {
        cursor: pointer;
        &:hover {
          background-color: #f9f9f9;
        }
        span {
          padding: 0 15px;
        }
      }
    }
  }
`;

export const ProfileMenuGroup = styled.div`
  & {
    li {
      padding: 13px 0;
    }
  }
  & + & {
    border-top: 1px solid #ddd;
    li {
      padding: 13px 0;

      &:first-child {
        margin-top: 2px;
      }
    }
  }
`;
