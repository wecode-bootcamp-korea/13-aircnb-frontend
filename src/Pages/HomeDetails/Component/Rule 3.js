import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Rule = (props) => {
  return (
    <SingleRule>
      <img alt="icon" src={props.icon} />
      <div>
        <span>{props.title}</span>
        <br></br>
        <span>{props.desc}</span>
      </div>
    </SingleRule>
  );
};

export default Rule;

const SingleRule = styled.div`
  height: 44px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 20px;
  display: flex;

  img {
    /* border: 1px solid red; */
    width: 24px;
    height: 24px;
    margin: 6px 10px 14px 0;
  }

  span:first-child {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #222222;
  }

  span:last-child {
    font-size: 14px;
    line-height: 20px;
    color: #717171;
  }
`;
