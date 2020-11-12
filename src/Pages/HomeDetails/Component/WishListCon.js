import React, { createRef, useState } from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/js/all.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import WishList from "./WishList";

const WishListCon = ({ active, handleModal }) => {
  const LISTS = [
    {
      img:
        "https://a0.muscache.com/im/pictures/8c468f95-9cb3-431f-936d-d1866c03235f.jpg?im_w=720",
      title: "서귀포",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/ce558c6e-60b7-4c8f-890b-6202210784f9.jpg?im_w=720",
      title: "제주시",
    },
  ];

  return (
    <StyledWishList active={active}>
      <WishListModal>
        <Header>
          <div>
            <span className="closeBtn" onClick={() => handleModal(false)}>
              &times;
            </span>
          </div>

          <span>목록에 저장하기</span>
        </Header>
        <Lists>
          {LISTS.map((list, idx) => (
            <WishList key={idx} img={list.img} title={list.title} />
          ))}
        </Lists>
        <Bottom>
          <button onClick={() => handleModal(false)}>완료</button>
        </Bottom>
      </WishListModal>
    </StyledWishList>
  );
};

export default WishListCon;

const StyledWishList = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

const WishListModal = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* z-index: 6px; */
  width: 550px;
  max-width: 568px;
  border-radius: 12px;
  background-color: white;
  /* opacity: 1; */
  margin: 100px auto 120px; ;
`;

const Header = styled.div`
  /* background-color: pink; */
  /* position: relative; */
  /* z-index: 7; */
  height: 80px;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 1px solid rgb(235, 235, 235);
  text-align: center;

  div {
    position: relative;
    top: 22px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-top: 8px;

    &:hover {
      background-color: rgb(235, 235, 235);
    }

    .closeBtn {
      position: relative;
      font-size: 36px;
      font-weight: 400;
      margin: 0 auto;
    }
  }

  span {
    position: relative;
    bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Bottom = styled.div`
  height: 80px;
  width: 100%;
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;

  button {
    position: relative;
    right: -450px;
    top: 14px;
    width: 75px;
    height: 48px;
    background-color: black;
    color: white;
    font-size: 16px;
    border-radius: 6px;

    &:focus {
      outline: none;
    }
  }
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: pink; */
  padding: 12px 12px 60px 12px;
  width: 100%;
  height: 100%;
`;
