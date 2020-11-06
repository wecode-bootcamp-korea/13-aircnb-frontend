import React, { Component } from "react";
import styled, { css } from "styled-components";

// LINK react calendar
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import koLocale from "moment/locale/ko";
import moment from "moment";

export class Calendar extends Component {
  state = {
    startDate: null,
    endDate: null,
    // startDate: moment().format("MMM Do"),
    // endDate: moment().format("MMM Do"),
  };

  render() {
    console.log(this.state.startDate?._d);
    moment.locale("ko", koLocale);

    return (
      <>
        <CalendarModule>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="startDate" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="endDate" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({
                startDate: startDate,
                endDate: endDate,
              })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            daySize={42}
            isOutsideRange={(day) => moment().diff(day) >= 0}
            customArrowIcon={<div></div>}
            anchorDirection={"right"}
            startDatePlaceholderText={"날짜추가"}
            endDatePlaceholderText={"날짜추가"}
            showClearDates
            block
            noBorder
            hideKeyboardShortcutsPanel
            numberOfMonths={1}
            displayFormat="MM[월] D[일]"
            monthFormat="YYYY[년] M[월]"
            customCloseIcon={"X"}
            verticalSpacing={100}
            appendToBody
            autoFocus
          />
        </CalendarModule>
      </>
    );
  }
}

// SECTION styled component

const CalendarModule = styled.div`
  position: absolute;
  top: 100px;
  left: 350px;
  border-radius: 12px;
  padding: 3px;
  z-index: 300;

  .DateInput_input,
  .DateInput {
    background: transparent;
    font-size: 14px;
  }

  .CalendarDay {
    border: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 42px;
    &__selected {
      &_start,
      &_end {
        background: rgb(34, 34, 34);
        border-radius: 50%;
      }
      &_span {
        color: black;
        background: rgb(247, 247, 247);
      }
    }
    &__hovered {
      &_span,
      &_span:hover {
        background: rgb(247, 247, 247);
        color: black;
        border-radius: 50%;
      }
    }
    &__blocked_out_of_range {
      text-decoration: line-through;
    }
  }

  .DateInput {
    width: 50%;
    &_input {
      &::placeholder {
        font: inherit;
        color: black;
        font-weight: medium;
      }
    }
  }
`;

export default Calendar;
