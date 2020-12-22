import React from "react";
import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { flexSet } from "../../../Styles/Theme";

const countryList = [
  "한국",
  "미국",
  "영국",
  "중국",
  "체코",
  "스페인",
  "프랑스",
  "베트남",
  "필리핀",
];

const CountryModalContent = ({ country, setCountry, hide }) => {
  return (
    <CountryModal>
      <div className="modalBox">
        <div className="modalHeader">
          <button className="closeBtn" onClick={hide}>
            X
          </button>
          <span>국가/지역</span>
        </div>
        <ul className="modalContent">
          {countryList.map((el, idx) => (
            <li onClick={(e) => setCountry(e.target.innerText)}>
              <div className="countryName">{el}</div>
              <FontAwesomeIcon
                className={country === el ? "checkIcon" : "noIcon"}
                icon={faCheck}
              />
            </li>
          ))}
        </ul>
      </div>
    </CountryModal>
  );
};

const CountryModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 10;
  .modalBox {
    width: 568px;
    height: 500px;
    position: relative;
    top: 10%;
    left: 30%;
    padding: 20px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 2px 5px 16px 0px #0b325e;
    z-index: 11;
    &:focus {
      outline: none;
    }

    .modalHeader {
      position: relative;
      padding-bottom: 20px;
      border-bottom: solid 1px #dddddd;
      .closeBtn {
        background-color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        &:hover {
          cursor: pointer;
        }
        &:focus {
          outline: none;
        }
      }
      span {
        position: absolute;
        right: 215px;
        top: 4px;
        font-size: 15px;
      }
    }

    ul {
      height: 400px;
      overflow: auto;
      li {
        height: 72px;
        ${flexSet("space-between")}
        border-bottom: 1px solid #dddddd;
        &:hover {
          cursor: pointer;
          background-color: #fff9f5;
        }
        .countryName {
          padding: 27px 0 12px 0;
          font-size: 16px;
        }
        .checkIcon {
          margin: 27px 15px 12px 0;
          font-size: 20px;
          color: #fe5131;
        }
        .noIcon {
          display: none;
        }
      }
    }
  }
`;

export default CountryModalContent;
