import React, { Component } from "react";
import styled, { css } from "styled-components";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import "moment/locale/ko";
import koLocale from "moment/locale/ko";
import moment from "moment";
import "react-bootstrap";
import { START_DATE, ANCHOR_RIGHT } from "react-dates/constants";
import "./CalendarStyling.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { takeBookDate } from "../../../Redux/Actions/Index";

class BookingBoxCalendar extends Component {
  constructor() {
    super();

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      isOpen: false,
      nightAndDay: "숙박일수를 선택해 주세요",
      datesText: "숙박일은 최소 2일 이상이여야 합니다.",
      isVisible: false,
    };
  }

  onDatesHandler = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate }, () => {
      const { takeBookDate } = this.props;
      takeBookDate(
        this.state.startDate.format("MM월 DD일"),
        this.state.endDate?.format("MM월 DD일")
      );
    });
  };

  // 11월 13일
  // 11월 17일
  formDateFormat = (date) => {
    if (!date) return null;

    const [month, day] = date.split(" ");
    return moment().set({
      year: 2020,
      month: Number(month.slice(0, -1)) - 1,
      date: Number(day.slice(0, -1)),
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.storeStartDate !== this.props.storeStartDate) {
      this.setState({
        startDate: this.formDateFormat(this.props.storeStartDate),
      });
    }
    if (prevProps.storeEndDate !== this.props.storeEndDate) {
      this.setState({ endDate: this.formDateFormat(this.props.storeEndDate) });
    }

    if (prevState.focusedInput === null) {
      this.setState({ focusedInput: START_DATE });
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setDates = (dates) => {
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
    const { nightAndDay, datesText, focusedInput } = this.state;

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
            startDate={this.state.startDate}
            startDateId="your_unique_start_date_id"
            endDate={this.state.endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={this.onDatesHandler}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            startDatePlaceholderText="YYYY.MM.DD"
            endDatePlaceholderText="YYYY.MM.DD"
            anchorDirection={ANCHOR_RIGHT}
            onClose={({ startDate, endDate }) => {
              this.setDates({ startDate, endDate });
            }}
            // onOutsideClick={this.clickOutSide}
            hideKeyboardShortcutsPanel={true}
            navPrev={<FontAwesomeIcon icon={faChevronLeft} />}
            navNext={<FontAwesomeIcon icon={faChevronRight} />}
            required={false}
          />
          <CloseBtn onClick={this.handleCloseBtn}>닫기</CloseBtn>
        </DateRangePickerCon>
      </CalendarDiv>
    );
  }
}

const mapStateToProps = ({ bookReducer: { startDate, endDate } }) => ({
  storeStartDate: startDate,
  storeEndDate: endDate,
});

const mapDispatchToProps = (dispatch) => ({
  takeBookDate: (start, end) => dispatch(takeBookDate(start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingBoxCalendar);

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
