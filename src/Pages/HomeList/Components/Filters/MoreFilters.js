import React, { useState } from "react";
import styled from "styled-components";

const WrapperMF = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 50;
  padding: 40px;
  & > div {
    border-radius: 13px;
    max-width: 780px;
    height: auto;
    background-color: white;
    opacity: 1;
    z-index: 100;
    margin: 0 auto;

    & > section:first-child {
      max-width: 780px;
      height: 65px;
      border-bottom: 1px solid rgb(235, 235, 235);
      & > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          border-radius: 50%;
          height: 32px;
          width: 32px;
          outline: none;
          border: none;
          background-color: transparent;
          position: absolute;
          top: 16.5px;
          left: 16.6px;
          cursor: pointer;

          & > span {
            img {
              width: 11px;
              height: 11px;
            }
          }

          &:hover {
            background-color: rgb(245, 245, 245);
            transform: translate(-50%, -50%);
            transition: -ms-transform 3s ease 3s, -webkit-transform 3s ease 3s,
              transform 3s ease 3s;
          }
        }

        & > div {
          margin: 24px auto;
          h1 {
            font-size: 18px;
            line-height: 24px;
            font-weight: 600;
            color: rgb(34, 34, 34);
          }
        }
      }
    }

    & > section:nth-child(2) {
      max-width: 780px;
      height: calc(100vh - 145px - 80px);
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      padding: 0 48px;
    }

    & > section:nth-child(3) {
      max-width: 780px;
      height: 80px;
      border-top: 1px solid rgb(235, 235, 235);

      & > div {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        padding: 14px 24px;
        & > button:first-child {
          background-color: transparent;
          border: none;
          border-bottom: 1.5px solid rgb(34, 34, 34);
          outline: none;
          cursor: pointer;
          color: rgb(34, 34, 34);
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
          font-size: 16px;
          font-weight: 600;
          padding: 14px 24px;
          cursor: pointer;
          &:active {
            transform: scale(0.97);
          }
        }
      }
    }
  }
