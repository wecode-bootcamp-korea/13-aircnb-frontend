import React, { useState, useEffect } from "react";

// LINK react calendar
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import koLocale from "moment/locale/ko";
import moment from "moment";

// LINK style
import { CalendarModule } from "./Calendar.Styled";
import "./Calendar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Calendar = ({ active, btnActive, bookStatus, booking }) => {
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const [formedDate, setFormedDate] = useState({
    formedStartDate: null,
    formedEndDate: null,
  });

  const [focus, setFocus] = useState(null);
  const { startDate, endDate } = dateRange;

  const handleOnDateChange = (startDate, endDate) => {
    setdateRange(startDate, endDate);
  };

  const convertFormat = () => {
    setFormedDate({
      formedStartDate: moment(startDate?._d).format("MMM Do"),
      formedEndDate: moment(endDate?._d).format("MMM Do"),
    });
    booking(
      moment(startDate?._d).format("MMM Do"),
      moment(endDate?._d).format("MMM Do")
    );
  };

  // NOTE input handler
  useEffect(() => {
    active === 2 && setFocus("startDate");
    active === 3 && setFocus("endDate");
  }, [active]);

  // NOTE when btn clicked
  useEffect(() => {
    btnActive && setFocus("startDate");
  }, [btnActive]);

  // NOTE date convert
  useEffect(() => {
    convertFormat();
    return () => {
      setFormedDate({ formedStartDate: null, formedEndDate: null });
    };
  }, [dateRange]);

  // NOTE date clear
  useEffect(() => {
    bookStatus.startDate === "날짜추가" &&
      setdateRange({
        startDate: null,
        endDate: null,
      });
  }, [bookStatus]);

  moment.locale("ko", koLocale);
  return (
    <CalendarModule btnActive={btnActive}>
      <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="starDate"
        endDate={endDate}
        endDateId="endDate"
        onDatesChange={handleOnDateChange}
        focusedInput={focus}
        onFocusChange={(focus) => setFocus(focus)}
        daySize={42}
        isOutsideRange={(day) => moment().diff(day) >= 0}
        anchorDirection={"right"}
        displayFormat="MM[월] D[일]"
        monthFormat="YYYY[년] M[월]"
        navPrev={<FontAwesomeIcon icon={faChevronLeft} />}
        navNext={<FontAwesomeIcon icon={faChevronRight} />}
        verticalSpacing={100}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
        keepOpenOnDateSelect
        showClearDates
        noBorder
        block
      />
    </CalendarModule>
  );
};

export default Calendar;
