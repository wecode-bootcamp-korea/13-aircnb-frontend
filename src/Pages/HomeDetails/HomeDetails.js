import React from "react";
import styled, { css } from "styled-components";

import Rule from "./Component/Rule";
import RULES_DATA from "./Data/RULES_DATA";

const HomeDetails = () => {
  return (
    <Details>
      <Container>
        <Header>
          <h2>편안한 느낌의 제주시 감성숙소</h2>
          <div className="detail">
            <span>Hallim-eub, Cheju, 제주도, 한국</span>
            <div className="icons">
              <Icon>
                <img
                  alt="shareIcon"
                  src="https://www.flaticon.com/svg/static/icons/svg/2089/2089736.svg"
                />
                <span>공유하기</span>
              </Icon>
              <Icon>
                <img
                  alt="saveIcon"
                  src="https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg"
                />
                <span>저장</span>
              </Icon>
            </div>
          </div>
        </Header>
        <ImgCon>
          <img
            alt="home"
            className="mainImg"
            src="https://a0.muscache.com/im/pictures/2f3f3e94-976b-4eba-86da-5a2222f76783.jpg?aki_policy=xx_large"
          />
          <div className="imageGroup">
            <img
              className="detailImg"
              alt="home"
              src="https://a0.muscache.com/im/pictures/91351c61-1fab-4709-83fc-aff26e08d327.jpg?aki_policy=large"
            />
            <img
              className="detailImg"
              alt="home"
              src="https://a0.muscache.com/im/pictures/9b2cd826-e58b-441c-8040-470e76eba528.jpg?aki_policy=large"
            />
          </div>
          <div className="imageGroup">
            <img
              className="detailImg"
              alt="home"
              src="https://a0.muscache.com/im/pictures/d8e199bf-a26f-4f87-8ccd-f1f1d0b300eb.jpg?aki_policy=large"
            />
            <img
              className="detailImg"
              alt="home"
              src="https://a0.muscache.com/im/pictures/be6e7eb5-efa0-48ca-b19e-3491146f5d52.jpg?aki_policy=large"
            />
          </div>
        </ImgCon>
        <ContentCon>
          <HomeInfo>
            <div className="infoTitle">
              <h3>시은님이 호스팅하는 아파트 전체</h3>
              <span>최대 인원 2명 . 침실 3개. 침대 2개. 욕실 1개</span>
            </div>
            <div className="rules">
              {RULES_DATA.map((rule) => (
                <Rule icon={rule.icon} title={rule.title} desc={rule.desc} />
              ))}
            </div>
            <div className="textDesc">
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
              </p>
              <br></br>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
              </p>
            </div>
            <Bed>
              <span>침대/침구 유형</span>
              <div className="article">
                <img />
                <span>1번 침실</span>
                <span>더블 침대 1개</span>
              </div>
            </Bed>
            <Facilities>
              <h3>편의시설</h3>
              <div className="facilityCon">
                <div></div>
                <div></div>
              </div>
            </Facilities>
            <Calender>
              <h3>Halilim-eub, Cheju에서 4박</h3>
              <span>2020년 12월 7일 - 2020년 12월 11일</span>
            </Calender>
          </HomeInfo>
          <Aside>
            <div className="boxCon">
              <div className="bookingBox">
                <div className="infoCon">
                  <div className="pricePerDay">
                    <span>136,192</span>
                    <span> /박</span>
                  </div>
                  <div className="infoBox">
                    <div className="line">
                      <div>
                        <span>체크인</span>
                        <span>2020.11.18</span>
                      </div>
                      <div>
                        <span>체크아웃</span>
                        <span>2020.11.21</span>
                      </div>
                    </div>
                    <div className="line">
                      <span>체크아웃</span>
                      <span>2020.11.21</span>
                    </div>
                  </div>
                  <button>예약하기</button>
                </div>

                <span className="notice">
                  예약 확정 전에는 요금이 청구되지 않습니다
                </span>
                <PriceBox>
                  <Price>
                    <span>₩120,000 X 4박</span>
                    <span>₩480,000</span>
                  </Price>
                  <Price>
                    <span>서비스 수수료</span>
                    <span>₩67,765</span>
                  </Price>
                  <Price>
                    <span>숙박세와 수수료</span>
                    <span>₩6,776</span>
                  </Price>
                </PriceBox>
                <TotalPrice>
                  <span>총 합계</span>
                  <span>₩450,560</span>
                </TotalPrice>
              </div>
            </div>
          </Aside>
        </ContentCon>
        <Review>
          <span>4.80점(후기 5개)</span>
        </Review>
        <Location>
          <span>위치</span>
        </Location>
        <HostInfo>
          <div className="top">
            <img
              alt="hostImg"
              src="https://a0.muscache.com/im/pictures/user/cbaf3116-e588-43bc-80e8-5c2268dfc618.jpg?im_w=240"
            />
            <div className="info">
              <span>호스트: Dusan님</span>
              <br></br>
              <span>회원 가입일: 2018년 8월</span>
            </div>
          </div>
          <div className="bottom"></div>
        </HostInfo>
        <Notices>
          <span>알아두어야 할 사항</span>
          <div className="noticeCon">
            <Notice></Notice>
            <Notice></Notice>
            <Notice></Notice>
          </div>
        </Notices>
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
  /* border: 2px solid black; */
  min-width: 750px;
  max-width: 1100px;
  margin: 80px auto;
`;

const HeaderSpan = css`
  /* margin-top: 8px; */
  font-size: 14px;
  font-weight: 500;
  color: #717171;
  line-height: 20px;
`;

const Header = styled.div`
  /* border: 1px solid red; */
  height: 86px;
  margin-top: 24px;
  color: black;

  h2 {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
  }

  span {
    ${HeaderSpan}
    margin-top: 8px;
  }

  .detail {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;

    .icons {
      display: flex;
    }
  }
`;

const Icon = styled.div`
  margin-left: 10px;
  padding-top: 8px;

  span {
    ${HeaderSpan}
    margin-left: 10px;
    text-decoration: underline;
  }

  img {
    height: 16px;
  }
`;

const ImgCon = styled.div`
  display: flex;
  border-radius: 12px;
  overflow: hidden;

  .mainImg {
    width: 50%;
    height: 314px;
  }

  .imageGroup {
    display: flex;
    flex-direction: column;
    width: 25%;

    .detailImg {
      height: 157px;
      padding-left: 8px;

      &:first-child {
        padding-bottom: 8px;
      }
    }
  }
`;

const ContentCon = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
`;

const HomeInfo = styled.section`
  /* border: 1px solid green; */
  width: 58.333%;
  position: relative;

  .infoTitle {
    /* border: 1px solid red; */
    padding: 48px 0 24px 0;

    h3 {
      font-size: 22px;
      font-weight: 700;
      line-height: 26px;
      color: #222222;
    }

    span {
      font-size: 16px;
      line-height: 20px;
      color: #222222;
    }
  }

  .rules {
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    padding: 32px 0;
  }

  .textDesc {
    padding: 32px 0 48px 0;
    border-bottom: 1px solid gray;
  }
`;

const Calender = styled.div`
  height: 550px;
  padding: 48px 0;

  h3 {
    font-size: 22px;
    line-height: 26px;
  }

  span {
    font-size: 14px;
    line-height: 18px;
    color: #717171;
  }
`;

const Bed = styled.div`
  width: 100%;
  height: 200px;
  padding: 48px 0;

  span {
    color: black;
    font-size: 22px;
    line-height: 26px;
  }

  .article {
    width: 200px;
    height: 143px;
    padding: 24px;
    border: 1px solid gray;
    border-radius: 12px;

    span {
      display: block;

      &:first-child {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
      }

      &:last-child {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

const Facilities = styled.div`
  /* border: 1px solid red; */
  padding: 48px 0;
  /* display: flex; */
  width: 100%;

  h3 {
    display: block;
    width: 100%;
    font-size: 24px;
  }

  .facilityCon {
    /* border: 1px solid red; */
    display: flex;
    width: 100%;

    div {
      /* border: 1px solid pink; */
      width: 50%;
      height: 200px;
    }
  }
`;

const Aside = styled.div`
  /* border: 1px solid orange; */
  width: 33.333%;
  margin-left: 8.333%;

  .boxCon {
    position: sticky;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    padding: 44px 0 48px 0;
    color: #222222;

    .bookingBox {
      background-color: white;
      border: 1px solid #d3d3d3;
      width: 100%;
      padding: 24px;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

      .infoCon {
        /* height: 226px; */
        /* border: 1px solid pink; */

        .pricePerDay {
          height: 50px;

          span:first-child {
            font-size: 22px;
            line-height: 26px;
          }
        }

        .infoBox {
          border: 1px solid gray;
          width: 100%;
          height: 112px;
          border-radius: 12px;

          .line {
            display: flex;
            height: 50%;

            &:first-child {
              border-bottom: 1px solid gray;
            }

            div {
              width: 50%;
              padding: 10px 0 0 10px;

              &:last-child {
                border-left: 1px solid gray;
              }

              span {
                display: block;

                &:first-child {
                  font-size: 10px;
                  font-weight: 700;
                  line-height: 12px;
                }

                &:last-child {
                  font-size: 14px;
                  line-height: 18px;
                }
              }
            }
          }
        }

        button {
          width: 100%;
          height: 48px;
          border: none;
          border-radius: 12px;
          margin-top: 20px;
          background-color: #ea225c;
          color: white;
          font-size: 16px;
          font-weight: 600;
        }
      }

      .notice {
        display: block;
        margin: 15px auto 30px;
        text-align: center;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;

const PriceBox = styled.ul`
  margin-top: 15px;
  padding: 0 4px 6px;
  border-bottom: 1px solid #d3d3d3;
`;

const Price = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  font-size: 16px;
  line-height: 20px;

  span:first-child {
    text-decoration: underline;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 4px 0 4px;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
`;

const Review = styled.div`
  margin: 20px 0;
  height: 250px;
  color: #222222;
  font-size: 24px;
  /* line-height: 20px; */
`;

const Location = styled.div`
  border: 1px solid green;
  height: 200px;
  margin: 48px auto;
  color: #222222;
  font-size: 24px;
`;

const HostInfo = styled.div`
  .top {
    display: flex;

    img {
      width: 56px;
      border-radius: 50px;
    }

    .info {
      border: 1px solid orange;
      margin-left: 10px;

      span:first-child {
        color: #222222;
        font-size: 24px;
      }

      span:last-child {
        color: #717171;
        font-size: 14px;
        line-height: 18px;
        padding-top: 8px;
      }
    }
  }

  .bottom {
    height: 150px;
  }
`;

const Notices = styled.div`
  border: 1px solid pink;
  color: #222222;
  font-size: 24px;
  font-weight: 600;
  padding: 48px 0;

  span {
    display: block;
    margin-bottom: 20px;
  }

  .noticeCon {
    display: flex;
  }
`;

const Notice = styled.ul`
  width: 33.3333%;
  height: 150px;
  border: 1px solid red;
`;
