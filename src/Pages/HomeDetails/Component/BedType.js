import React from "react";
import styled from "styled-components";
import Bed from "./Bed";

const BedType = ({ data }) => {
  return (
    <StyledBedType>
      <h3>침대/침구 유형</h3>
      <BedCon>
        {data?.map((bed) => (
          <Bed icon={bed.icon} rooms={bed.rooms} beds={bed.beds} />
        ))}
      </BedCon>
    </StyledBedType>
  );
};

export default BedType;

const StyledBedType = styled.div`
  padding: 48px 0;
  border-top: 1px solid #d3d3d3;

  h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 20px;
  }
`;

const BedCon = styled.div`
  display: flex;
`;
