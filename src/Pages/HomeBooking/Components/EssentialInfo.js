import React from "react";
import styled from "styled-components";
import { flexSet } from "../../../Styles/Theme";

const EssentialInfo = () => {
  return (
    <StyledEssentialInfo>
      <SubTitle>필수 입력 정보</SubTitle>
      <EssentialInfoWrapper>
        <DescriptionWrapper>
          <Date>호스트에게 메시지 보내기</Date>
          <ChosenDate>
            호스트에게 여행 목적과 도착 예정 시간을 알려주세요.
          </ChosenDate>
        </DescriptionWrapper>
        <Button>추가</Button>
      </EssentialInfoWrapper>
      <EssentialInfoWrapper>
        <DescriptionWrapper>
          <Date>전화번호</Date>
          <ChosenDate>
            여행 업데이트를 받으려면 전화번호를 입력하고 인증해주세요.
          </ChosenDate>
        </DescriptionWrapper>
        <Button>추가</Button>
      </EssentialInfoWrapper>
    </StyledEssentialInfo>
  );
};

const SubTitle = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
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

const StyledEssentialInfo = styled.div`
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const DescriptionWrapper = styled.div``;

const Button = styled.button`
  width: 60px;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  border: solid 1px black;
  background-color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const EssentialInfoWrapper = styled.div`
  ${flexSet("space-between", "center")}
  margin-top: 30px;
`;

export default EssentialInfo;
