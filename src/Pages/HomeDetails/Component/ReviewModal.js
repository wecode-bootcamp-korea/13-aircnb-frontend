import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Review from "./Review";

const ReviewModal = ({ reviewData, active, event }) => {
  const [location, setLocation] = useState("modal");

  const setDataFormat = (dataValue) => {
    const year = dataValue.split("-")[0];
    const month = dataValue.split("-")[1];
    return `${year}년 ${month}월`;
  };

  return (
    <StyledReviewModal active={active}>
      <AllReviews>
        <Header>
          <button onClick={() => event(false)}>
            <span>&times;</span>
          </button>
        </Header>
        <Content>
          <RightAside>
            <span>
              <FontAwesomeIcon icon={faStar} className="colorIcon" />
              {"  "}4.55 (후기 33개)
            </span>
          </RightAside>
          <ReviewCon>
            {reviewData?.userReviews?.map((review, idx) => (
              <Review
                key={idx}
                userImg={review.userImg}
                userName={review.userName}
                date={review.date}
                detail={review.detail}
                location={location}
              />
            ))}
          </ReviewCon>
        </Content>
      </AllReviews>
    </StyledReviewModal>
  );
};

export default ReviewModal;

const StyledReviewModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 70px auto 100px 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

const AllReviews = styled.div`
  position: relative;
  top: 15px;
  background-color: white;
  width: 970px;
  max-width: 970px;
  max-height: 100%;
  border-radius: 8px;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid gray;

  button {
    position: absolute;
    background-color: white;
    top: 20px;
    left: 30px;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    font-weight: 500;

    &:hover {
      background-color: gray;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
`;

const RightAside = styled.div`
  width: 320px;

  span {
    display: inline-block;
    margin: 15px 0 0 20px;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;

    .colorIcon {
      color: #fe5131;
    }
  }
`;

const ReviewCon = styled.div`
  width: 650px;
  height: 470px;
  max-height: 600px;
  padding: 25px;
  overflow: auto;
`;
