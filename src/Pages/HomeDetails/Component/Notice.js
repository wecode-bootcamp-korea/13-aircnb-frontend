import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faSmokingBan } from "@fortawesome/free-solid-svg-icons";
import { faBan, faPaw } from "@fortawesome/free-solid-svg-icons";
// import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Notice = ({ icon, desc }) => {
  console.log(icon);
  return (
    <StyledNotice>
      <FontAwesomeIcon icon={icon} className="icon" />
      <span>{desc}</span>
    </StyledNotice>
  );
};

export default Notice;

const StyledNotice = styled.div`
  display: flex;

  span {
    display: block;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .icon {
    margin-right: 10px;
  }
`;
