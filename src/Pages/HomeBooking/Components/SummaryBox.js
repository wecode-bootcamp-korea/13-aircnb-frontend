import React from "react";
import styled from "styled-components";
import { faStar, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { flexSet } from "../../../Styles/Theme";

const SummaryBox = ({ stayInfo, bookingDates, refundableDate }) => {
  const thumbnail = stayInfo?.imgUrl[0];
  const stayCity = stayInfo?.city;
  const stayAdress = stayInfo?.address1;
  const stayCategory = stayInfo?.subcategory;
  const homeName = stayInfo?.name;
  const beds = stayInfo?.beds.beds__sum;
  const bathrooms = stayInfo?.bathrooms;
  const score = Number(stayInfo?.review.avr_score).toFixed(2);
  const reviewCounts = stayInfo?.review.reviews;
  const price = Number(stayInfo?.price).toLocaleString();
  const totalPrice = (
    price * Number(bookingDates) +
    165000 +
    26400 +
    2640
  ).toLocaleString();
  const isSuperHost = stayInfo?.hostInfo.superHost;

  return (
    <SummaryArea>
      <StyledSummaryBox>
        <div className="homeSummary">
          <img alt="homeImg" src={thumbnail} />
          <div className="homeDescription">
            <div className="homeLocation">
              {stayCity} {stayAdress}의 {stayCategory}
            </div>
            <div className="homeTitle">{homeName}</div>
            <div className="NumOfFacility">
              침대 {beds}개 · 욕실 {bathrooms}개
            </div>
            <div className="Rating">
              <div className="guestRating">
                <FontAwesomeIcon className="starIcon" size="sm" icon={faStar} />
                <b>{score}</b> ({reviewCounts})
              </div>
              {isSuperHost && (
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
              ₩{price} x {bookingDates}박
            </ClaimDetail>
            <PricebyClaim>
              ₩{price * Number(bookingDates).toLocaleString()}
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
            <TotalPrice>₩{totalPrice}</TotalPrice>
          </ClaimWrapper>
        </div>
        <div className="refundSummary">
          <div className="refundTitle">
            {refundableDate} 3:00 PM까지 무료 취소 가능
          </div>
          <div className="refundDetail">
            그 후에는 {refundableDate} 3:00 PM 전에 예약을 취소하면 첫 1박 요금
            및 서비스 수수료를 제외한 요금의 50%가 환불됩니다.
          </div>
          <div className="seeDetail">자세히 알아보기</div>
        </div>
      </StyledSummaryBox>
    </SummaryArea>
  );
};

const SummaryArea = styled.div`
  width: 500px;
  height: 1500px;
  margin-left: 40px;
  float: left;
`;

const StyledSummaryBox = styled.div`
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
    ${flexSet("flex-start", "center")}
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

const ClaimWrapper = styled.div`
  ${flexSet("space-between", "center")}
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

export default SummaryBox;
