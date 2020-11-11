import React, { Component } from "react";
import styled, { css } from "styled-components";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/ko";
import "react-bootstrap";
import { START_DATE, ANCHOR_RIGHT } from "react-dates/constants";
import "./CalendarStyling.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

class BookingBoxCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: START_DATE,
      isOpen: false,
      nightAndDay: "숙박일수를 선택해 주세요",
      datesText: "숙박일은 최소 2일 이상이여야 합니다.",
      isVisible: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.focusedInput === null) {
      this.setState({ focusedInput: START_DATE });
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setDates = (dates) => {
    this.props.handleCheckIn(dates && dates.startDate?.format("YYYY.MM.DD"));
    this.props.handleCheckOut(dates && dates.endDate?.format("YYYY.MM.DD"));
    this.props.event(false);
    this.getNightsAndDays(
      dates.startDate?.format("MM-DD"),
      dates.endDate?.format("MM-DD")
    );
    this.setState({
      datesText: `${dates.startDate?.format(
        "YYYY년 MM월 DD일"
      )} - ${dates.endDate?.format("YYYY년 MM월 DD일")}`,
    });
    this.setState({ isVisible: true });
  };

  handleCloseBtn = () => {
    if (!this.props.checkIn) {
      this.props.handleCheckIn("YYYY.MM.DD");
    }
    if (!this.props.checkOut) {
      this.props.handleCheckOut("YYYY.MM.DD");
    }
    this.props.event(false);
  };

  getNightsAndDays = (checkIn, checkOut) => {
    const checkInMonth = +checkIn?.split("-")[0];
    const checkOutMonth = +checkOut?.split("-")[0];
    const checkInDays = +checkIn?.split("-")[1];
    const checkOutDays = +checkOut?.split("-")[1];

    if (checkInMonth === checkOutMonth) {
      const days = checkOutDays - checkInDays;
      this.setState({ nightAndDay: `${days}박 ${days + 1}일` });
    } else {
      if (checkInMonth % 2 === 0) {
        const days = 31 - checkInDays + checkOutDays;
        this.setState({ nightAndDay: `${days - 1}박 ${days}일` });
      } else if (checkInMonth % 2 !== 0) {
        const days = 30 - checkInDays + checkOutDays;
        this.setState({ nightAndDay: `${days - 1}박 ${days}일` });
      }
    }
  };

  render() {
    const {
      nightAndDay,
      datesText,
      startDate,
      endDate,
      focusedInput,
    } = this.state;

    return (
      <CalendarDiv active={this.props.active}>
        <DatesInfo>
          <span>
            {nightAndDay.includes("NaN")
              ? "숙박일수를 선택해 주세요"
              : nightAndDay}{" "}
          </span>
          <br></br>
          <span>
            {datesText.includes("undefined")
              ? "숙박일은 최소 2일 이상이여야 합니다."
              : datesText}
          </span>
        </DatesInfo>
        <DateRangePickerCon>
          <DateRangePicker
            startDate={startDate}
            startDateId="your_unique_start_date_id"
            endDate={endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            }
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            startDatePlaceholderText="YYYY.MM.DD"
            endDatePlaceholderText="YYYY.MM.DD"
            anchorDirection={ANCHOR_RIGHT}
            onClose={({ startDate, endDate }) => {
              this.setDates({ startDate, endDate });
            }}
            onOutsideClick={this.clickOutSide}
            hideKeyboardShortcutsPanel={true}
            navPrev={<FontAwesomeIcon icon={faChevronLeft} />}
            navNext={<FontAwesomeIcon icon={faChevronRight} />}
          />
          <CloseBtn onClick={this.handleCloseBtn}>닫기</CloseBtn>
        </DateRangePickerCon>
      </CalendarDiv>
    );
  }
}

export default BookingBoxCalendar;

const CalendarDiv = styled.div`
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  background-color: white;
  position: absolute;
  right: -10px;
  width: 661px;
  height: 470px;
  padding: 24px 32px 16px;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

const DateRangePickerCon = styled.div`
  position: absolute;
  top: 30px;
  left: 378px;
`;

const DatesInfo = styled.div`
  position: relative;
  top: 10px;

  span:first-child {
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  span:last-child {
    font-size: 14px;
    color: gray;
    line-height: 20px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 380px;
  right: 10px;
  background-color: black;
  color: white;
  width: 56px;
  height: 34px;
  margin-left: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;
