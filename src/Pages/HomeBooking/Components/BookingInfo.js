import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Calendar from "./Calendar";
import RevisionBtn from "./RevisionBtn";
import GuestsModalContent from "./GuestModalContent";
import { flexSet } from "../../../Styles/Theme";

const BookingInfo = (props) => {
  const {
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    dates,
    setDates,
    initialStartDate,
    initialEndDate,
    bedCounts,
    bathCounts,
    adultCount,
    setAdultCount,
    childrenCount,
    setChildrenCount,
    infantCount,
    setInfantCount,
  } = props;

  const formattedCheckinDate = checkinDate?.replace(/-/gi, ".");
  const formattedCheckoutDate = checkoutDate?.replace(/-/gi, ".");

  return (
    <ReservInfo>
      <SubTitle>예약 정보</SubTitle>
      <BookingDate>
        <DateWrapper>
          <Date>날짜</Date>
          <Modal
            toggle={(showModal) => <RevisionBtn showModal={showModal} />}
            content={(hideModal) => (
              <Calendar
                hideModal={hideModal}
                setCheckinDate={setCheckinDate}
                setCheckoutDate={setCheckoutDate}
                dates={dates}
                setDates={setDates}
                initialStartDate={initialStartDate}
                initialEndDate={initialEndDate}
                bedCounts={bedCounts}
                bathCounts={bathCounts}
              />
            )}
          />
        </DateWrapper>
        <ChosenDate>
          {formattedCheckinDate}-{formattedCheckoutDate}
        </ChosenDate>
      </BookingDate>
      <BookingDate>
        <DateWrapper>
          <Date>게스트</Date>
          <Modal
            toggle={(showModal) => <RevisionBtn showModal={showModal} />}
            content={(hideModal) => (
              <GuestsModalContent
                hideModal={hideModal}
                adultCount={adultCount}
                setAdultCount={setAdultCount}
                childrenCount={childrenCount}
                setChildrenCount={setChildrenCount}
                infantCount={infantCount}
                setInfantCount={setInfantCount}
              />
            )}
          />
        </DateWrapper>
        <ChosenDate>
          게스트 {adultCount + childrenCount + infantCount}명
        </ChosenDate>
      </BookingDate>
    </ReservInfo>
  );
};

const ReservInfo = styled.div`
  padding-bottom: 24px;
  border-top: solid 1px #dddddd;
  border-bottom: solid 1px #dddddd;
`;

const SubTitle = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
`;

const BookingDate = styled.div``;

const DateWrapper = styled.div`
  ${flexSet("space-between", "center")}
  margin-top: 25px;
`;

const Date = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const ChosenDate = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: grey;
`;

export default BookingInfo;
