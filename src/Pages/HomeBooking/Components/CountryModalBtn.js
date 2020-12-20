import React from "react";
import styled from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CountryModalBtn = ({ country, show }) => {
  return (
    <CountryButton onClick={show}>
      {country}
      <FontAwesomeIcon className="arrowIcon" icon={faChevronDown} />
    </CountryButton>
  );
};

const CountryButton = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 10px;
  padding: 20px 40px 16px 16px;
  border: solid 1px grey;
  border-radius: 8px;
  color: #717171;
  font-size: 13px;
  position: relative;
  .arrowIcon {
    position: absolute;
    right: 20px;
    color: black;
  }
  &:focus {
    outline: none;
    border: solid 1px black;
  }
  &:hover {
    cursor: pointer;
    outline: none;
    border: solid 1px #bbbbbb;
  }
`;

export default CountryModalBtn;