`;

const CheckBox6MF = styled.div`
  margin-top: 10px;
  padding: 28px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
    margin-bottom: 28px;
  }
  & > h3 {
    font-size: 16px;
    color: rgb(113, 113, 113);
    margin-bottom: 8px;
  }
  & > div {
    & > label {
      display: inline-block;
      width: 330px;
      height: 48px;
      padding: 12px 4px;

      & > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & > span:first-child {
          border-radius: 4px;
          border: 1px solid rgb(185, 185, 185);
          width: 24px;
          height: 24px;
          padding: 0;
          &:hover {
            border: 1px solid rgb(34, 34, 34);
          }
          input {
            position: absolute;
            opacity: 0;
            margin: 0;
            cursor: pointer;
            height: 24px;
            width: 24px;
            &:checked:: {
              background-color: rgb(34, 34, 34);
              opacity: 1;
            }
          }
        }

        & > span:nth-child(2) {
          padding: 0 12px;
          color: rgb(34, 34, 34);
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
`;

const CounterMF = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }
  & > div {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    & > div {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        & > p {
          color: rgb(34, 34, 34);
          font-size: 16px;
        }
      }

      & .counter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 104px;
        span {
          color: rgb(113, 113, 113);
          font-size: 16px;
        }
        button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 20px;
          font-weight: 600px;
          color: rgb(113, 113, 113);
          border: 1px solid rgb(160, 160, 160);
          background-color: white;
          outline: none;

          &:hover {
            border: 1px solid rgb(34, 34, 34);
            color: rgb(34, 34, 34);
          }
        }
      }
    }
  }
`;

const ToggleMF = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }
  & > div {
    padding: 12px 0;
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      & > h3 {
        font-size: 16px;
        color: rgb(34, 34, 34);
        margin-bottom: 8px;
      }
      & > p {
        color: rgb(113, 113, 113);
        font-size: 14px;
      }
    }

    & > div {
      .switch {
        position: relative;
        display: inline-block;
      }
      .switch-input {
        display: none;
      }
      .switch-label {
        display: block;
        width: 50px;
        height: 32px;
        text-indent: -150%;
        clip: rect(0 0 0 0);
        color: transparent;
        user-select: none;
      }
      .switch-label::before,
      .switch-label::after {
        content: "";
        display: block;
        position: absolute;
        cursor: pointer;
      }
      .switch-label::before {
        width: 100%;
        height: 100%;
        background-color: rgb(185, 185, 185);
        border-radius: 9999em;
        -webkit-transition: background-color 0.25s ease;
        transition: background-color 0.25s ease;
      }

      .switch-label::after {
        top: 2px;
        left: 2px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: left 0.25s ease;
        transition: left 0.25s ease;
      }
      .switch-input:checked + .switch-label::before {
        background-color: rgb(34, 34, 34);
      }
      .switch-input:checked + .switch-label::after {
        left: 20px;
      }
    }
  }
`;

const MoreOptionsMF = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }
  & > div {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      .black {
        color: rgb(34, 34, 34);
      }

      & > h3 {
        font-size: 16px;
        color: rgb(34, 34, 34);
        margin-bottom: 8px;
      }
      & > p {
        color: rgb(113, 113, 113);
        font-size: 14px;
      }
      & > button {
        background-color: transparent;
        border: none;
        border-bottom: 1.5px solid rgb(34, 34, 34);
        outline: none;
        cursor: pointer;
        color: rgb(113, 113, 113);
        font-size: 14px;
        font-weight: 600;
        height: 18px;
        padding: 0;
        margin: 10px 0;
        &:active {
          opacity: 0.6;
        }
        &:hover {
          color: rgb(0, 0, 0);
        }
      }
    }

    & > div {
      .switch {
        position: relative;
        display: inline-block;
      }
      .switch-input {
        display: none;
      }
      .switch-label {
        display: block;
        width: 50px;
        height: 32px;
        text-indent: -150%;
        clip: rect(0 0 0 0);
        color: transparent;
        user-select: none;
      }
      .switch-label::before,
      .switch-label::after {
        content: "";
        display: block;
        position: absolute;
        cursor: pointer;
      }
      .switch-label::before {
        width: 100%;
        height: 100%;
        background-color: rgb(185, 185, 185);
        border-radius: 9999em;
        -webkit-transition: background-color 0.25s ease;
        transition: background-color 0.25s ease;
      }

      .switch-label::after {
        top: 2px;
        left: 2px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: left 0.25s ease;
        transition: left 0.25s ease;
      }
      .switch-input:checked + .switch-label::before {
        background-color: rgb(34, 34, 34);
      }
      .switch-input:checked + .switch-label::after {
        left: 20px;
      }
    }
  }
`;

const CheckBox4MF = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
    margin-bottom: 28px;
  }
  & > div {
    & > .container {
      display: inline-block;
      width: 330px;
      height: 48px;
      padding: 12px 4px;
      padding-left: 35px;
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
        position: absolute;
        top: 8px;
        left: 0;
        border-radius: 4px;
        border: 1px solid rgb(185, 185, 185);
        width: 24px;
        height: 24px;
        background-color: white;
        & > :hover {
          border: 1px solid rgb(0, 0, 0);
        }
        /* & > :after {
          content: "";
          position: absolute;
          display: none;
        } */
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

const MoreFilters = ({ onClose }) => {
  return (
    <WrapperMF>
      <div>
        <section>
          <div>
            <button onClick={onClose}>
              <span>
                <img src="https://www.flaticon.com/svg/static/icons/svg/61/61155.svg"></img>
              </span>
            </button>
            <div>
              <h1>필터 추가하기</h1>
            </div>
          </div>
        </section>
        <section>
          <CheckBox6MF>
            <h2>인기 필터</h2>
            <h3>제주시 지역 여행자들이 자주 사용하는 필터입니다.</h3>
            <div>
              <label>
                <div>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>무선 인터넷</span>
                </div>
              </label>
              <label>
                <div>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>에어컨</span>
                </div>
              </label>
              <label>
                <div>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>헤어드라이어</span>
                </div>
              </label>
              <label>
                <div>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>난방</span>
                </div>
              </label>
              <label>
                <div>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>샴푸</span>
                </div>
              </label>
              <label>
                <div>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>건물 내 무료 주차</span>
                </div>
              </label>
            </div>
          </CheckBox6MF>
          <CounterMF>
            <h2>침실과 침대</h2>
            <div>
              <div>
                <div>
                  <p>침대 수</p>
                </div>
                <div className="counter">
                  <button>&minus;</button>
                  <span>0</span>
                  <button>+</button>
                </div>
              </div>
              <div>
                <div>
                  <p>침실 수</p>
                </div>
                <div className="counter">
                  <button>&minus;</button>
                  <span>0</span>
                  <button>+</button>
                </div>
              </div>
              <div>
                <div>
                  <p>욕실 수</p>
                </div>
                <div className="counter">
                  <button>&minus;</button>
                  <span>0</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </CounterMF>
          <ToggleMF>
            <h2>검증된 숙소</h2>
            <div>
              <div>
                <h3>에어비앤비 플러스</h3>
                <p>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</p>
              </div>
              <div>
                <form action="#">
                  <div class="switch">
                    <input id="switch-1" type="checkbox" class="switch-input" />
                    <label for="switch-1" class="switch-label">
                      Switch
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </ToggleMF>
          <ToggleMF>
            <h2></h2>
            <div>
              <div>
                <h3>출장을 떠나시나요?</h3>
                <p>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</p>
              </div>
              <div>
                <form action="#">
                  <div class="switch">
                    <input id="switch-2" type="checkbox" class="switch-input" />
                    <label for="switch-2" class="switch-label">
                      Switch
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </ToggleMF>

          <MoreOptionsMF>
            <h2>편의시설 더 보기</h2>
            <div>
              <div>
                <h3>슈퍼호스트</h3>
                <p>슈퍼호스트의 숙소에 머물러보세요</p>
                <button>더 알아보기</button>
              </div>
              <div>
                <form action="#">
                  <div class="switch">
                    <input id="switch-3" type="checkbox" class="switch-input" />
                    <label for="switch-3" class="switch-label">
                      Switch
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div>
                <h3>장애인 편의시설</h3>
                <p className="black">
                  원활한 이동에 필요한 조건을 갖춘 숙소를 찾아보세요.
                </p>
                <button className="black">
                  숙소에 갖춰진 편의시설을 선택하세요.
                </button>
              </div>
            </div>
          </MoreOptionsMF>
          <CheckBox4MF>
            <h2>편의시설</h2>
            <div>
              <label class="container">
                주방
                <input type="checkbox"></input>
                <span class="checkmark">&#10003;</span>
              </label>
              <label class="container">
                샴푸
                <input type="checkbox"></input>
                <span class="checkmark">&#10003;</span>
              </label>
              <label class="container">
                난방
                <input type="checkbox"></input>
                <span class="checkmark">&#10003;</span>
              </label>
              <label class="container">
                에어컨
                <input type="checkbox"></input>
                <span class="checkmark">&#10003;</span>
              </label>
            </div>
            <button>편의시설 모두 보기</button>
          </CheckBox4MF>
          <CheckBox4MF>
            <h2>숙소 이용규칙</h2>
            <div>
              <label class="container">
                반려동물 입실 가능
                <input type="checkbox"></input>
                <span class="checkmark">&#10003;</span>
              </label>
              <label class="container">
                흡연 가능
                <input type="checkbox"></input>
                <span class="checkmark">&#10003;</span>
              </label>
            </div>
          </CheckBox4MF>
        </section>
        <section>
          <div>
            <button>전체 삭제</button>
            <button>300개 이상의 숙소 보기</button>
          </div>
        </section>
      </div>
    </WrapperMF>
  );
};

export default MoreFilters;
