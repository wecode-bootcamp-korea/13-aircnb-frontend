import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import BookingBoxCalendar from "./BookingBoxCalendar";
import BookingBoxPersonnel from "./BookingBoxPersonnel";
// import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { takeGuestNumber } from "../../../Redux/Actions/Index";

const BookingBox = ({ price, setCheckDates, discountPrice, history, id }) => {
  const priceNum = Number(price);
  const [isOpen, setIsOpen] = useState(false);
  const [calIsOpen, setCalIsOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("YYYY.MM.DD");
  const [checkOut, setCheckOut] = useState("YYYY.MM.DD");
  const [totalPeople, setTotalPeople] = useState(1);

  const [nights, setNights] = useState(1);
  const [roomPrice, setRoomPrice] = useState(priceNum * nights);
  const [serviceCharge, setServiceCharge] = useState(Number(roomPrice * 0.05));
  const [tax, setTax] = useState(Number(roomPrice * 0.005));
  const [totalPrice, setTotalPrice] = useState(roomPrice + serviceCharge + tax);

  // redux link
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const startDate = bookReducer.startDate;
  const endDate = bookReducer.endDate;
  const dispatch = useDispatch();
  const takeGuestNumberAction = (ad, ch, bb) =>
    dispatch(takeGuestNumber(ad, ch, bb));

  useEffect(() => {
    setNights(getNights(startDate, endDate));
    setRoomPrice(priceNum * nights);
    setCheckIn(startDate);
    setCheckOut(endDate);
  }, [nights, checkIn, checkOut, startDate, endDate]);

  const handleBookingBtn = () => {
    history.push(`/homebooking/${id}`);
  };

  const getNights = (checkIn, checkOut) => {
    const checkInMonth = checkIn?.slice(0, 2);
    const checkOutMonth = checkOut?.slice(0, 2);
    const checkInDays = checkIn?.slice(4, 6);
    const checkOutDays = checkOut?.slice(4, 6);
    let countNights = 1;

    if (checkInMonth === checkOutMonth) {
      const days = checkOutDays - checkInDays;
      countNights = days;
    } else {
      if (checkInMonth % 2 === 0) {
        const days = 31 - checkInDays + checkOutDays;
        countNights = days - 1;
      } else if (checkInMonth % 2 !== 0) {
        const days = 30 - checkInDays + checkOutDays;
        countNights = days - 1;
      }
    }
    return countNights;
  };

  return (
    <Box>
      <div className="infoCon">
        <div className="pricePerDay">
          <span>{price?.toLocaleString()}</span>
          <span>/박</span>
        </div>
        <BookingBoxCalendar
          active={calIsOpen}
          event={setCalIsOpen}
          handleCheckIn={setCheckIn}
          handleCheckOut={setCheckOut}
          checkIn={checkIn}
          checkOut={checkOut}
        />
        <div className="infoBox">
          <div
            className="line"
            onClick={() => {
              setCalIsOpen(!calIsOpen);
            }}
          >
            <div>
              <span>체크인</span>
              <span>{checkIn}</span>
            </div>
            <div className="right">
              <span>체크아웃</span>
              <span>{checkOut}</span>
            </div>
          </div>
          <div
            className="line"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div>
              <span>인원</span>
              <span>{`게스트 ${totalPeople}명`}</span>
            </div>
            <DownArrowBtn>
              <img
                alt="downArrow"
                src="https://www.flaticon.com/svg/static/icons/svg/32/32195.svg"
              />
            </DownArrowBtn>
          </div>
          <BookingBoxPersonnel
            active={isOpen}
            event={setIsOpen}
            setTotal={setTotalPeople}
          ></BookingBoxPersonnel>
        </div>
        <BookingBtn onClick={() => history.push(`/homebooking/${id}`)}>
          예약하기
        </BookingBtn>
      </div>
      <span className="notice">예약 확정 전에는 요금이 청구되지 않습니다</span>
      <PriceBox>
        <Price>
          <span>숙박료</span>
          <span>
            {checkIn?.includes("YYYY") || checkOut?.includes("YYYY")
              ? "₩ --"
              : `₩ ${roomPrice.toLocaleString()}`}
          </span>
        </Price>
        <Price>
          <span>서비스 수수료</span>
          <span>
            {" "}
            {checkIn?.includes("YYYY") || checkOut?.includes("YYYY")
              ? "₩ --"
              : `₩ ${Math.floor(roomPrice * 0.05).toLocaleString()}`}
          </span>
        </Price>
        <Price>
          <span>숙박세와 수수료</span>
          <span>
            {checkIn?.includes("YYYY") || checkOut?.includes("YYYY")
              ? "₩ --"
              : `₩ ${Math.floor(roomPrice * 0.007).toLocaleString()}`}
          </span>
        </Price>
      </PriceBox>
      <TotalPrice>
        <span>총 합계</span>
        <span>
          {" "}
          {checkIn?.includes("YYYY") || checkOut?.includes("YYYY")
            ? "₩ --"
            : `₩ ${(
                Math.floor(roomPrice) +
                Math.floor(roomPrice * 0.05) +
                Math.floor(roomPrice * 0.007)
              ).toLocaleString()}`}
        </span>
      </TotalPrice>
    </Box>
  );
};

export default BookingBox;

const checkInOut = css`
  span {
    display: block;

    &:first-child {
      font-size: 10px;
      font-weight: 700;
      line-height: 12px;
    }

    &:last-child {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const Box = styled.div`
  background-color: white;
  border: 1px solid #d3d3d3;
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  .infoCon {
    .pricePerDay {
      height: 50px;

      span:first-child {
        font-size: 22px;
        line-height: 26px;
      }
    }

    .infoBox {
      border: 1px solid #b0b0b0;
      width: 100%;
      height: 112px;
      border-radius: 12px;

      .line {
        display: flex;
        justify-content: space-between;
        height: 50%;
        ${checkInOut}

        &:first-child {
          border-bottom: 1px solid #b0b0b0;
        }

        .right {
          border-left: 1px solid #b0b0b0;
        }

        div {
          width: 50%;
          padding: 10px 0 0 10px;
          ${checkInOut}
        }
      }
    }
  }

  .notice {
    display: block;
    margin: 15px auto 30px;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
  }
`;

const DownArrowBtn = styled.button`
  width: 54px;
  background-color: white;
  border: none;
  border-radius: 20px;

  :focus {
    outline: none;
  }

  img {
    width: 16px;
  }
`;

const BookingBtn = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  margin-top: 20px;
  background-color: #fe5131;
  color: white;
  font-size: 16px;
  font-weight: 600;

  &:focus {
    outline: none;
  }
`;

const PriceBox = styled.ul`
  margin-top: 15px;
  padding: 0 4px 6px;
  border-bottom: 1px solid #d3d3d3;
`;

const Price = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  font-size: 16px;
  line-height: 20px;

  span:first-child {
    text-decoration: underline;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 4px 0 4px;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
`;
