import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleContent from "./Components/Modal";
import Calendar from "./Components/Calendar";
import { API_PostBooking, API_GetBooking } from "../../config";
import styled from "styled-components";
import Payment from "./Components/Payment";
import SummaryBox from "./Components/SummaryBox";
import BusinessTrip from "./Components/BusinessTrip";
import EssentialInfo from "./Components/EssentialInfo";
import Rules from "./Components/Rules";
import PaymentInfo from "./Components/PaymentInfo";

const HomeBookingContainer = (props) => {
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
      <Wrapper>
        <Link>
          <FontAwesomeIcon
            className="toPrevPage"
            size="sm"
            icon={faChevronLeft}
          />
        </Link>
        <Title>예약 요청하기</Title>
      </Wrapper>
      <Form>
        <InfoArea>
          <ReservInfo>
            <SubTitle>예약 정보</SubTitle>
            <BookingDate>
              <DateWrapper>
                <Date>날짜</Date>
                <ToggleContent
                  toggle={(show) => <Revision onClick={show}>수정</Revision>}
                  content={(hide, show) => (
                    <Calendar
                      setCheckinDate={setCheckinDate}
                      setCheckoutDate={setCheckoutDate}
                      dates={dates}
                      setDates={setDates}
                      hide={hide}
                      initialStartDate={startDate}
                      initialEndDate={endDate}
                      bedCounts={stay && stay[0].beds.beds__sum}
                      bathCounts={stay && stay[0].bathrooms}
                    />
                  )}
                />
              </DateWrapper>
              <ChosenDate>
                {checkinDate?.replace(/-/gi, ".")}−
                {checkoutDate?.replace(/-/gi, ".")}
              </ChosenDate>
            </BookingDate>
            <BookingDate>
              <DateWrapper>
                <Date>게스트</Date>
                <ToggleContent
                  toggle={(show) => <Revision onClick={show}>수정</Revision>}
                  content={(hide, show) => (
                    <GuestsModal>
                      <div className="modalBox">
                        <button className="closeBtn" onClick={hide}>
                          X
                        </button>
                        <div className="modalHeader">
                          <span>게스트</span>
                        </div>
                        <div className="totalWrapper">
                          <div className="elementWrapper">
                            <div className="elementTitle">성인</div>
                            <div className="BtnWrapper">
                              <button
                                disabled={adultCount <= 0}
                                onClick={() => {
                                  setAdultCount(adultCount - 1);
                                }}
                                className="minusBtn"
                              >
                                -
                              </button>
                              <div className="numOfGuests">{adultCount}</div>
                              <button
                                disabled={adultCount >= 2}
                                onClick={() => setAdultCount(adultCount + 1)}
                                className={
                                  adultCount >= 2
                                    ? "plusBtnDisabled"
                                    : "plusBtn"
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="elementWrapper">
                            <div className="elementTitle">어린이</div>
                            <div className="BtnWrapper">
                              <button
                                disabled={childrenCount <= 0}
                                onClick={() => {
                                  setChildrenCount(childrenCount - 1);
                                }}
                                className="minusBtn"
                              >
                                -
                              </button>
                              <div className="numOfGuests">{childrenCount}</div>
                              <button
                                disabled={childrenCount >= 2}
                                onClick={() => {
                                  setChildrenCount(childrenCount + 1);
                                }}
                                className={
                                  childrenCount < 2
                                    ? "plusBtn"
                                    : "plusBtnDisabled"
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="elementWrapper">
                            <div className="elementTitle">유아</div>
                            <div className="BtnWrapper">
                              <button
                                disabled={infantCount <= 0}
                                onClick={() => {
                                  setInfantCount(infantCount - 1);
                                }}
                                className="minusBtn"
                              >
                                -
                              </button>
                              <div className="numOfGuests">{infantCount}</div>
                              <button
                                onClick={() => {
                                  setInfantCount(infantCount + 1);
                                }}
                                className="plusBtn"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="countCondition">
                          최대 2명. 유아는 숙박인원에 포함되지 않습니다.
                        </div>
                        <div className="btnArea">
                          <button onClick={hide} className="cancleBtn">
                            취소
                          </button>
                          <button onClick={hide} className="saveBtn">
                            저장하기
                          </button>
                        </div>
                      </div>
                    </GuestsModal>
                  )}
                />
              </DateWrapper>
              <ChosenDate>
                게스트 {adultCount + childrenCount + infantCount}명
              </ChosenDate>
            </BookingDate>
          </ReservInfo>
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

const Wrapper = styled.div`
  height: 100%;
  width: 1100px;
  margin: 0 auto;
  a {
    color: black;
    text-decoration: none;
    .toPrevPage {
      margin: 24px 24px 24px 5px;
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
`;

const Link = ({ className, children }) => (
  <a href="/homedetails" className={className}>
    {children}
  </a>
);

const Title = styled.div`
  padding-bottom: 32px;
  font-size: 30px;
  font-weight: bold;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

const Date = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Revision = styled.div`
  font-weight: bold;
  font-size: 14px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const ChosenDate = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: grey;
`;

const GuestsModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 10;
  .modalBox {
    width: 376px;
    position: relative;
    top: 30%;
    left: 40%;
    padding: 25px;
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
      span {
        font-size: 20px;
        font-weight: bold;
        color: #484848;
      }
    }
    .totalWrapper {
      .elementWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
        .elementTitle {
          font-weight: bold;
        }
        .BtnWrapper {
          display: flex;
          align-items: center;
          .minusBtn,
          .plusBtn {
            display: block;
            width: 30px;
            height: 30px;
            padding-top: -10px;
            background-color: white;
            font-weight: bold;
            font-size: 20px;
            border-radius: 50%;
            border: solid 1px grey;
            &:hover,
            &:focus {
              cursor: pointer;
              outline: none;
            }
          }
          .plusBtnDisabled {
            display: block;
            width: 30px;
            height: 30px;
            background-color: white;
            font-weight: bold;
            font-size: 20px;
            border-radius: 50%;
            border: solid 1px grey;
            &:hover {
              cursor: not-allowed;
            }
          }
          .numOfGuests {
            margin: 0 10px;
            font-weight: bold;
          }
        }
      }
    }
    .countCondition {
      font-size: 12px;
      color: #878787;
      padding: 20px 0;
      border-bottom: solid 1px #dddddd;
    }
    .btnArea {
      display: flex;
      justify-content: space-between;
      padding: 20px 0 0 0;
      .cancleBtn {
        background-color: white;
        border: none;
        text-decoration: underline;
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
        &:focus {
          outline: none;
        }
      }
      .saveBtn {
        width: 110px;
        height: 48px;
        background-color: black;
        border: solid 1px black;
        color: white;
        font-weight: bold;
        border-radius: 8px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default withRouter(HomeBookingContainer);
