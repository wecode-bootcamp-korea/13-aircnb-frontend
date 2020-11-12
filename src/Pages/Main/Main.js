import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// LINK Mockdata API
import { MAIN_PAGE_API } from "../../config";

// LINK styles
import {
  MainContainer,
  Topper,
  MainLocationCategory,
  MainHomeType,
  Footer,
} from "./Main.Styled";
import mainImg from "../../Images/Main/main.jpg";

const Main = () => {
  const [windowSize, setWindowSize] = useState(null);
  const [mainLocationCategories, setMainLocationCategories] = useState(null);
  const [mainHomeType, setMainHomeType] = useState(null);
  const [footerContent, setFooterContent] = useState(null);

  const getMainPageDate = async () => {
    try {
      const response = await axios.get(MAIN_PAGE_API);
      const validation = response && response.status === 200;
      validation && new Error("cannot fetch the data");
      console.log(response);
      const {
        footerContent,
        mainHomeType,
        mainLocationCategories,
      } = await response.data;
      setFooterContent(footerContent);
      setMainHomeType(mainHomeType);
      setMainLocationCategories(mainLocationCategories);
    } catch (error) {
      console.log("!!error fetch data!!");
    }
  };

  useEffect(() => {
    getWindowSize();
    getMainPageDate();
  }, []);

  const getWindowSize = () => {
    const width = document.body.clientWidth;
    setWindowSize(width);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, [windowSize]);

  return (
    <MainContainer>
      <Topper>
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
          {mainLocationCategories?.map((category, idx) => {
            const mainLocationCategoriesTemplate = (content, num) => {
              return (
                <li key={num}>
                  <div>
                    <figure>
                      <img src={content.img} alt="" />
                    </figure>
                    <div>
                      <span>{content.name}</span>
                      <span>{content.desc}</span>
                    </div>
                  </div>
                </li>
              );
            };
            return windowSize > 1350
              ? mainLocationCategoriesTemplate(category, idx)
              : idx < 6 && mainLocationCategoriesTemplate(category, idx);
          })}
        </ul>
      </MainLocationCategory>
      <MainHomeType>
        <div>
          <span>어디에서나, 여행은 살아보는 거야!</span>
        </div>
        <div>
          {mainHomeType?.map((home, idx) => {
            const mainHomeTypeTemplate = (content, id) => {
              return (
                <div key={id}>
                  <figure>
                    <img src={content.img} alt="" />
                  </figure>
                  <div>
                    <span>{content.name}</span>
                  </div>
                </div>
              );
            };

            return windowSize > 1550
              ? mainHomeTypeTemplate(home, idx)
              : idx < 3 && mainHomeTypeTemplate(home, idx);
          })}
        </div>
      </MainHomeType>
      <Footer>
        <div>
          {footerContent?.map((content, idx) => {
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
