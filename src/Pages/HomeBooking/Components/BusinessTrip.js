import React, { useState } from "react";
import styled from "styled-components";
import ToggleContent from "./Modal";
import ToggleSwitch from "./ToggleSwitch";
import { flexSet } from "../../../Styles/Theme";

const BusinessTrip = () => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledBusinessTrip>
      <BusinessTripWrapper>
        <span>출장인가요?</span>
        <ToggleSwitch
          id="businessTrip"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </BusinessTripWrapper>
      <TripPurposeWrapper checked={checked}>
        <PurposeDescriptionWrapper>
          <Date>출장 목적(선택 사항)</Date>
          <ChosenDate>경비 처리를 위해 메모를 추가하세요.</ChosenDate>
        </PurposeDescriptionWrapper>
        <ToggleContent
          toggle={(show) => <Button onClick={show}>추가</Button>}
          content={(hide, show) => (
            <BusinessTripModal>
              <div
                className="modalBox"
                onBlur={hide}
                onFocus={show}
                tabIndex="2"
              >
                <div className="modalHeader">
                  <button className="closeBtn" onClick={hide}>
                    X
                  </button>
                  <span>출장 목적 입력</span>
                </div>
                <div className="modalContent">
                  <div>출장 목적을 회사에 알려주세요.</div>
                  <input type="text" />
                </div>
                <div className="BtnWrapper">
                  <button onClick={hide} className="saveBtn">
                    저장
                  </button>
                </div>
              </div>
            </BusinessTripModal>
          )}
        />
      </TripPurposeWrapper>
    </StyledBusinessTrip>
  );
};

export default BusinessTrip;

const DateWrapper = styled.div`
  ${flexSet("space-between", "center")}
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

const StyledBusinessTrip = styled.div`
  padding-bottom: 25px;
  border-bottom: solid 1px #dddddd;
  span {
    font-size: 14px;
    font-weight: bold;
  }
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

const EssentialInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const BusinessTripWrapper = styled(DateWrapper)``;

const TripPurposeWrapper = styled(EssentialInfoWrapper)`
  display: ${(props) => !props.checked && "none"};
`;
const PurposeDescriptionWrapper = styled(DescriptionWrapper)``;

const BusinessTripModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 10;

  .modalBox {
    width: 568px;
    position: relative;
    top: 30%;
    left: 30%;
    padding: 20px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 2px 5px 16px 0px #0b325e;
    z-index: 11;
    &:focus {
      outline: none;
    }

    .modalHeader {
      position: relative;
      padding-bottom: 20px;
      border-bottom: solid 1px #dddddd;
      .closeBtn {
        background-color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        &:hover {
          cursor: pointer;
        }
        &:focus {
          outline: none;
        }
      }
      span {
        position: absolute;
        right: 215px;
        top: 4px;
        font-size: 15px;
      }
    }

    .modalContent {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: solid 1px #dddddd;
      div {
        font-size: 14px;
        margin-bottom: 15px;
      }
      input {
        width: 100%;
        height: 60px;
        border-radius: 10px;
        border: 1px solid grey;
        outline: none;
        padding: 10px;
      }
    }

    .BtnWrapper {
      padding-top: 20px;
    }
    .saveBtn {
      width: 100%;
      height: 48px;
      background-color: #222222;
      color: white;
      font-size: 15px;
      font-weight: bold;
      border: solid 1px black;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
        background-color: black;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
