import React from "react";
import styled from "styled-components";

const Review = ({ userImg, userName, date, detail, location }) => {
  // const [location, setLocation] = useState("modal");
  const setDataFormat = (dataValue) => {
    const year = dataValue.split("-")[0];
    const month = dataValue.split("-")[1];
    return `${year}년 ${month}월`;
  };

  return (
    <StyledReview location={location}>
      <div className="user">
        <img alt="userImg" src={userImg} />
        <div className="userInfo">
          <span>{userName}</span>
          <br></br>
          <span>{setDataFormat("2020-33-33")}</span>
        </div>
      </div>
      <p>{detail}</p>
    </StyledReview>
  );
};

export default Review;

const StyledReview = styled.div`
  width: ${(props) => (props.location === "modal" ? "100%" : "50%")};
  padding-right: 70px;
  margin-bottom: 30px;

  .user {
    display: flex;
    margin-bottom: 15px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    .userInfo {
      margin-left: 20px;
      padding-top: 8px;

      span:first-child {
        color: #222222;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
      }

      span:last-child {
        color: #717171;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  p {
    line-height: 20px;
  }
`;
