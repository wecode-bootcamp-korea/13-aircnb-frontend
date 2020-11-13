import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const BookingBoxPersonnel = ({ active, event, setTotal }) => {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  // redux link
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const adults = bookReducer.adults;
  const children = bookReducer.children;
  const babies = bookReducer.babies;

  useEffect(() => {
    setAdult(adults);
    setChild(children);
    setInfant(babies);
    setTotal(adult + child);
  }, [adult, child, adults, children, babies]);

  return (
    <BookingPersonnel active={active}>
      <ul>
        <li>
          <span className="title">성인</span>
          <BtnDiv>
            <CircleBtn
              disabled={adult === 0}
              onClick={() => {
                adult < 0 ? setAdult(0) : setAdult(adult - 1);
              }}
            >
              <span className="btnIcon">&minus;</span>
            </CircleBtn>
            <span>{adult}</span>
            <CircleBtn
              disabled={adult === 2}
              onClick={() => {
                adult < 2 ? setAdult(adult + 1) : setAdult(2);
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
              disabled={child === 0}
              onClick={() => {
                child < 0 ? setChild(0) : setChild(child - 1);
              }}
            >
              <span className="btnIcon">&minus;</span>
            </CircleBtn>
            <span>{child}</span>
            <CircleBtn
              disabled={child === 2}
              onClick={() => {
                child < 2 ? setChild(child + 1) : setChild(2);
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
              disabled={infant === 0}
              onClick={() => {
                infant < 0 ? setInfant(0) : setInfant(infant - 1);
              }}
            >
              <span className="btnIcon">&minus;</span>
            </CircleBtn>
            <span>{infant}</span>
            <CircleBtn
              disabled={infant === 2}
              onClick={() => {
                infant < 2 ? setInfant(infant + 1) : setInfant(2);
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
