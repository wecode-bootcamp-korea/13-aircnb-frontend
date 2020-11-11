import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const HostInfo = ({ data }) => {
  const setDataFormat = (dataValue) => {
    const year = dataValue?.split("-")[0];
    const month = dataValue?.split("-")[1];
    return `${year}년 ${month}월`;
  };

  return (
    <StyledHostInfo>
      <div className="top">
        <img alt="hostImg" src={data?.img} />
        <div className="info">
          <span>{`호스트: ${data?.name}님`}</span>
          <br></br>
          <span>{`회원 가입일: ${setDataFormat(data?.signUpDate)}`}</span>
        </div>
      </div>
      <div className="bottom">
        <div className="iconInfo">
          <span>
            <FontAwesomeIcon icon={faStar} className="colorIcon" /> 후기 24개
          </span>
          <span>
            {" "}
            {data?.verified ? (
              <span>
                <FontAwesomeIcon icon={faMedal} className="colorIcon" /> 본인
                인증 완료
              </span>
            ) : null}
          </span>
        </div>
        <p>{data?.introduction}</p>
        <ContactBtn>호스트에게 연락하기</ContactBtn>
      </div>
    </StyledHostInfo>
  );
};

export default HostInfo;

const StyledHostInfo = styled.div`
  border-top: 1px solid #d3d3d3;
  padding: 48px 0;

  .top {
    display: flex;

    img {
      width: 56px;
      border-radius: 50px;
    }

    .info {
      margin-left: 20px;
      padding-top: 6px;

      span:first-child {
        display: inline-block;
        color: #222222;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 4px;
      }

      span:last-child {
        color: #717171;
        font-size: 14px;
        line-height: 18px;
        padding-top: 8px;
      }
    }
  }

  .bottom {
    padding-top: 20px;

    .iconInfo {
      margin-bottom: 20px;

      span {
        margin-right: 20px;

        .colorIcon {
          color: #fe5131;
        }
      }
    }

    p {
      width: 500px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const ContactBtn = styled.button`
  width: 175px;
  height: 48px;
  margin-top: 40px;
  background-color: white;
  border: 1px solid #222222;
  border-radius: 8px;
  font-size: 16px;

  &:hover {
    background-color: rgb(243, 243, 243);
  }
`;
