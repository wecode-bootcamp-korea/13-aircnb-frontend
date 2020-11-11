import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faSmokingBan } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import NOTICE_DATA from "./NoticeData";
import Notice from "./Notice";

export function Notices() {
  return (
    <StyledNotices>
      <h3>알아두어야 할 사항</h3>
      <div className="noticeCon">
        <NoticeCon>
          <h5>숙소 이용규칙</h5>
          {/* {NOTICE_DATA.rules.map((rule) => (
            <Notice icon={rule.icon} desc={rule.desc} />
          ))} */}

          <div className="iconDiv">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <span>체크인 시간: 오후 5:00 - 오후 10:00</span>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <span>체크아웃 시간: 오전 11:00</span>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={faSmokingBan} className="icon" />
            <span>흡연 금지</span>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={faBan} className="icon" />
            <span>파티나 이벤트 금지</span>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={faPaw} className="icon" />
            <span>반려동물 동반 가능</span>
          </div>
        </NoticeCon>
        <NoticeCon>
          <h5>건강과 안전</h5>
          <div className="iconDiv">
            <FontAwesomeIcon icon={faExclamationTriangle} className="icon" />
            <span>
              에어비앤비의 사회적 거리두기 및 관련 가이드 라인이 적용 됩니다.
            </span>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <span>일산화탄소 경보기</span>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <span>화재 경보기</span>
          </div>
        </NoticeCon>
        <NoticeCon>
          <h5>환불 정책</h5>
          <div>
            <span>체크인 5일 전까지 수수료 없이 취소 가능</span>
            <span>
              그 이후로는 체크인 전에 취소하면 첫 1박 요금과 서비스 수수료를
              제외하고 50%가 환불됩니다.
            </span>
          </div>
        </NoticeCon>
      </div>
    </StyledNotices>
  );
}

export default Notices;

const StyledNotices = styled.div`
  border-top: 1px solid #d3d3d3;
  color: #222222;
  padding: 48px 0;

  h3 {
    display: block;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 600;
  }

  .noticeCon {
    display: flex;
  }
`;

const NoticeCon = styled.ul`
  width: 33.3333%;
  height: 150px;

  &:nth-child(2) {
    padding: 0 70px 0 20px;
  }

  &:last-child {
    padding-left: 60px;
  }

  h5 {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
  }

  span {
    display: block;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .iconDiv {
    display: flex;

    .icon {
      margin-right: 10px;
    }
  }
`;

// const StyledNotice = styled.div`
//   border: 1px solid pink;

//   span {
//     display: block;
//     font-size: 16px;
//     line-height: 20px;
//     margin-bottom: 8px;
//   }

//   .iconDiv {
//     display: flex;

//     .icon {
//       margin-right: 10px;
//     }
//   }
// `;
