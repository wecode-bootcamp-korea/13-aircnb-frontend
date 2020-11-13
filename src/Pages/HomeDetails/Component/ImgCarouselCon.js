import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickSlider.scss";

const ImgCarouselCon = ({ active, setIsVisible, data }) => {
  const articleSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledImgCarouselCon active={active}>
      <div className="carouselCon">
        <Slider {...articleSettings}>
          {data?.map((img, idx) => (
            <img key={idx} alt="stayImg" src={img} className="slickImg" />
          ))}
        </Slider>
      </div>
      <CloseBtn onClick={() => setIsVisible(false)}>닫기</CloseBtn>
    </StyledImgCarouselCon>
  );
};

export default ImgCarouselCon;

const StyledImgCarouselCon = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 1);
  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  .carouselCon {
    position: relative;
    background-color: white;
    width: 700px;
    height: 500px;
    margin: 100px auto;
  }
`;

const CloseBtn = styled.button`
  position: relative;
  top: -650px;
  left: 100px;
  width: 50px;
  height: 35px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 3px;
  text-decoration: underline;
  background-color: rgb(247, 247, 247);

  &:hover {
    background-color: lightgray;
  }

  &:focus {
    outline: none;
  }
`;
