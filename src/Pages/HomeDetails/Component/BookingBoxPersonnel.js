import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { takeGuestNumber } from "../../../Redux/Actions/Index";

const BookingBoxPersonnel = ({ active, event, setTotal }) => {
  // redux link
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const adults = bookReducer.adults;
  const children = bookReducer.children;
  const babies = bookReducer.babies;
  const dispatch = useDispatch();
  const takeGuestNumberAction = (ad, ch, bb) =>
    dispatch(takeGuestNumber(ad, ch, bb));

  useEffect(() => {
    setTotal(adults + children);
  }, [adults, children]);

  return (
    <BookingPersonnel active={active}>
      <ul>
        <li>
          <span className="title">성인</span>
          <BtnDiv>
            <CircleBtn
              disabled={adults === 0}
              onClick={() => {
                adults < 0
                  ? takeGuestNumberAction(0, children, babies)
                  : takeGuestNumberAction(adults - 1, children, babies);
              }}
            >
              <span className="btnIcon">&minus;</span>
            </CircleBtn>
            <span>{adults}</span>
            <CircleBtn
              disabled={adults === 2}
              onClick={() => {
                adults < 2
                  ? takeGuestNumberAction(adults + 1, children, babies)
                  : takeGuestNumberAction(adults, children, babies);
              }}
            >
              <span className="btnIcon">+</span>
            </CircleBtn>
          </BtnDiv>
        </li>

        <li>
          <div className="btnTitle">
            <span className="title">어린이</span>
            <span>2~12세</span>
          </div>
          <OtherBtnDiv>
            <CircleBtn
              disabled={children === 0}
              onClick={() => {
                children < 0
                  ? takeGuestNumberAction(adults, 0, babies)
                  : takeGuestNumberAction(adults, children - 1, babies);
              }}
            >
              <span className="btnIcon">&minus;</span>
            </CircleBtn>
            <span>{children}</span>
            <CircleBtn
              disabled={children === 2}
              onClick={() => {
                children < 2
                  ? takeGuestNumberAction(adults, children + 1, babies)
                  : takeGuestNumberAction(adults, 2, babies);
              }}
            >
              <span className="btnIcon">+</span>
            </CircleBtn>
          </OtherBtnDiv>
        </li>
        <li>
          <div className="btnTitle">
            <span className="title">유아</span>
            <span>2세 미만</span>
          </div>
          <OtherBtnDiv>
            <CircleBtn
              disabled={babies === 0}
              onClick={() => {
                babies < 0
                  ? takeGuestNumberAction(adults, children, 0)
                  : takeGuestNumberAction(adults, children, babies - 1);
              }}
            >
              <span className="btnIcon">&minus;</span>
            </CircleBtn>
            <span>{babies}</span>
            <CircleBtn
              disabled={babies === 2}
              onClick={() => {
                babies < 2
                  ? takeGuestNumberAction(adults, children, babies + 1)
                  : takeGuestNumberAction(adults, children, 2);
              }}
            >
              <span className="btnIcon">+</span>
            </CircleBtn>
          </OtherBtnDiv>
        </li>
      </ul>
      <PeopleNotice>
        최대 2명. 유아는 숙박인원에 포함되지 않습니다.
      </PeopleNotice>
      <CloseBtnDiv>
        <button
          onClick={() => {
            event(false);
          }}
        >
          닫기
        </button>
      </CloseBtnDiv>
    </BookingPersonnel>
  );
};

export default BookingBoxPersonnel;

const BookingPersonnel = styled.div`
  background-color: white;
  position: relative;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  width: 100%;
  min-width: 280px;
  z-index: 200;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px,
    rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  li {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 24px;

    .title {
      margin-top: 7px;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
    }

    .btnTitle {
      display: flex;
      flex-direction: column;

      span:last-child {
        font-size: 14px;
        line-height: 18px;
        padding-top: 4px;
      }
    }
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 104px;

  span {
    margin-top: 7px;
  }
`;

const OtherBtnDiv = styled(BtnDiv)`
  margin-top: 12px;
`;

const CircleBtn = styled.button`
  background-color: white;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: rgb(176, 176, 176);
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};

  &:hover {
    color: #222222;
    border-color: #222222;
  }

  &:focus {
    outline: none;
  }

  img {
    width: 18px;
  }

  .btnIcon {
    width: 8px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const PeopleNotice = styled.span`
  display: block;
  color: rgb(113, 113, 113);
  font-size: 14px;
  line-height: 18px;
  margin: 4px 0 16px;
`;

const CloseBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;

  button {
    display: inline-block;
    background-color: white;
    padding: 10px;
    text-decoration: underline;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: rgb(247, 247, 247);
    }

    &:focus {
      outline: none;
    }
  }
`;
