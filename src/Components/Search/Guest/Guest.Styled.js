import styled from "styled-components";
import { flexSet, visibilityHidden } from "../../../Styles/Theme";

export const GuestModal = styled.div`
  ${({ btnActive }) => !btnActive && visibilityHidden}
  position: absolute;
  top: 160px;
  right: 140px;
  width: 394px;
  height: 244px;
  background: #fff;
  padding: 16px 32px;
  border-radius: 30px;
  box-shadow: 0px 4px 10px 4px #ddd;
  z-index: 1000;

  ul {
    li {
      width: 100%;
      height: 71px;
      padding: 16px 0;
      border-bottom: 1px solid #ddd;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;

export const GuestContents = styled.div`
  ${flexSet("space-between", "center")}
  width: 100%;
  height: 100%auto;
  div {
    &:first-child {
      ${flexSet("center", "space-between", "column")}

      span {
        &:first-child {
          font-size: 16px;
          font-weight: 500;
        }
        &:last-child {
          font-size: 14px;
          line-height: 25px;
          color: #999;
        }
      }
    }
    &:last-child {
      button {
        width: 32px;
        height: 32px;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #ddd;

        &:first-child {
          margin-right: 15px;
        }
        &:last-child {
          margin-left: 15px;
        }
        > div {
          ${flexSet("center", "center")}
          font-size: 12px;
          color: #888;
        }
      }
    }
  }
`;
