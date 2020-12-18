import React from "react";
import styled from "styled-components";

function Payment({
  handleConfirm,
  buyer_name,
  buyer_tel,
  buyer_email,
  buyer_addr
}) {
  function onClickPayment(e) {
    handleConfirm(e);

    const { IMP } = window;
    IMP.init("imp64387558");

    const data = {
      pg: "kakaopay", // PG사
      pay_method: "kakaopay", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: "air c&b ", // 주문명
      buyer_name: buyer_name, // 구매자 이름
      buyer_tel: buyer_tel, // 구매자 전화번호
      buyer_email: buyer_email, // 구매자 이메일
      buyer_addr: buyer_addr // 구매자 주소
    };

    IMP.request_pay(data, callback);
  }

  function callback(response) {
    const { success, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }
  return (
    <RequestButton>
      <button onClick={(e) => onClickPayment(e)}>확인 및 결제</button>
    </RequestButton>
  );
}

export default Payment;

const RequestButton = styled.div`
  button {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    width: 150px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    border: none;
    &:hover,
    &:focus {
      cursor: pointer;
      outline: none;
    }
  }
`;
