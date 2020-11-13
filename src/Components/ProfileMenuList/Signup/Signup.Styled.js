import styled, { css } from "styled-components";
import { flexSet } from "../../../Styles/Theme";

export const SignupModal = styled.div`
  @import "~@sweetalert2/theme-borderless/borderless.scss";
  ${flexSet("center", "center")}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  .swal-overlay {
    color: rgba(43, 165, 137, 0.45);
    background-color: rgba(43, 165, 137, 0.45);
  }
`;

export const SignupDialog = styled.div`
  width: 568px;
  height: 530px;
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
  margin-bottom: 15px;
`;

const footerFontSet = css`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.subColor};
  cursor: pointer;
`;

export const InputForm = styled.div`
  padding-top: 30px;
  > div {
    &:first-child {
      ${inputDivSet}

      input {
        width: 100%;
        ${inputSet}
      }
    }

    &:nth-child(2) {
      position: relative;
      top: 200px;
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
    position: relative;
    top: 200px;
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
  position: relative;
  top: 200px;
  border-top: 1px solid #ddd;
  padding: 16px 0;
  height: 72px;

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
      span {
        cursor: pointer;
        margin-bottom: 24px;

        &:first-child {
          font-weight: 200;
        }

        &:last-child {
          font-size: 14px;
          line-height: 40px;
          color: ${({ theme }) => theme.subColor};
          font-weight: 700;
          margin-left: 10px;
        }
      }
    }
  }
`;
