import React from "react";
import styled from "styled-components";

const RevisionBtn = ({ showModal }) => {
  return <Revision onClick={showModal}> 수정</Revision>;
};

const Revision = styled.div`
  font-weight: bold;
  font-size: 14px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export default RevisionBtn;
