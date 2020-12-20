import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { API_PostBooking, API_GetBooking } from "../../config";
import styled from "styled-components";
import Payment from "./Components/Payment";
import SummaryBox from "./Components/SummaryBox";
import BusinessTrip from "./Components/BusinessTrip";
import EssentialInfo from "./Components/EssentialInfo";
import Rules from "./Components/Rules";
import PaymentInfo from "./Components/PaymentInfo";
import BookingInfo from "./Components/BookingInfo";
import TitleArea from "./Components/TitleArea";

const HomeBookingContainer = (props) => {
  //store 값 호출
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const startDate = bookReducer.startDate;
  const endDate = bookReducer.endDate;
  const adults = bookReducer.adults;
  const children = bookReducer.children;
  const babies = bookReducer.babies;
  const userToken = signReducer.userToken;

  const [stay, setStay] = useState(null);

  const [checked, setChecked] = useState(false);

  const [adultCount, setAdultCount] = useState(adults);
  const [childrenCount, setChildrenCount] = useState(children);
  const [infantCount, setInfantCount] = useState(babies);
  const [guestSum, setGuestSum] = useState(0);

  const [country, setCountry] = useState("한국");

  const [totalPrice, setTotalPrice] = useState(0);

  const [checkinDate, setCheckinDate] = useState(
    startDate && 2020 + startDate.slice(0, 2) + startDate.slice(4, 6)
  );
  const [checkoutDate, setCheckoutDate] = useState(
    endDate && 2020 + endDate.slice(0, 2) + endDate.slice(4, 6)
  );
  const [dates, setDates] = useState(1);

  const refundableDate = checkinDate
    ? moment(checkinDate).add(8, "days").format("MM월 DD일")
    : "예약 후 7일";

  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };

  const [state, dispatch] = useReducer(reducer, {
    userName: "",
    phoneNumber: "",
    email: "",
    address: "",
    region: "",
  });

  const { userName, phoneNumber, email, address } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  window.onclick = (event) => {
    if (!event.target.matches(".dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  // Backend API: `${API_GetBooking}/stay/${this.props.match.params.id}`
  //Mockdata API: "http://localhost:3000/data/HomeBookingData.json"
  async function getBookingData() {
    const res = await fetch(`http://localhost:3000/data/HomeBookingData.json`, {
      // headers: {
      //   AUTHORIZATION: userToken,
      // },
    });
    const result = await res.json();
    setStay(result.stay);
  }

  useEffect(() => {
    getBookingData();
  }, []);

  const setInputValue = () => {
    fetch(`${API_PostBooking}reservation/booking`, {
      method: "POST",
      headers: {
        AUTHORIZATION:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzJ9.LJhBmYS_xzjGH1LhaiVHHuCvc8bkmE48flTDPf8uvK8",
      },
      body: JSON.stringify({
        stay: 1,
        checkin_date: checkinDate,
        checkout_date: checkoutDate,
        guest_number: String(guestSum),
        price: String(totalPrice),
        creditcard: userName,
        email: email,
      }),
    }).then((res) => res.json());
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setGuestSum(adultCount + childrenCount + infantCount);
    setTotalPrice(
      (stay && stay[0].price) * Number(dates) + 165000 + 26400 + 2640
    );
    setInputValue();
  };

  return (
    <StyledHomeBooking>
      <TitleArea />
      <Form>
        <InfoArea>
          <BookingInfo
            checkinDate={checkinDate}
            setCheckinDate={setCheckinDate}
            checkoutDate={checkoutDate}
            setCheckoutDate={setCheckoutDate}
            dates={dates}
            setDates={setDates}
            initialStartDate={startDate}
            initialEndDate={endDate}
            bedCounts={stay && stay[0].beds.beds__sum}
            bathCounts={stay && stay[0].bathrooms}
            adultCount={adultCount}
            setAdultCount={setAdultCount}
            childrenCount={childrenCount}
            setChildrenCount={setChildrenCount}
            infantCount={infantCount}
            setInfantCount={setInfantCount}
          />
          <BusinessTrip />
          <PaymentInfo onChange={onChange} />
          <EssentialInfo />
          <Rules refundableDate={refundableDate} />
          <Payment
            handleConfirm={handleConfirm}
            buyer_name={userName}
            buyer_tel={phoneNumber}
            buyer_email={email}
            buyer_addr={address}
          />
        </InfoArea>
        <SummaryBox
          stayInfo={stay && stay[0]}
          bookingDates={dates}
          refundableDate={refundableDate}
        />
      </Form>
    </StyledHomeBooking>
  );
};

const StyledHomeBooking = styled.div`
  width: 100%;
  padding: 80px 0;
`;

const Form = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const InfoArea = styled.div`
  width: 550px;
  float: left;
`;

export default withRouter(HomeBookingContainer);
