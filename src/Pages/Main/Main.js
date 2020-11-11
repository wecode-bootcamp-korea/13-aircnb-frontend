import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LINK component

// LINK styles
import {
  MainContainer,
  Topper,
  MainLocationCategory,
  MainHomeType,
  Footer,
} from "./Main.Styled";
import mainImg from "../../Images/Main/main.jpg";
import first_icon from "../../Images/Main/desert.svg";
import second_icon from "../../Images/Main/farm.svg";
import third_icon from "../../Images/Main/island.svg";
import forth_icon from "../../Images/Main/landscape.svg";
import fifth_icon from "../../Images/Main/village.svg";
import sixth_icon from "../../Images/Main/winter.svg";
import seventh_icon from "../../Images/Main/sealife.svg";
import eighth_icon from "../../Images/Main/pyramids.svg";
import first_house from "../../Images/Main/house1.jpg";
import second_house from "../../Images/Main/house2.jpg";
import third_house from "../../Images/Main/house3.jpg";
import forth_house from "../../Images/Main/house4.jpg";

const Main = () => {
  const [isWidthBiggerThanHeight, setIsWidthBiggerThanHeight] = useState(null);

  const mainLocationCategories = [
    {
      name: "부산",
      desc: "차로 5시간 거리",
      img: first_icon,
    },
    {
      name: "속초시",
      desc: "차로 2.5시간 거리",
      img: second_icon,
    },
    {
      name: "완주군",
      desc: "차로 2.5시간 거리",
      img: third_icon,
    },
    {
      name: "양양군",
      desc: "차로 2.5시간 거리",
      img: forth_icon,
    },
    {
      name: "전주시",
      desc: "차로 3시간 거리",
      img: fifth_icon,
    },
    {
      name: "강릉시",
      desc: "차로 3시간 거리",
      img: sixth_icon,
    },
    {
      name: "경주시",
      desc: "차로 4시간 거리",
      img: seventh_icon,
    },
    {
      name: "고성군",
      desc: "차로 2.5시간 거리",
      img: eighth_icon,
    },
  ];

  const mainHomeType = [
    { name: "집전체", img: first_house },
    { name: "통나무집 및 전원주택", img: second_house },
    { name: "독특한 공간", img: third_house },
    { name: "반려동물 환영", img: forth_house },
  ];

  const footerContent = [
    {
      name: "소개",
      items: [
        "에어비앤비 이용 방법",
        "뉴스룸",
        "에어비앤비 플러스",
        "에어비앤비 Luxe",
        "호텔투나잇",
        "에어비앤비 비즈니스 프로그램",
        "올림픽",
        "채용정보",
      ],
    },
    {
      name: "커뮤니티",
      items: [
        "다양성 및 소속감",
        "접근성",
        "에어비앤비 어소시에이트",
        "구호 인력을 위한 숙소",
        "친구 초대하기",
      ],
    },
    {
      name: "호스팅하기",
      items: [
        "숙소 호스팅",
        "온라인 체험 호스팅하기",
        "체험 호스팅하기",
        "책임감 있는 호스팅",
        "호스트 추천",
        "Open Homes",
        "자료 센터",
        "커뮤니티 센터",
      ],
    },
    {
      name: "에어비앤비 지원",
      items: [
        "에어비앤비의 코로나 19 대응 방안",
        "도움말 센터",
        "예약 취소 옵션",
        "에어비앤비 이웃 민원 지원",
        "신뢰와 안전",
      ],
    },
  ];

  return (
    <MainContainer>
      <Topper landscape={isWidthBiggerThanHeight}>
        <div>
          <figure>
            <img src={mainImg} alt="mainImg" />
          </figure>
        </div>
        <div>
          <span>
            이제, 여행은 <br /> 가까운 곳에서
          </span>
          <button>
            <div>근처의 숙소 둘러보기</div>
          </button>
        </div>
      </Topper>
      <MainLocationCategory>
        <ul>
          {mainLocationCategories.map((category, idx) => {
            return (
              <li key={idx}>
                <div>
                  <figure>
                    <img src={category.img} alt="" />
                  </figure>
                  <div>
                    <span>{category.name}</span>
                    <span>{category.desc}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </MainLocationCategory>
      <MainHomeType>
        <div>
          <span>어디에서나, 여행은 살아보는 거야!</span>
        </div>
        <div>
          {mainHomeType.map((home, idx) => {
            return (
              <div key={idx}>
                <figure>
                  <img src={home.img} alt="" />
                </figure>
                <div>
                  <span>{home.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </MainHomeType>
      <Footer>
        <div>
          {footerContent.map((content, idx) => {
            return (
              <div>
                <div key={idx}>{content.name}</div>
                <ul>
                  {content.items.map((item, id) => {
                    return <li key={id}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <div></div>
          <div>2020 Aircnb Project</div>
          <ul>
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>사이트맵</li>
            <li>한국의 변경된 환불 정책</li>
          </ul>
        </div>
      </Footer>
    </MainContainer>
  );
};

export default Main;
