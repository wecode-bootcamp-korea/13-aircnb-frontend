import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/ko";
import "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/js/all.js";
import {
  faStar,
  faMedal,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

import BookingBox from "./Component/BookingBox";
import Facilities from "./Component/Facilities";
import BedType from "./Component/BedType";
import HomeImgCon from "./Component/HomeImgCon";
import Reviews from "./Component/Reviews";
import HostInfo from "./Component/HostInfo";
import MapContent from "./Component/MapContent";
import Notices from "./Component/Notices";
import WishListCon from "./Component/WishListCon";
import ModalPortal from "./Component/ModalPortal";

import Rule from "./Component/Rule";

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzF9.-dpTDEqbZkYtHbWbna51heDOR2mJvgPAOI7J9QoJMX8";

const HomeDetails = (props) => {
  const [stay, setStay] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [wishListIsVisible, setWishListIsVisible] = useState(false);
  const [stayId, setStayId] = useState(stay && stay[0]?.id);

  // const API = `http://10.58.1.225:8000/stay/${props.match.params.id}`;
  // const API = "/data/detail_data.json";
  const API = `http://10.58.1.225:8000/stay/1`;

  // redux
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const userToken = signReducer.userToken;

  async function fetchData() {
    const res = await fetch(API);
    res.json().then(
      (res) => setStay(res.stay),
      () => console.log("확인")
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   setStayId(stay && stay[0]?.id);
  //   console.log(stayId);
  // }, [stayId]);

  const LikedOrUnLiked = (value) => {
    fetch(`http://10.58.1.75:8000/user/like`, {
      method: "POST",
      headers: {
        AUTHORIZATION: userToken,
      },
      body: JSON.stringify({
        stay_id: value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("포스트 확인메세지:", result);
      });
  };

  return (
    <StyledHomeDetails>
      <Container>
        <Header>
          <h2>{stay && stay[0]?.name}</h2>
          <Detail>
            <IconGroup>
              <span>
                {" "}
                <FontAwesomeIcon icon={faStar} className="colorIcon" />
                {stay[0]?.review.avr_score?.toFixed(2)}{" "}
                {`(${stay[0]?.review.reviews})`}
              </span>
              <span>&middot;</span>
              {stay[0]?.hostInfo?.superHost ? (
                <span>
                  <FontAwesomeIcon icon={faMedal} className="colorIcon" /> 슈퍼
                  호스트
                </span>
              ) : null}
              {stay[0]?.hostInfo.superHost ? <span>&middot;</span> : null}

              <span className="underline">{`${stay && stay[0]?.city}, ${
                stay && stay[0]?.address1
              } ${stay[0]?.address2}`}</span>
            </IconGroup>
            <RightIconGroup active={isLiked}>
              <div>
                <div className="IconCon">
                  <FontAwesomeIcon icon={faShareSquare} className="shareIcon" />
                </div>

                <span className="underline">공유하기</span>
              </div>
              <div>
                <div
                  className="IconCon"
                  onClick={() => (
                    setIsLiked(!isLiked), LikedOrUnLiked(stayId && stayId)
                  )}
                >
                  <i className="fas fa-heart fullHeart"></i>
                  <i className="far fa-heart hollowHeart"></i>
                </div>
                <span className="underline">저장</span>
              </div>
            </RightIconGroup>
          </Detail>
          <ModalPortal>
            <WishListCon
              active={wishListIsVisible}
              handleModal={setWishListIsVisible}
            />
          </ModalPortal>
        </Header>
        <HomeImgCon data={stay && stay[0]?.imgUrl} />
        <ContentCon>
          <HomeInfo>
            <div className="infoTitle">
              <h3>{`${stay && stay[0]?.hostInfo.name}님이 호스팅하는 ${
                stay && stay[0]?.subcategory
              } 전체`}</h3>
              <span>
                {`최대인원 ${stay[0]?.capacity}명 · 침실 ${stay[0]?.rooms}개 · 침대 ${stay[0]?.beds}개 · 욕실 ${stay[0]?.bathrooms}개`}
              </span>
            </div>
            <div className="rules">
              {stay &&
                stay[0]?.houseRules.map((rule, idx) => (
                  <Rule
                    key={idx}
                    icon={rule.icon}
                    title={rule.title}
                    desc={rule.desc}
                  />
                ))}
            </div>
            <TextDesc>{stay[0]?.desc}</TextDesc>
            <BedType data={stay && stay[0]?.bedType} />
            <Facilities data={stay && stay[0]?.facilities} />
          </HomeInfo>
          <Aside>
            <div className="boxCon">
              <BookingBox
                price={stay && stay[0]?.price}
                discountPrice={stay && stay[0]?.discountPrice}
                history={props.history}
                id={stay && stay[0]?.id}
              ></BookingBox>
            </div>
          </Aside>
        </ContentCon>
        <Reviews stayId={stay && stay[0]?.id} />
        <Location>
          <span>위치</span>
          <MapContent
            latitude={stay[0]?.latitude}
            longitude={stay[0]?.longitude}
          />
        </Location>
        <HostInfo data={stay && stay[0]?.hostInfo} />
        <Notices />
      </Container>
    </StyledHomeDetails>
  );
};

export default withRouter(HomeDetails);

const StyledHomeDetails = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  min-width: 750px;
  max-width: 1100px;
  margin: 80px 0 200px 0;
`;

const HeaderSpan = css`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const Header = styled.div`
  height: 86px;
  margin-top: 24px;
  color: black;
  position: relative;
  z-index: 3;

  h2 {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
  }
`;

const Detail = styled.div`
  ${HeaderSpan}
  display: flex;
  justify-content: space-between;
  line-height: 20px;
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  color: #717171;

  .colorIcon {
    color: #fe5131;
  }

  span {
    margin-right: 10px;
  }

  .underline {
    text-decoration: underline;
  }
`;

const RightIconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: #222222;
    margin: 0 4px;
  }

  .underline {
    text-decoration: underline;
  }

  .IconCon {
    padding-top: 2px;
  }

  .hollowHeart {
    visibility: ${(props) => (props.acitve ? "hidden" : "visible")};
  }

  .fullHeart {
    position: relative;
    border-color: #ff385c;
    color: #ff385c;
    left: 14px;
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
  }
`;

const ContentCon = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 750px;
  max-width: 1200px;
`;

const HomeInfo = styled.section`
  width: 58.333%;
  position: relative;

  .infoTitle {
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
    padding: 32px 0;
  }
`;

const TextDesc = styled.div`
  padding: 32px 0 48px 0;
  border-top: 1px solid #d3d3d3;
  font-size: 14px;
  line-height: 20px;
`;

const Aside = styled.div`
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
  }
`;

const Location = styled.div`
  border-top: 1px solid #d3d3d3;
  padding: 48px 0;
  color: #222222;
  font-size: 24px;
  font-weight: 600;
`;
