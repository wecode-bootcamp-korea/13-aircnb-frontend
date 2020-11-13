import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TypeOfPlace = ({ onClose }) => {
  // const [entire, setEntire] = useState(false);
  // const [private, setPrivate] = useState(false);
  // const [hotel, setHotel] = useState(false);
  // const [shared, setShared] = useState(false);
  const [stay, setStay] = useState([]);
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [type3, setType3] = useState("");
  const [type4, setType4] = useState("");

  async function useFilter() {
    const res = await fetch("/Data/data.json", {
      headers: {
        AUTHORIZATION: userToken,
      },
    });
    res.json().then((res) => setStay(res.stay));
  }
  // useEffect(() => {
  //   useFilter();
  // }, []);

  const signReducer = useSelector(({ signReducer }) => signReducer);
  const userToken = signReducer.userToken;

  return (
    <WrapperTOP>
      <div>
        <section>
          <CheckBox4TOP>
            <div>
              <label className="container">
                <input type="checkbox"></input>
                <span className="checkmark">&#10003;</span>
                <div>
                  <span>집 전체</span>
                  <p>집 전체를 단독으로 사용합니다</p>
                </div>
              </label>
              <label className="container">
                <input type="checkbox"></input>
                <span className="checkmark">&#10003;</span>
                <div>
                  <span>개인실</span>
                  <p>
                    침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와
                    함께 이용할 수도 있습니다.
                  </p>
                </div>
              </label>
              <label className="container">
                <input type="checkbox"></input>
                <span className="checkmark">&#10003;</span>
                <div>
                  <span>호텔 객실</span>
                  <p>부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다</p>
                </div>
              </label>
              <label className="container">
                <input type="checkbox"></input>
                <span className="checkmark">&#10003;</span>
                <div>
                  <span>다인실</span>
                  <p>
                    사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와
                    함께 이용합니다
                  </p>
                </div>
              </label>
            </div>
          </CheckBox4TOP>
        </section>
        <section>
          <div>
            <button>지우기</button>
            <button onClick={onClose}>저장</button>
          </div>
        </section>
      </div>
    </WrapperTOP>
  );
};

export default TypeOfPlace;

const WrapperTOP = styled.div`
  #window {
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }

  & > div {
    border-radius: 13px;
    width: 375px;
    height: auto;
    background-color: white;
    opacity: 1;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px;

    & > section:first-child {
      max-width: 375px;
      max-height: 290px;
      border-bottom: 1px solid rgb(235, 235, 235);
      padding: 20px;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: white;
      border-radius: 13px;
    }
    & > section:nth-child(2) {
      max-width: 375px;
      height: 65px;
      padding: 12px 14px;
      display: flex;
      align-items: center;
      & > div {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & > button:first-child {
          background-color: transparent;
          border: none;
          border-bottom: 1.5px solid rgb(235, 235, 235);
          outline: none;
          cursor: pointer;
          color: rgb(235, 235, 235);
          font-size: 16px;
          font-weight: 600;
          height: 20px;
          padding: 0;
          &:active {
            opacity: 0.6;
          }
          &:hover {
            color: rgb(0, 0, 0);
          }
        }
        & > button:nth-child(2) {
          background-color: rgb(34, 34, 34);
          border-radius: 8.5px;
          border: none;
          outline: none;
          color: white;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 16px;
          cursor: pointer;
          &:active {
            transform: scale(0.97);
          }
        }
      }
    }
  }
`;

const CheckBox4TOP = styled.div`
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
    margin-bottom: 28px;
  }
  & > div {
    & > label {
      display: inline-block;
      width: 320px;
      height: auto;
      margin: 12px 0;
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        & > .checkbox {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px solid rgb(185, 185, 185);
          padding: 0;
          margin: 0;
          &:hover {
            border: 1px solid rgb(34, 34, 34);
          }
          & > span {
            & > input {
              opacity: 0;
              margin: 0;
              cursor: pointer;
              height: 00px;
              width: 0px;
            }
          }
        }
      }
    }

    & > .container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 320px;
      height: auto;
      padding-left: 5px;
      position: relative;
      color: rgb(34, 34, 34);
      font-size: 16px;
      font-weight: 400;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      & > input {
        position: absolute;
        left: 0px;
        top: 24px;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      & > div {
        padding-left: 15px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        & > span {
          color: rgb(34, 34, 34);
          font-size: 16px;
          line-height: 22px;
          font-weight: 400;
          word-break: keep-all;
        }
        & > p {
          word-break: keep-all;
          font-weight: 400;
          line-height: 20px;
          font-size: 14px;
          color: rgb(34, 34, 34);
        }
      }
      .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      & > .checkmark {
        cursor: pointer;
        text-align: center;
        padding-top: 3px;
        font-weight: 800;
        color: white;
        left: 0;
        border-radius: 4px;
        border: 1px solid rgb(185, 185, 185);
        width: 24px;
        height: 24px;
        background-color: white;
        &:hover {
          border: 1px solid rgb(0, 0, 0);
        }
      }
      input:checked ~ .checkmark {
        background-color: rgb(34, 34, 34);
      }
      input:checked ~ .checkmark:after {
        display: block;
      }
    }
  }
  & > button {
    background-color: transparent;
    border: none;
    border-bottom: 1.5px solid rgb(34, 34, 34);
    outline: none;
    cursor: pointer;
    color: rgb(34, 34, 34);
    font-size: 16px;
    height: 20px;
    padding: 0;
    margin: 5px 0;
    &:active {
      opacity: 0.6;
    }
    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;
