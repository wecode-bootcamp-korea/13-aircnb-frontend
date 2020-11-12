import styled from "styled-components";
import { flexSet } from "../../Styles/Theme";

export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  /* min-height: 100%; */
`;

export const Topper = styled.div`
  > div {
    &:first-child {
      figure {
        position: relative;
        width: 100%;
        height: 600px;
        overflow: hidden;

        img {
          position: absolute;
          top: 30%;
          left: 50%;
          width: 100%;
          transform: translate(-50%, -50%) scale(1.2);
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    &:nth-child(2) {
      position: absolute;
      top: -80px;
    }
    &:last-child {
      position: absolute;
      top: 0;
      width: 1040px;
      height: 323px;
      margin: 191px 40px auto 45px;
      ${flexSet("flex-start", "flex-start", "column")}

      > span {
        max-width: 383px;
        max-height: 112px;
        font-size: 52px;
        color: #fff;
        font-weight: 800;
      }
      button {
        width: 145px;
        height: 32px;
        margin-top: 22px;
        padding: 7px 15px;
        border: 0px;
        border-radius: 10px;
        div {
          font-size: 13px;
        }
      }
    }
  }

  @media only screen and (max-width: 1350px) {
    > div {
      &:first-child {
        figure {
          img {
            width: auto;
            height: 100%;
            left: 40%;
            transform: translate(-50%, -30%) scale(1.3);
          }
        }
      }
    }
  }
`;

export const MainLocationCategory = styled.div`
  width: 100%;
  height: auto;
  padding: 25px 80px 40px;
  > ul {
    > li {
      width: 25%;
      display: inline-block;
      margin-top: 15px;
      > div {
        ${flexSet("flex-start", "center")}
        figure {
          width: 72px;
          height: 72px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        > div {
          ${flexSet("center", "flex-start", "column")}
          margin-left: 15px;
          span {
            &:first-child {
              font-weight: 700;
            }
            &:last-child {
              line-height: 30px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1350px) {
    height: auto;
    padding: 40px;

    > ul {
      > li {
        width: 33%;
      }
    }
  }
`;

export const MainHomeType = styled.div`
  ${flexSet(null, "space-between", "column")}
  width: 100%;
  height: 460px;
  margin-bottom: 24px;
  padding: 0 80px;
  > div {
    &:first-child {
      padding-bottom: 16px;
      span {
        font-size: 32px;
        font-weight: 700;
      }
    }

    &:last-child {
      ${flexSet("space-between", "center")}
      figure {
        width: 365px;
        height: 365px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      div {
        div {
          padding-top: 8px;
          span {
            line-height: 25px;
            font-size: 18px;
            font-weight: 500;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1350px) {
    padding: 0 40px;
    > div {
      &:last-child {
        figure {
          width: 334px;
          height: 334px;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 0 40px;
    > div {
      &:last-child {
        figure {
          width: 250px;
          height: 250px;
        }
      }
    }
  }
`;

export const Footer = styled.section`
  border-top: 1px solid #ddd;
  background-color: #f3f3f3;
  padding: 0 80px 40px;
  ${flexSet(null, null, "column")}
  > div {
    &:first-child {
      ${flexSet("space-between", "space-between")}
      width: 100%;
      padding: 40px 0;
      border-bottom: 1px solid #ddd;
      > div {
        display: inline-block;
        > div {
          font-size: 12px;
          font-weight: 700;
        }
      }

      ul {
        width: 100%;
        padding-bottom: 24px;
        margin-bottom: 24px;

        &:last-child {
          padding-bottom: 48px;
          margin-bottom: 0;
        }
        li {
          font-size: 14px;
          margin-top: 17px;
          min-width: 345px;
        }
      }
    }

    &:last-child {
      padding-top: 30px;
      ${flexSet("center", "center", "column")}
      height: 123px;
      font-size: 14px;

      figure {
        margin: 10px 0;
        width: 64px;
        height: 64px;

        img {
          min-width: 100%;
          height: 100%;
          transform: translateX(-10%);
        }
      }

      ul {
        padding-bottom: 24px;
        li {
          display: inline-block;
          margin-top: 10px;
          margin-right: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 1350px) {
    padding: 0 40px;
    > div {
      &:first-child {
        ${flexSet("center", "flex-start", "column")}
        border-bottom: 0;
        padding: 20px 0;
        > div {
          padding-top: 20px;
        }

        ul {
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid #ddd;

          &:last-child {
            padding-bottom: 24px;
            margin-bottom: 0;
          }
          li {
            display: inline-block;
          }
        }
      }
    }
  }
`;
