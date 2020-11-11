import React from "react";
import styled from "styled-components";
import Facility from "./Facility";

const Facilities = (props) => {
  return (
    <StyledFacilities>
      <h3>편의시설</h3>
      <div className="facilityCon">
        {props.data?.map((facility, idx) => (
          <Facility key={idx} imgSrc={facility.img} type={facility.amenity} />
        ))}
      </div>
    </StyledFacilities>
  );
};

export default Facilities;

const StyledFacilities = styled.div`
  border-top: 1px solid #d3d3d3;
  padding: 48px 0;
  width: 100%;

  h3 {
    display: block;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .facilityCon {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 200px;
  }
`;
