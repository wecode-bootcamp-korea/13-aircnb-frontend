import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Review from "./Review";
import ModalPortal from "./ModalPortal";
import ReviewModal from "./ReviewModal";

const Reviews = ({ data }) => {
  const userReviewArr = data?.userReviews.slice(0, 6);
  const [isVisible, setIsVisible] = useState(false);
  // const [location, setLocation] = useState("reviews");

  return (
    <StyledReviews>
      <h3>
        <FontAwesomeIcon icon={faStar} className="starIcon" />
        {`${data?.avr_score.toFixed(2)}점 (후기 ${data?.reviews}개)`}
      </h3>
      <ReviewCon>
        {userReviewArr?.map((review, idx) => (
          <Review
            key={idx}
            userImg={review.userImg}
            userName={review.userName}
            date={review.date}
            detail={review.detail}
            // location={location}
          />
        ))}
      </ReviewCon>
      <ModalPortal>
        <ReviewModal
          reviewData={data}
          active={isVisible}
          event={setIsVisible}
        ></ReviewModal>
      </ModalPortal>
      <ReviewBtn
        onClick={() => setIsVisible(true)}
      >{`후기 ${data?.userReviews.length}개 모두보기`}</ReviewBtn>
    </StyledReviews>
  );
};

export default Reviews;

const StyledReviews = styled.div`
  /* border: 1px solid red; */
  padding: 48px 0;
  /* height: 560px; */
  border-top: 1px solid #d3d3d3;
  /* overflow: hidden; */

  h3 {
    color: #222222;
    font-size: 24px;
    font-weight: 600;

    .starIcon {
      color: #fe5131;
      margin-right: 10px;
    }
  }
`;

const ReviewCon = styled.div`
  display: flex;
  flex-flow: wrap row;
  margin-top: 30px;
`;

const ReviewBtn = styled.button`
  width: 175px;
  height: 48px;
  margin-top: 40px;
  background-color: white;
  border: 1px solid #222222;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: rgb(243, 243, 243);
  }

  &:focus {
    outline: none;
  }
`;
