import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Review from "./Review";

const LIMIT = 5;
const ReviewModal = ({
  reviewData,
  active,
  event,
  stayId,
  avrStar,
  reviewNum,
}) => {
  const [location, setLocation] = useState("modal");
  const [reviews, setReviews] = useState([]);
  const [offset, setOffset] = useState(0);
  const [fetching, setFetching] = useState(false);

  const API = `http://10.58.1.75:8000/review/list`;

  const setDataFormat = (dataValue) => {
    const year = dataValue.split("-")[0];
    const month = dataValue.split("-")[1];
    return `${year}년 ${month}월`;
  };

  async function fetchData() {
    const res = await fetch(`${API}?offset=0&limit=6&stay_id=${stayId}`);
    res
      .json()
      .then((res) => setReviews(res.review_list), console.log("통신확인"));
  }

  useEffect(() => {
    fetchData();
    console.log(reviews);
  }, []);

  useEffect(() => {
    // scroll event listener 등록
    document
      .querySelector("#reviewContent")
      .addEventListener("scroll", handleScroll);
    console.log(fetching, offset);
    return () => {
      // scroll event listener 해제
      // document
      //   .querySelector("#reviewContent")
      //   .removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const clientHeight = document.querySelector("#reviewContent")?.clientHeight;
    const scrollHeight = document.querySelector("#reviewContent")?.scrollHeight;
    const scrollTop = document.querySelector("#reviewContent")?.scrollTop;

    if (scrollTop + clientHeight >= scrollHeight) {
      setOffset(Number(LIMIT) + Number(offset));
      fetchMoreReviews();
    }
  };

  async function fetchMoreReviews() {
    setFetching(true);
    const res = await fetch(
      `http://10.58.1.75:8000/review/list?offset=${offset}&limit=${LIMIT}&stay_id=${1}`
    );
    res.json().then((res) => {
      setReviews([...reviews, ...res.review_list]);
      setFetching(false);
    });
  }

  // console.log(
  //   "clientHeight >>",
  //   document.querySelector("#reviewContent")?.clientHeight,
  //   "scrollHeight >>",
  //   document.querySelector("#reviewContent")?.scrollHeight,
  //   "scrollTop >>",
  //   document.querySelector("#reviewContent")?.scrollTop,
  //   "reviews>>",
  //   reviews
  // );
  return (
    <StyledReviewModal active={active}>
      <AllReviews active={active}>
        <Header>
          <button onClick={() => event(false)}>
            <span>&times;</span>
          </button>
        </Header>
        <Content>
          <RightAside>
            <span>
              <FontAwesomeIcon icon={faStar} className="colorIcon" />
              {"  "}
              {`${avrStar?.toFixed(2)}점 (후기 ${reviewNum}개)`}
            </span>
          </RightAside>
          <ReviewCon id="reviewContent">
            {reviews &&
              reviews.map((review, idx) => (
                <Review
                  key={idx}
                  userImg={review.user_img}
                  userName={review.user_name}
                  date={review.review_date}
                  detail={review.review_body}
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
  position: "relative";
  top: 70px;
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
      background-color: rgb(247, 247, 247);
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
  height: 420px;
  max-height: 600px;
  padding: 25px;
  overflow: auto;
`;
