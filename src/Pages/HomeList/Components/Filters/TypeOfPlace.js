import React from "react";
import styled from "styled-components";

const TypeOfPlace = ({ onClose }) => {
  return (
    <WrapperTOP>
      <div id="window" onClick={onClose}>
        <div>
          <section>
            <CheckBox4TOP>
              <div>
                <label>
                  <div>
                    <div className="checkbox">
                      <span>
                        <input type="checkbox"></input>
                      </span>
                    </div>
                    <div>
                      <span>집 전체</span>
                      <p>집 전체를 단독으로 사용합니다</p>
                    </div>
                  </div>
                </label>
                <label>
                  <div>
                    <div className="checkbox">
                      <span>
                        <input type="checkbox"></input>
                      </span>
                    </div>
                    <div>
                      <span>개인실</span>
                      <p>
                        침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른
                        게스트와 함께 이용할 수도 있습니다.
                      </p>
                    </div>
                  </div>
                </label>
                <label>
                  <div>
                    <div className="checkbox">
                      <span>
                        <input type="checkbox"></input>
                      </span>
                    </div>
                    <div>
                      <span>호텔 객실</span>
                      <p>
                        부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다
                      </p>
                    </div>
                  </div>
                </label>
                <label>
                  <div>
                    <div className="checkbox">
                      <span>
                        <input type="checkbox"></input>
                      </span>
                    </div>
                    <div>
                      <span>다인실</span>
                      <p>
                        사적 공간 없이, 침실이나 욕실 등을 호스트나 다른
                        게스트와 함께 이용합니다
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </CheckBox4TOP>
          </section>
          <section>
            <div>
              <button>지우기</button>
              <button>저장</button>
            </div>
          </section>
        </div>
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
    z-index: 300;
    margin: 0 auto;

    & > section:first-child {
      max-width: 375px;
      max-height: 290px;
      border-bottom: 1px solid rgb(235, 235, 235);
      padding: 20px;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: white;
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

        & > div {
          padding: 0 12px;
          width: 300px;
          & > span {
            color: rgb(34, 34, 34);
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            word-break: keep-all;
          }
          & > p {
            word-break: keep-all;
            font-weight: 400;
            line-height: 18px;
            font-size: 14px;
            color: rgb(34, 34, 34);
          }
        }
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
