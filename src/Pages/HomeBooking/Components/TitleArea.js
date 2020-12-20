import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const TitleArea = () => {
  return (
    <Wrapper>
      <Link>
        <FontAwesomeIcon
          className="toPrevPage"
          size="sm"
          icon={faChevronLeft}
        />
      </Link>
      <Title>예약 요청하기</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 1100px;
  margin: 0 auto;
  a {
    color: black;
    text-decoration: none;
    .toPrevPage {
      margin: 24px 24px 24px 5px;
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
`;

const Link = ({ className, children }) => (
  <a href="/homedetails" className={className}>
    {children}
  </a>
);

const Title = styled.div`
  padding-bottom: 32px;
  font-size: 30px;
  font-weight: bold;
`;

export default TitleArea;
