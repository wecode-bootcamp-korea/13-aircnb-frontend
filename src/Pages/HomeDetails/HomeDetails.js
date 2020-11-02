import React from "react";
import styled from "styled-components";

const HomeDetails = () => {
  return (
    <Details>
      <Container>
        <Header>
          <h2>편안한 느낌의 제주시 감성숙소</h2>
        </Header>
        <ImgCon></ImgCon>
        <ContentCon>
          <HomeInfo>
            <div className="infoTitle">
              <h3>시은님이 호스팅하는 아파트 전체</h3>
              <span>최대 인원 2명 . 침실 3개. 침대 2개. 욕실 1개</span>
            </div>
            <div className="iconInfo"></div>
            <div className="textDesc"></div>
            <div className="facility"></div>
            <div className="calender"></div>
          </HomeInfo>
          <Aside></Aside>
        </ContentCon>
        <Review></Review>
        <Location></Location>
      </Container>
    </Details>
  );
};

export default HomeDetails;

const Details = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  min-width: 750px;
  max-width: 1200px;
`;

const Header = styled.div`
  border: 1px solid red;
  color: black;
`;

const ImgCon = styled.div``;

const ContentCon = styled.div`
  border: 1px solid blue;
  display: flex;
  width: 100%;
`;

const HomeInfo = styled.section`
  border: 1px solid green;
  width: 58.333%;

  .infoTitle {
    border: 1px solid red;
  }

  .iconInfo {
  }
`;

const Aside = styled.div`
  border: 1px solid orange;
  width: 33.333%;
  margin-left: 8.333%;
  height: 450px;
`;

const Review = styled.div``;

const Location = styled.div``;
