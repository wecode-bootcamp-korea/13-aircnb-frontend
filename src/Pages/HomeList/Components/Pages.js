import React from "react";
import styled from "styled-components";

const Pages = (props) => {
  const { fetchHome } = props;
  return (
    <WrapperP>
      <div className="pageBtn">
        <button id="0" onClick={fetchHome}>
          1
        </button>
        <button id="1" onClick={fetchHome}>
          2
        </button>
        <button id="2" onClick={fetchHome}>
          3
        </button>
        <button id="3" onClick={fetchHome}>
          4
        </button>
        <button id="4" onClick={fetchHome}>
          5
        </button>
      </div>
    </WrapperP>
  );
};

export default Pages;

const WrapperP = styled.div`
  z-index: 30;
  width: 840px;
  height: auto;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .pageBtn {
    width: 250px;
    display: flex;
    justify-content: space-between;
    button {
      font-weight: 400;
      font-size: 18px;
      color: rgb(34, 34, 34);
      outline: none;
      border: none;
      width: 35px;
      height: 35px;
      background-color: white;
      &:hover {
        border-bottom: 2px solid black;
      }
      &:focus {
        border-radius: 50%;
        background-color: rgb(34, 34, 34);
        color: white;
      }
    }
  }
`;
