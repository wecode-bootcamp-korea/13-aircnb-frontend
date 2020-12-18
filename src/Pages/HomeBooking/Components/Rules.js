import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Rules = ({ refundableDate }) => {
  return (
    <>
      <Rule>
        <DateWrapper>
          <Date>숙소 이용규칙</Date>
          <FontAwesomeIcon
            className="toPrevPage"
            size="sm"
            icon={faChevronRight}
          />
        </DateWrapper>
        <ChosenDate>숙소 이용규칙과 안전 정보 섹션을 검토하세요.</ChosenDate>
      </Rule>
      <RefundPolicy>
        <YellowBar></YellowBar>
        <PolicyWrapper>
          <SubTitle>환불 정책</SubTitle>
          <ChosenDate>
            {refundableDate} 이내에 무료로 취소할 수 있습니다. 그 후에는{" "}
            {refundableDate} PM 3:00 전에 예약을 취소하면 첫 1박 요금 및 서비스
            수수료를 제외한 요금의 50%가 환불됩니다.
          </ChosenDate>
        </PolicyWrapper>
      </RefundPolicy>
      <AdditionalInfo>
        아래 버튼을 선택하면, <u>숙소 이용규칙</u>, <u>안전 정보 공개</u>,
        <u>환불 정책</u>,
        <u>에어비앤비의 사회적 거리 두기 및 기타 코로나19 관련 가이드라인</u>,
        및<u>게스트 환불 정책</u>에 동의하는 것입니다. 또한 <u>숙박세</u>및
        서비스 수수료를 포함하여 표시된 총 금액에 동의합니다. 에어비앤비는 이제
        이 지역에서 정부가 부과한 숙박세를 징수하여 납부합니다.
      </AdditionalInfo>
    </>
  );
};

const SubTitle = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

const Date = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const ChosenDate = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: grey;
`;

const Rule = styled.div`
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const RefundPolicy = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const YellowBar = styled.div`
  width: 20px;
  height: 80px;
  margin-right: 20px;
  margin-top: 24px;
  background-color: #ffaf0f;
`;

const PolicyWrapper = styled.div``;

const AdditionalInfo = styled.div`
  margin: 30px 0px;
  font-size: 11px;
  u {
    font-weight: bold;
    line-height: 1.6;
    color: #0038ab;
  }
`;

export default Rules;
