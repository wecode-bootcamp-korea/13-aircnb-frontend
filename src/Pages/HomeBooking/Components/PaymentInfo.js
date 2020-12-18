import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import styled from "styled-components";
import { flexSet } from "../../../Styles/Theme";
import CountryModalBtn from "./CountryModalBtn";
import CountryModalContent from "./CountryModalContent";

const PaymentInfo = ({ onChange }) => {
  const [country, setCountry] = useState("한국");

  const openCardDropBox = (e) => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  return (
    <StyledPayment>
      <PaymentWrapper>
        <SubTitle>결제 수단</SubTitle>
        <CardLogos>
          <img
            alt="visa"
            src="https://www.pngkey.com/png/full/388-3889634_introduction-of-kakao-pay-kakaopay-png.png"
          />
        </CardLogos>
      </PaymentWrapper>
      <CardInput>
        <div className="dropdown">
          <button className="dropbtn" onClick={(e) => openCardDropBox(e)}>
            카카오페이
          </button>
          <div id="myDropdown" className="dropdown-content">
            <div className="paymentList">
              카카오페이
              <FontAwesomeIcon className="checkIcon" icon={faCheck} />
            </div>
          </div>
        </div>
      </CardInput>
      <NameInput
        onChange={onChange}
        name="userName"
        type="text"
        placeholder="성함"
      />
      <PhoneInput
        onChange={onChange}
        name="phoneNumber"
        type="number"
        placeholder="핸드폰번호"
      />
      <EmailInput
        onChange={onChange}
        name="email"
        type="text"
        placeholder="email"
      />
      <AdressInput
        onChange={onChange}
        name="address"
        type="text"
        placeholder="주소"
      />
      <Modal
        toggle={(show) => <CountryModalBtn onClick={show} country={country} />}
        content={(hide, show) => (
          <CountryModalContent
            onBlur={hide}
            onFocus={show}
            country={country}
            setCountry={setCountry}
          />
        )}
      />
    </StyledPayment>
  );
};

const SubTitle = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
`;

const StyledPayment = styled.div`
  padding-bottom: 24px;
  border-bottom: solid 1px #dddddd;
`;

const PaymentWrapper = styled.div`
  ${flexSet("space-between", "center")}
  margin-bottom: 50px;
`;

const CardLogos = styled.div`
  width: 80px;
  margin: 24px -15px 0 0;
  ${flexSet("flex-start", "center")}
  img {
    width: 60px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  margin-top: 10px;
  padding: 16px 40px 16px 16px;
  font-size: 13px;
  border: solid 1px grey;
  border-radius: 8px;
  &:focus {
    outline: none;
    border: solid 1px black;
  }
  &:hover {
    outline: none;
    border: solid 1px #bbbbbb;
  }
`;

const CardInput = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 10px;

  .dropdown {
    width: 100%;
    display: inline-block;
    position: relative;

    .dropbtn {
      width: 100%;
      height: 56px;
      padding: 16px;
      ${flexSet("flex-start", "center")}
      color: #717171;
      font-size: 13px;
      background-color: white;
      border: none;
      border-radius: 8px;
      border: solid 1px grey;
      &:hover,
      &:focus {
        border: solid 1px #bbbbbb;
        outline: none;
        cursor: pointer;
      }
    }
    .dropdown-content {
      display: none;
      position: absolute;
      width: 100%;
      height: 56px;
      padding: 16px;
      margin-top: 5px;
      background-color: rgb(242, 242, 242);
      border-radius: 8px;
      border: solid 1px grey;
      font-size: 13px;
      color: #717171;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      .paymentList {
        display: block;
        padding: 4px 0;
        color: black;
        text-decoration: none;
        &:hover {
          cursor: pointer;
        }
        .checkIcon {
          position: absolute;
          right: 20px;
        }
      }
    }
    .show {
      display: block;
    }
  }
`;

const NameInput = styled(Input)`
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
`;

const PhoneInput = styled(Input)`
  width: 50%;
  margin-top: 0px;
  border-radius: 0px 0px 0px 8px;
  border-right: none;
`;

const EmailInput = styled(Input)`
  width: 50%;
  margin-top: 0px;
  border-radius: 0px 0px 8px 0px;
`;

const AdressInput = styled(Input)``;

export const EssentialInfoWrapper = styled.div`
  ${flexSet("space-between", "center")}
  margin-top: 30px;
`;

export default PaymentInfo;
