import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Review from "./Review";
import ModalPortal from "./ModalPortal";
import ReviewModal from "./ReviewModal";

const Reviews = ({ stayId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [info, setInfo] = useState({});
  const userReviewArr = reviews.slice(0, 6);
  // const [location, setLocation] = useState("reviews");

  const API = `http://10.58.1.75:8000/review/list`;

  async function fetchData() {
    const res = await fetch(`${API}?offset=0&limit=6&stay_id=${stayId}`);
    res.json().then((res) => {
      setReviews(res.review_list);
      setInfo(res.overall);
    });
  }

  useEffect(() => {
    fetchData();
    console.log(info && info.overall_star);
  }, []);

  console.log(info && info.overall_star);
  return (
    <StyledReviews>
      <h3>
        <FontAwesomeIcon icon={faStar} className="starIcon" />
        {`${info?.overall_star?.toFixed(2)}점 (후기 ${info?.review_count}개)`}
      </h3>
      <ReviewCon>
        {reviews &&
          userReviewArr?.map((review, idx) => (
            <Review
              key={idx}
              userImg={review.user_img}
              userName={review.user_name}
              date={review.review_date}
              detail={review.review_body}
              // location={location}
            />
          ))}
      </ReviewCon>
      <ModalPortal>
        <ReviewModal
          stayId={stayId}
          // reviewData={data}
          active={isVisible}
          event={setIsVisible}
        ></ReviewModal>
      </ModalPortal>
      <ReviewBtn
        onClick={() => setIsVisible(true)}
      >{`후기 ${info?.review_count}개 모두보기`}</ReviewBtn>
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
