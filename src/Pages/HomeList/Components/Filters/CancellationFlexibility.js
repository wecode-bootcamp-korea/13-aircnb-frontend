import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CancellationFlexibility = ({ onClose }) => {
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const userToken = signReducer.userToken;

  return (
    <WrapperCancleFilter>
      <div>
        <section>
          <Toggle>
            <div>
              <div>
                <p>유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시</p>
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
          </Toggle>
        </section>
        <section>
          <div>
            <button>지우기</button>
            <button onClick={onClose}>저장</button>
          </div>
        </section>
      </div>
    </WrapperCancleFilter>
  );
};

export default CancellationFlexibility;

const WrapperCancleFilter = styled.div`
  & > div {
    border-radius: 13px;
    width: 360px;
    height: auto;
    background-color: white;
    opacity: 1;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px;
    & > section:first-child {
      max-width: 360px;
      height: 109px;
      border-bottom: 1px solid rgb(235, 235, 235);
      padding: 20px;
    }
    & > section:nth-child(2) {
      max-width: 360px;
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

const Toggle = styled.div`
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 4px;
    & > div {
      & > h3 {
        font-size: 16px;
        color: rgb(34, 34, 34);
        margin-bottom: px;
      }
      & > p {
        color: rgb(113, 113, 113);
        font-size: 14px;
        line-height: 18px;
        word-break: keep-all;
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
