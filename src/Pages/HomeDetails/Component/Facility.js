import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Facility = (props) => {
  return (
    <StyledFacility>
      <img alt="facility" src={props.imgSrc} />
      <span>{props.type}</span>
    </StyledFacility>
  );
};

export default Facility;

const StyledFacility = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 16px;
  width: 50%;

  img {
    width: 24px;
    height: 24px;
    margin-right: 15px;
  }
`;
