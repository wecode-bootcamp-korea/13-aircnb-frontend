import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import ImgCarouselCon from "./ImgCarouselCon";
import ModalPortal from "./ModalPortal";

const HomeImgCon = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledHomeImgCon>
      <img alt="home" className="mainImg" src={data && data[0]} />
      <div className="imageGroup">
        <img className="detailImg" alt="home" src={data && data[1]} />
        <img className="detailImg" alt="home" src={data && data[2]} />
      </div>
      <div className="imageGroup">
        <img className="detailImg" alt="home" src={data && data[3]} />
        <img className="detailImg" alt="home" src={data && data[4]} />
      </div>
      <ImgBtn onClick={() => setIsVisible(true)}>
        <FontAwesomeIcon icon={faImages} />
        <span>사진 모두 보기</span>
      </ImgBtn>
      <ModalPortal>
        <ImgCarouselCon
          active={isVisible}
          setIsVisible={setIsVisible}
          data={data}
        />
      </ModalPortal>
    </StyledHomeImgCon>
  );
};

export default HomeImgCon;

const StyledHomeImgCon = styled.div`
  display: flex;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  z-index: 2;

  .mainImg {
    width: 50%;
    height: 340px;
  }

  .imageGroup {
    display: flex;
    flex-direction: column;
    width: 25%;

    .detailImg {
      height: 170px;
      padding-left: 8px;

      &:first-child {
        padding-bottom: 8px;
      }
    }
  }
`;

const ImgBtn = styled.button`
  background-color: white;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 130px;
  height: 38px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  span {
    margin-left: 4px;
  }
`;
