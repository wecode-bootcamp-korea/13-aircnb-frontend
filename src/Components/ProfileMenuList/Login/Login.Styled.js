import styled, { css } from "styled-components";
import { flexSet } from "../../../Styles/Theme";

export const LoginModal = styled.div`
  ${flexSet("center", "center")}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* width: 100%; */
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const LoginDialog = styled.div`
  width: 568px;
  height: 600px;
  border-radius: 15px;
  padding: 24px;
  background: #fff;
  box-shadow: 0px 4px 10px 4px #bbb;
  user-select: none;

  header {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    div {
      display: inline-block;
      &:first-child {
        ${flexSet("center", "center")}
        width: 32px;
        height: 32px;
        cursor: pointer;

        &:hover {
          background: #ddd;
          border-radius: 50%;
        }
      }

      &:last-child {
        position: relative;
        left: 50%;
        transform: translate(-50%, -30px);
        font-weight: 700;
      }
    }
  }
`;

export const SocialLogin = styled.div`
  padding-top: 24px;
  button {
    ${flexSet("center", "center")}
    display: block;
    width: 100% !important;
    height: 48px;
    border-radius: 5px !important;
    &:last-child {
      margin: 10px 0 22px 0;
      background: deepskyblue;
      border: 1px transparent;
      color: #fff;
      font-weight: 700;
    }

    div {
      ${flexSet("center", "center")}
      span {
        &:first-child {
          font-size: 20px;
        }

        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const Divider = styled.div`
  ${flexSet("space-between", "center")}
  margin: 16px 0;
  span {
    &:first-child,
    &:last-child {
      background: #ddd;
      height: 1px;
      width: 45%;
    }
    &:nth-child(2) {
      ${flexSet("center", "center")}
      font-size:14px;
      width: 30px;
      font-weight: 700;
      color: #999;
    }
  }
`;

const inputDivSet = css`
  width: 100%;
  height: 64px;
  padding-bottom: 16px;
`;

const inputSet = css`
  height: 100%;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 5px;
  padding-left: 10px;
`;

const footerFontSet = css`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.subColor};
  cursor: pointer;
`;

export const InputForm = styled.div`
  > div {
    &:first-child {
      ${flexSet("space-between")}
      ${inputDivSet}

      select {
        width: 118px;
        ${inputSet}
        font-size: 14px;
      }

      input {
        width: ${({ email }) => (email ? "100%" : "386px")};
        ${inputSet}
      }
    }

    &:nth-child(2) {
      ${inputDivSet}

      input {
        width: 100%;
        ${inputSet}
      }
    }

    &:nth-child(3) {
      > div {
        &:first-child {
          ${footerFontSet}
        }

        margin-bottom: 16px;

        span {
          ${footerFontSet}
        }
      }
    }
  }
  > button {
    ${flexSet("center", "center")}
    width: 100%;
    height: 48px;
    margin-bottom: 16px;
    border: 1px transparent;
    background: ${({ theme }) => theme.primaryColor};
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
  }
`;
export const Footer = styled.div`
  border-top: 1px solid #ddd;
  padding: 16px 0;

  > div {
    &:first-child {
      span {
        &:last-child {
          margin-left: 10px;
          color: ${({ theme }) => theme.subColor};
          font-weight: 700;
        }
      }
    }
    &:last-child {
      margin-top: 24px;
      span {
        &:first-child {
          color: ${({ theme }) => theme.subColor};
          font-weight: 200;
        }

        &:last-child {
          font-size: 14px;
          color: ${({ theme }) => theme.subColor};
          font-weight: 700;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
`;
