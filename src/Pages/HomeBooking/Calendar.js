import React, { useState, useEffect } from "react";
// LINK react calendar
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import koLocale from "moment/locale/ko";
import moment from "moment";
// LINK style
//import { CalendarModule } from "./Calendar.Styled";
import "./Calendar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styled, { ThemeProvider } from "styled-components";

const Calendar = ({
  active,
  btnActive,
  setCheckinDate,
  setCheckoutDate,
  dates,
  setDates,
  hide,
}) => {
  const [dateRange, setdateRange] = useState({
    startDate: moment("20201110"),
    endDate: moment("20201112"),
  });
  const [formedDate, setFormedDate] = useState({
    formedStartDate: null,
    formedEndDate: null,
  });
  const [focus, setFocus] = useState("startDate");
  const { startDate, endDate } = dateRange;
  const handleOnDateChange = (startDate, endDate) => {
    setdateRange(startDate, endDate);
  };

  useEffect(() => {
    setDates((endDate - startDate) / 86400000);
  }, [endDate]);

  moment.locale("ko", koLocale);

  const onClose = (e) => {
    e.preventDefault();
    setCheckinDate(startDate && startDate.format("YYYY. MM. DD"));
    setCheckoutDate(endDate && endDate.format("YYYY. MM. DD"));
    hide();
  };

  return (
    <DateRangePickerWrapper>
      <div className="modalBox">
        <button className="closeBtn" onClick={hide}>
          X
        </button>
        <div className="modalHeader">
          <div className="headerWrapper">
            <span className="nDays">{dates}박</span>
            <span className="countOfFacility">침대 1개 욕실 0개</span>
          </div>
          <div className="calendar">
            <DateRangePicker
              startDate={startDate}
              startDateId="startDate"
              endDate={endDate}
              endDateId="endDate"
              onDatesChange={handleOnDateChange}
              focusedInput={focus}
              onFocusChange={(focus) => setFocus(focus)}
              daySize={40}
              isOutsideRange={(day) => moment().diff(day) >= 0}
              anchorDirection={"right"}
              displayFormat={"YYYY. MM. DD"}
              monthFormat="M[월] YYYY[년]"
              navPrev={<FontAwesomeIcon icon={faChevronLeft} />}
              navNext={<FontAwesomeIcon icon={faChevronRight} />}
              verticalSpacing={30}
              numberOfMonths={2}
              hideKeyboardShortcutsPanel
              keepOpenOnDateSelect
              autoFocus
              showClearDates
              noBorder
              block
            />
          </div>
        </div>
        <button className="saveBtn" onClick={onClose}>
          저장
        </button>
      </div>
    </DateRangePickerWrapper>
  );
};

export default Calendar;

const DateRangePickerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 10;
  .modalBox {
    width: 661px;
    height: 554px;
    position: relative;
    top: 20%;
    left: 30%;
    padding: 64px 32px 16px;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      .headerWrapper {
        display: flex;
        flex-direction: column;
        .nDays {
          font-size: 20px;
          font-weight: bold;
          color: #484848;
        }
        .countOfFacility {
          font-size: 14px;
          color: #717171;
          padding-top: 8px;
        }
      }
      .calendar {
        //float: right;
      }
    }
    .saveBtn {
      background-color: black;
      border: none;
      color: white;
      width: 88px;
      height: 34px;
      border-radius: 8px;
      position: absolute;
      right: 25px;
      bottom: 15px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
