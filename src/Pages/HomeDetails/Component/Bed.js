import React from "react";
import styled from "styled-components";

const Bed = ({ icon, rooms, beds }) => {
  return (
    <StyledBed>
      <img alt="bed" src={icon} />
      <span>{rooms}</span>
      <span>{`침대 ${beds}개`}</span>
    </StyledBed>
  );
};

export default Bed;

const StyledBed = styled.div`
  width: 200px;
  height: 143px;
  padding: 24px;
  margin-right: 20px;
  border: 1px solid gray;
  border-radius: 12px;

  img {
    width: 24px;
    margin-bottom: 20px;
  }

  span {
    display: block;
  }

  span:nth-child(2) {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 10px;
  }

  span:last-child {
    font-size: 14px;
    line-height: 20px;
  }
`;
