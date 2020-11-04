import React, { useState, useEffect, useReducer } from "react";
import { withRouter } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faStar,
  faFireAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleSwitch from "./ToggleSwitch";
import ToggleContent from "./Modal";
import Calendar from "./Calendar";
import { API_PostBooking, API_GetBooking } from "../../config";
import styled from "styled-components";
import Payment from "./Payment";

const HomeBooking = (props) => {
  const [stay, setStay] = useState(null);

  const [checked, setChecked] = useState(false);

  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [guestSum, setGuestSum] = useState(0);

  const [country, setCountry] = useState("한국");

  const [totalPrice, setTotalPrice] = useState(0);

  const [checkinDate, setCheckinDate] = useState("2020. 11. 10");
  const [checkoutDate, setCheckoutDate] = useState("2020. 11. 12");
  const [dates, setDates] = useState(1);

  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };

  const [state, dispatch] = useReducer(reducer, {
    cardNum: "",
    CVV: "",
    expDate: "",
    zipCode: "",
    region: "",
  });

  const { cardNum, expDate, CVV, zipCode } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  const openCardDropBox = (e) => {
    document.getElementById("myDropdown").classList.toggle("show");
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
  //<Link to ={`/homebooking/${this.props.homeId}`}
  //Backend API: `${API_GetBooking}/stay/${this.props.match.params.id}`
  //Mockdata API: "http://localhost:3000/data/HomeBookingData.json"
  async function fetchData() {
    const res = await fetch(
      "http://localhost:3000/data/HomeBookingData.json"
      //{
      // headers: {
      //   AUTHORIZATION:
      //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzN9.Ad8wugR1nNKBdnAKJfn9TNffFXyqPgjXT716dFH4yWE",
      // },
      //}
    );
    const result = await res.json();
    setStay(result.stay);
  }

  useEffect(() => {
    fetchData();
    console.log("PROPS!!!!!!!!!!", props.match.params.id);
  }, []);

  const setInputValue = () => {
    fetch(`${API_PostBooking}/reservation/booking`, {
      method: "POST",
      headers: {
        AUTHORIZATION:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzF9.-dpTDEqbZkYtHbWbna51heDOR2mJvgPAOI7J9QoJMX8",
      },
      body: JSON.stringify({
        stay: 1,
        checkin_date: checkinDate,
        checkout_date: checkoutDate,
        guest_number: String(guestSum),
        price: String(totalPrice),
        creditcard: cardNum,
      }),
    }).then((res) => res.json());
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setGuestSum(adultCount + childrenCount + infantCount);

    setTotalPrice(
      stay && stay[0].price * Number(dates) + 165000 + 26400 + 2640
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
                    />
                  )}
                />
              </DateWrapper>
              <ChosenDate>
                {checkinDate}−{checkoutDate}
              </ChosenDate>
            </BookingDate>
            <BookingDate>
              <DateWrapper>
                <Date>게스트</Date>
                <ToggleContent
                  toggle={(show) => <Revision onClick={show}>수정</Revision>}
                  content={(hide, show) => (
                    <GuestsModal>
                      <div
                        className="modalBox"
                        // onBlur={hide}
                        // onFocus={show}
                        // tabIndex="2"
                      >
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
          <BusinessTrip>
            <BusinessTripWrapper>
              <span>출장인가요?</span>
              <ToggleSwitch
                id="businessTrip"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </BusinessTripWrapper>
            <TripPurposeWrapper checked={checked}>
              <PurposeDescriptionWrapper>
                <Date>출장 목적(선택 사항)</Date>
                <ChosenDate>경비 처리를 위해 메모를 추가하세요.</ChosenDate>
              </PurposeDescriptionWrapper>
              <ToggleContent
                toggle={(show) => <Button onClick={show}>추가</Button>}
                content={(hide, show) => (
                  <BusinessTripModal>
                    <div
                      className="modalBox"
                      onBlur={hide}
                      onFocus={show}
                      tabIndex="2"
                    >
                      <div className="modalHeader">
                        <button className="closeBtn" onClick={hide}>
                          X
                        </button>
                        <span>출장 목적 입력</span>
                      </div>
                      <div className="modalContent">
                        <div>출장 목적을 회사에 알려주세요.</div>
                        <input type="text" />
                      </div>
                      <div className="BtnWrapper">
                        <button onClick={hide} className="saveBtn">
                          저장
                        </button>
                      </div>
                    </div>
                  </BusinessTripModal>
                )}
              />
            </TripPurposeWrapper>
          </BusinessTrip>
          <StyledPayment>
            <PaymentWrapper>
              <SubTitle>결제 수단</SubTitle>
              <CardLogos>
                <img
                  alt="visa"
                  src="https://lh3.googleusercontent.com/proxy/FOavFGoMvOoen3eyNvPVzKT25Nk0Iq3fOsDNUtm-mk8WmPYungbKwXhE_rnONY64M9c3MTWHz2GN1ATnSBD5UmvS860QOrjMeOSw68t0ewuR4q_sTNjiiI9tAZNrAg"
                />
              </CardLogos>
            </PaymentWrapper>
            <CardInput>
              <div class="dropdown">
                <button onClick={(e) => openCardDropBox(e)} class="dropbtn">
                  카카오페이
                </button>
                <div id="myDropdown" class="dropdown-content">
                  <div className="paymentList">
                    카카오페이
                    <FontAwesomeIcon className="checkIcon" icon={faCheck} />
                  </div>
                </div>
              </div>
            </CardInput>
            <CardNumInput
              onChange={onChange}
              name="cardNum"
              type="text"
              placeholder="성함"
            />
            <ExpDateInput
              onChange={onChange}
              name="expDate"
              type="text"
              placeholder="핸드폰번호"
            />
            <CVVInput
              onChange={onChange}
              name="CVV"
              type="text"
              placeholder="email"
            />
            <AdressInput
              onChange={onChange}
              name="zipCode"
              type="text"
              placeholder="주소"
            />
            <ToggleContent
              toggle={(show, isShown) => (
                <CountryButton onClick={show}>
                  {country}
                  <FontAwesomeIcon
                    className="arrowIcon"
                    icon={faChevronDown}
                    rotation={isShown && 180}
                  />
                </CountryButton>
              )}
              content={(hide, show) => (
                <CountryModal>
                  <div
                    className="modalBox"
                    onBlur={hide}
                    onFocus={show}
                    tabIndex="2"
                  >
                    <div className="modalHeader">
                      <button className="closeBtn" onClick={hide}>
                        X
                      </button>
                      <span>국가/지역</span>
                    </div>
                    <ul className="modalContent">
                      {[
                        "한국",
                        "미국",
                        "영국",
                        "중국",
                        "흥국",
                        "이탈리아",
                        "프랑스",
                        "베트남",
                      ].map((el) => (
                        <li onClick={(e) => setCountry(e.target.innerText)}>
                          <div className="countryName">{el}</div>
                          <FontAwesomeIcon
                            className={country === el ? "checkIcon" : "noIcon"}
                            icon={faCheck}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </CountryModal>
              )}
            />
          </StyledPayment>
          <EssentialInfo>
            <SubTitle>필수 입력 정보</SubTitle>
            <EssentialInfoWrapper>
              <DescriptionWrapper>
                <Date>호스트에게 메시지 보내기</Date>
                <ChosenDate>
                  호스트에게 여행 목적과 도착 예정 시간을 알려주세요.
                </ChosenDate>
              </DescriptionWrapper>
              <Button>추가</Button>
            </EssentialInfoWrapper>
            <EssentialInfoWrapper>
              <DescriptionWrapper>
                <Date>전화번호</Date>
                <ChosenDate>
                  여행 업데이트를 받으려면 전화번호를 입력하고 인증해주세요.
                </ChosenDate>
              </DescriptionWrapper>
              <Button>추가</Button>
            </EssentialInfoWrapper>
          </EssentialInfo>
          <Rule>
            <DateWrapper>
              <Date>숙소 이용규칙</Date>
              <FontAwesomeIcon
                className="toPrevPage"
                size="sm"
                icon={faChevronRight}
              />
            </DateWrapper>
            <ChosenDate>
              숙소 이용규칙과 안전 정보 섹션을 검토하세요.
            </ChosenDate>
          </Rule>
          <RefundPolicy>
            <YellowBar></YellowBar>
            <PolicyWrapper>
              <SubTitle>환불 정책</SubTitle>
              <ChosenDate>
                예약 후 7일 이내에 무료로 취소할 수 있습니다. 그 후에는 14일 PM
                3:00 전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한
                요금의 50%가 환불됩니다.
              </ChosenDate>
            </PolicyWrapper>
          </RefundPolicy>
          <AdditionalInfo>
            아래 버튼을 선택하면, <u>숙소 이용규칙</u>, <u>안전 정보 공개</u>,
            <u>환불 정책</u>,
            <u>
              에어비앤비의 사회적 거리 두기 및 기타 코로나19 관련 가이드라인
            </u>
            , 및<u>게스트 환불 정책</u>에 동의하는 것입니다. 또한 <u>숙박세</u>
            및 서비스 수수료를 포함하여 표시된 총 금액에 동의합니다.
            에어비앤비는 이제 이 지역에서 정부가 부과한 숙박세를 징수하여
            납부합니다.
          </AdditionalInfo>
          <Payment
            handleConfirm={handleConfirm}
            buyer_name={cardNum}
            buyer_tel={expDate}
            buyer_email={CVV}
            buyer_addr={zipCode}
          />
        </InfoArea>
        <SummaryArea>
          <SummaryBox>
            <div className="homeSummary">
              <img alt="homeImg" src={stay && stay[0].imgUrl[0]} />
              <div className="homeDescription">
                <div className="homeLocation">
                  {stay && stay[0].city} {stay && stay[0].address1}의{" "}
                  {stay && stay[0].subcategory}
                </div>
                <div className="homeTitle">★{stay && stay[0].name}★</div>
                <div className="NumOfFacility">
                  침대 {stay && stay[0].beds.beds__sum}개 · 욕실{" "}
                  {stay && stay[0].bathrooms}개
                </div>
                <div className="Rating">
                  <div className="guestRating">
                    <FontAwesomeIcon
                      className="starIcon"
                      size="sm"
                      icon={faStar}
                    />
                    <b>{Number(stay && stay[0].review.avr_score).toFixed(2)}</b>
                    ({stay && stay[0].review.reviews})
                  </div>
                  {stay && stay[0].hostInfo.superHost && (
                    <div className="hostRating">
                      <FontAwesomeIcon
                        className="heartIcon"
                        size="sm"
                        icon={faFireAlt}
                      />
                      슈퍼호스트
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="paymentSummary">
              <div className="paymentTitle">요금 세부정보</div>
              <ClaimWrapper>
                <ClaimDetail>
                  ₩{Number(stay && stay[0].price).toLocaleString()} x {dates}박
                </ClaimDetail>
                <PricebyClaim>
                  ₩
                  {(
                    Number(stay && stay[0].price) * Number(dates)
                  ).toLocaleString()}
                </PricebyClaim>
              </ClaimWrapper>
              <ClaimWrapper>
                <ClaimDetail>
                  <u>청소비</u>
                </ClaimDetail>
                <PricebyClaim>₩165,000</PricebyClaim>
              </ClaimWrapper>
              <ClaimWrapper>
                <ClaimDetail>
                  <u>서비스 수수료</u>
                </ClaimDetail>
                <PricebyClaim>₩26,400</PricebyClaim>
              </ClaimWrapper>
              <ClaimWrapper>
                <ClaimDetail>
                  <u>숙박세와 수수료</u>
                </ClaimDetail>
                <PricebyClaim>₩2,640</PricebyClaim>
              </ClaimWrapper>
              <ClaimWrapper>
                <ClaimTotal>
                  총 합계 <u>(KRW)</u>
                </ClaimTotal>
                <TotalPrice>
                  ₩
                  {(
                    Number(stay && stay[0].price) * Number(dates) +
                    165000 +
                    26400 +
                    2640
                  ).toLocaleString()}
                </TotalPrice>
              </ClaimWrapper>
            </div>
            <div className="refundSummary">
              <div className="refundTitle">
                11월 10일 3:00 PM까지 무료 취소 가능
              </div>
              <div className="refundDetail">
                그 후에는 11월 15일 3:00 PM 전에 예약을 취소하면 첫 1박 요금 및
                서비스 수수료를 제외한 요금의 50%가 환불됩니다.
              </div>
              <div className="seeDetail">자세히 알아보기</div>
            </div>
          </SummaryBox>
        </SummaryArea>
      </Form>
    </StyledHomeBooking>
  );
};

export default withRouter(HomeBooking);

const StyledHomeBooking = styled.div`
  width: 100%;
  padding: 80px 80px;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 1100px;
  margin: 0 auto;
  .toPrevPage {
    margin: 24px 24px 24px 5px;
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

const BusinessTrip = styled.div`
  padding-bottom: 25px;
  border-bottom: solid 1px #dddddd;
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

const StyledPayment = styled.div`
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const PaymentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const CardLogos = styled.div`
  width: 80px;
  margin: 24px -15px 0 0;
  display: flex;
  align-items: center;
  img {
    width: 60px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  margin-top: 10px;
  padding: 16px 40px 16px 16px;
  border: solid 1px grey;
  border-radius: 8px;
  ::-webkit-inner-spin-button {
    appearance: none;
  }
  &:focus {
    outline: none;
    border: solid 1px black;
  }
  &:hover {
    outline: none;
    border: solid 1px #bbbbbb;
  }
`;

const CardInput = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 10px;

  .dropdown {
    width: 100%;
    display: inline-block;
    position: relative;

    .dropbtn {
      width: 100%;
      height: 56px;
      padding: 16px;
      display: flex;
      align-items: center;
      color: #717171;
      font-size: 13px;
      background-color: white;
      border: none;
      border-radius: 8px;
      border: solid 1px grey;

      &:hover,
      &:focus {
        border: solid 1px #bbbbbb;
        outline: none;
        cursor: pointer;
      }
    }
    .dropdown-content {
      width: 100%;
      height: 56px;
      display: none;
      padding: 16px;
      margin-top: 5px;
      position: absolute;
      background-color: rgb(242, 242, 242) !important;
      border-radius: 8px;
      border: solid 1px grey;
      font-size: 13px;
      color: #717171;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      .paymentList {
        display: block;
        padding: 4px 0;
        color: black;
        text-decoration: none;
        &:hover {
          cursor: pointer;
        }
        .checkIcon {
          position: absolute;
          right: 20px;
        }
      }
    }
    .show {
      display: block;
    }
  }
`;

const CardNumInput = styled(Input)`
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  background-color: ${(props) => (props.onBlur === true ? "red" : "white")};
`;

const ExpDateInput = styled(Input)`
  width: 50%;
  margin-top: 0px;
  border-radius: 0px 0px 0px 8px;
  border-right: none;
`;

const CVVInput = styled(Input)`
  width: 50%;
  margin-top: 0px;
  border-radius: 0px 0px 8px 0px;
`;

const AdressInput = styled(Input)``;

// const CountryInput = styled.div`
//   width: 100%;
//   height: 56px;
//   margin-top: 10px;

//   .dropdown {
//     width: 100%;
//     display: inline-block;
//     position: relative;

//     .dropbtn {
//       width: 100%;
//       height: 56px;
//       padding: 16px;
//       display: flex;
//       align-items: center;
//       color: #717171;
//       font-size: 13px;
//       background-color: white;
//       border: none;
//       border-radius: 8px;
//       border: solid 1px grey;

//       &:hover,
//       &:focus {
//         border: solid 1px #bbbbbb;
//         outline: none;
//         cursor: pointer;
//       }
//     }
//     .dropdown-content {
//       width: 100%;
//       height: 56px;
//       display: none;
//       padding: 16px;
//       margin-top: 5px;
//       position: absolute;
//       background-color: rgb(242, 242, 242) !important;
//       border-radius: 8px;
//       border: solid 1px grey;
//       font-size: 13px;
//       color: #717171;
//       box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//       z-index: 1;
//       a {
//         display: block;
//         padding: 4px 0;
//         color: black;
//         text-decoration: none;
//       }
//     }
//     .show {
//       display: block;
//     }
//   }
// `;

const EssentialInfo = styled.div`
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const DescriptionWrapper = styled.div``;

const Button = styled.button`
  width: 60px;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  border: solid 1px black;
  background-color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const EssentialInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Rule = styled.div`
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const RefundPolicy = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const YellowBar = styled.div`
  width: 20px;
  height: 80px;
  margin-right: 20px;
  margin-top: 24px;
  background-color: #ffaf0f;
`;

const PolicyWrapper = styled.div``;

const AdditionalInfo = styled.div`
  margin: 30px 0px;
  font-size: 11px;
  u {
    font-weight: bold;
    line-height: 1.6;
    color: #0038ab;
  }
`;

const SummaryArea = styled.div`
  width: 500px;
  height: 1500px;
  margin-left: 40px;
  float: left;
`;

const SummaryBox = styled.div`
  position: sticky;
  top: 80px;
  float: right;
  width: 425px;
  height: 524px;
  margin-right: 7px;
  padding: 24px;
  border: 1px solid #dddddd;
  border-radius: 10px;

  .homeSummary {
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #dddddd;
    img {
      width: 124px;
      height: 96px;
      margin-right: 20px;
      border-radius: 10px;
    }

    .homeDescription {
      .homeLocation {
        margin-bottom: 10px;
        font-size: 11px;
      }
      .homeTitle {
        margin-bottom: 9px;
        font-size: 14px;
      }
      .NumOfFacility {
        margin-bottom: 9px;
        font-size: 11px;
        color: grey;
      }
      .Rating {
        font-size: 14px;
        color: grey;
        .guestRating,
        .hostRating {
          float: left;
          margin-right: 5px;
          b {
            color: black;
          }
          .starIcon,
          .heartIcon {
            margin-right: 3px;
            color: red;
          }
        }
      }
    }
  }

  .paymentSummary {
    border-bottom: 1px solid #dddddd;
    .paymentTitle {
      margin: 20px 0;
      font-size: 22px;
      font-weight: bold;
    }
  }

  .refundSummary {
    .refundTitle {
      margin: 24px 0 20px 0;
      font-weight: bold;
      font-size: 14px;
    }

    .refundDetail {
      margin-bottom: 5px;
      font-size: 14px;
      color: grey;
    }

    .seeDetail {
      font-weight: bold;
      font-size: 14px;
      text-decoration: underline;
    }
  }
`;

const ClaimWrapper = styled(PaymentWrapper)`
  margin-bottom: 20px;
`;

const ClaimDetail = styled.div`
  font-size: 15px;
`;

const PricebyClaim = styled.div`
  font-size: 15px;
`;

const ClaimTotal = styled(ClaimDetail)`
  font-size: 15px;
  font-weight: bold;
`;

const TotalPrice = styled(PricebyClaim)`
  font-size: 15px;
  font-weight: bold;
`;

const BusinessTripWrapper = styled(DateWrapper)``;

const TripPurposeWrapper = styled(EssentialInfoWrapper)`
  display: ${(props) => props.checked === false && "none"};
`;
const PurposeDescriptionWrapper = styled(DescriptionWrapper)``;

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

const BusinessTripModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 10;

  .modalBox {
    width: 568px;
    position: relative;
    top: 30%;
    left: 30%;
    padding: 20px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 2px 5px 16px 0px #0b325e;
    z-index: 11;
    &:focus {
      outline: none;
    }

    .modalHeader {
      position: relative;
      padding-bottom: 20px;
      border-bottom: solid 1px #dddddd;
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
      span {
        position: absolute;
        right: 215px;
        top: 4px;
        font-size: 15px;
      }
    }

    .modalContent {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: solid 1px #dddddd;
      div {
        font-size: 14px;
        margin-bottom: 15px;
      }
      input {
        width: 100%;
        height: 60px;
        border-radius: 10px;
        border: 1px solid grey;
        outline: none;
        padding: 10px;
      }
    }

    .BtnWrapper {
      padding-top: 20px;
    }
    .saveBtn {
      width: 100%;
      height: 48px;
      background-color: #222222;
      color: white;
      font-size: 15px;
      font-weight: bold;
      border: solid 1px black;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
        background-color: black;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
const CountryButton = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 10px;
  padding: 20px 40px 16px 16px;
  border: solid 1px grey;
  border-radius: 8px;
  color: #717171;
  font-size: 13px;
  position: relative;
  .arrowIcon {
    position: absolute;
    right: 20px;
    color: black;
  }
  &:focus {
    outline: none;
    border: solid 1px black;
  }
  &:hover {
    cursor: pointer;
    outline: none;
    border: solid 1px #bbbbbb;
  }
`;

const CountryModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 10;
  .modalBox {
    width: 568px;
    height: 500px;
    position: relative;
    top: 10%;
    left: 30%;
    padding: 20px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 2px 5px 16px 0px #0b325e;
    z-index: 11;
    &:focus {
      outline: none;
    }

    .modalHeader {
      position: relative;
      padding-bottom: 20px;
      border-bottom: solid 1px #dddddd;
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
      span {
        position: absolute;
        right: 215px;
        top: 4px;
        font-size: 15px;
      }
    }

    ul {
      height: 400px;
      overflow: auto;
      li {
        height: 72px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dddddd;
        &:hover {
          cursor: pointer;
          background-color: #fff9f5;
        }
        .countryName {
          padding: 27px 0 12px 0;
          font-size: 16px;
        }
        .checkIcon {
          margin: 27px 15px 12px 0;
          font-size: 20px;
          color: #fe5131;
        }
        .noIcon {
          display: none;
        }
      }
    }
  }
`;
