import React from "react";
import styled from "styled-components";
import { flexSet } from "../../../Styles/Theme";

const GuestModalContent = (props) => {
  const {
    hideModal,
    adultCount,
    setAdultCount,
    childrenCount,
    setChildrenCount,
    infantCount,
    setInfantCount,
  } = props;
  return (
    <GuestsModal>
      <div className="modalBox">
        <button className="closeBtn" onClick={hideModal}>
          X
        </button>
        <div className="modalHeader">
          <span>게스트</span>
        </div>
        <div className="totalWrapper">
          <div className="elementWrapper">
            <div className="elementTitle">성인</div>
            <div className="BtnWrapper">
              <button
                disabled={adultCount <= 0}
                onClick={() => {
                  setAdultCount(adultCount - 1);
                }}
                className="minusBtn"
              >
                -
              </button>
              <div className="numOfGuests">{adultCount}</div>
              <button
                disabled={adultCount >= 2}
                onClick={() => setAdultCount(adultCount + 1)}
                className={adultCount >= 2 ? "plusBtnDisabled" : "plusBtn"}
              >
                +
              </button>
            </div>
          </div>
          <div className="elementWrapper">
            <div className="elementTitle">어린이</div>
            <div className="BtnWrapper">
              <button
                disabled={childrenCount <= 0}
                onClick={() => {
                  setChildrenCount(childrenCount - 1);
                }}
                className="minusBtn"
              >
                -
              </button>
              <div className="numOfGuests">{childrenCount}</div>
              <button
                disabled={childrenCount >= 2}
                onClick={() => {
                  setChildrenCount(childrenCount + 1);
                }}
                className={childrenCount < 2 ? "plusBtn" : "plusBtnDisabled"}
              >
                +
              </button>
            </div>
          </div>
          <div className="elementWrapper">
            <div className="elementTitle">유아</div>
            <div className="BtnWrapper">
              <button
                disabled={infantCount <= 0}
                onClick={() => {
                  setInfantCount(infantCount - 1);
                }}
                className="minusBtn"
              >
                -
              </button>
              <div className="numOfGuests">{infantCount}</div>
              <button
                onClick={() => {
                  setInfantCount(infantCount + 1);
                }}
                className="plusBtn"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="countCondition">
          최대 2명. 유아는 숙박인원에 포함되지 않습니다.
        </div>
        <div className="btnArea">
          <button onClick={hideModal} className="cancleBtn">
            취소
          </button>
          <button onClick={hideModal} className="saveBtn">
            저장하기
          </button>
        </div>
      </div>
    </GuestsModal>
  );
};

const GuestsModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 10;
  .modalBox {
    width: 376px;
    position: relative;
    top: 30%;
    left: 40%;
    padding: 25px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 2px 5px 16px 0px #0b325e;
    z-index: 11;
    &:focus {
      outline: none;
    }
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
    .modalHeader {
      margin: 20px 0;
      span {
        font-size: 20px;
        font-weight: bold;
        color: #484848;
      }
    }
    .totalWrapper {
      .elementWrapper {
        ${flexSet("space-between", "center")}
        margin: 15px 0;
        .elementTitle {
          font-weight: bold;
        }
        .BtnWrapper {
          display: flex;
          align-items: center;
          .minusBtn,
          .plusBtn {
            display: block;
            width: 30px;
            height: 30px;
            padding-top: -10px;
            background-color: white;
            font-weight: bold;
            font-size: 20px;
            border-radius: 50%;
            border: solid 1px grey;
            &:hover,
            &:focus {
              cursor: pointer;
              outline: none;
            }
          }
          .plusBtnDisabled {
            display: block;
            width: 30px;
            height: 30px;
            background-color: white;
            font-weight: bold;
            font-size: 20px;
            border-radius: 50%;
            border: solid 1px grey;
            &:hover {
              cursor: not-allowed;
            }
          }
          .numOfGuests {
            margin: 0 10px;
            font-weight: bold;
          }
        }
      }
    }
    .countCondition {
      font-size: 12px;
      color: #878787;
      padding: 20px 0;
      border-bottom: solid 1px #dddddd;
    }
    .btnArea {
      ${flexSet("space-between")}
      padding: 20px 0 0 0;
      .cancleBtn {
        background-color: white;
        border: none;
        text-decoration: underline;
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
        &:focus {
          outline: none;
        }
      }
      .saveBtn {
        width: 110px;
        height: 48px;
        background-color: black;
        border: solid 1px black;
        color: white;
        font-weight: bold;
        border-radius: 8px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default GuestModalContent;
