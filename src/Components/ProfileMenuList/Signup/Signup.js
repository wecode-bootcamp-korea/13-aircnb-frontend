import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

//LINK redux action
import { closeSignupModal } from "../../../Redux/Actions/Index";

//LINK style
import { SignupDialog, SignupModal, InputForm, Footer } from "./Signup.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//LINK API
import { SIGNUP_API } from "../../../config";

const Signup = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [inputData, setInputData] = useState({
    email: null,
    firstName: null,
    lastName: null,
    password: null,
  });

  // ANCHOR redux
  // const modalReducer = useSelector(({ modalReducer }) => modalReducer);
  // const isSignupModalActive = modalReducer.isSignupModalActive;

  const dispatch = useDispatch();
  const closeSignupModalAction = () => dispatch(closeSignupModal());

  const inputHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.dataset.name]: e.target.value,
    });
  };

  const responseSignup = async () => {
    const { email, password, firstName, lastName } = inputData;
    try {
      const profile = {
        email,
        password,
        name: firstName + lastName,
      };
      const response = await axios.post(SIGNUP_API, profile);
      const validation = response && response.status === 200;
      !validation && new Error("cannot fetch the data");
      console.log(response);
      const result = response.data.MESSAGE;
      console.log(result);
      Swal.fire({
        title: "가입완료",
        text: "가입이 성공적으로 완료되었습니다!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      // ANCHOR send REDUX
      closeSignupModalAction();
    } catch (error) {
      Swal.fire({
        title: "문제발생",
        text: "양식을 제대로 작성해주세요!",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <SignupModal>
      <SignupDialog>
        <section>
          <header>
            <div onClick={closeSignupModalAction}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div>회원가입</div>
          </header>
          <InputForm>
            <div>
              <input
                type="text"
                name="email"
                data-name="email"
                placeholder="이메일 주소"
                onChange={inputHandler}
              />
              <input
                type="text"
                name="lastName"
                data-name="lastName"
                placeholder="이름(예: 길동)"
                onChange={inputHandler}
              />
              <input
                type="text"
                name="firstName"
                data-name="firstName"
                placeholder="성(예: 홍)"
                onChange={inputHandler}
              />
              <input
                type={isPassword ? "password" : "text"}
                data-name="password"
                name="password"
                placeholder="비밀번호 설정하기"
                onChange={inputHandler}
              />
            </div>
            <div>
              <div onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? "비밀번호 보기" : "비밀번호 숨기기"}
              </div>
            </div>
            <button onClick={responseSignup}>
              <div>가입하기</div>
            </button>
          </InputForm>
          <Footer>
            <div>
              <span>이미 에어비앤비 계정이 있나요?</span>
              <span>로그인</span>
            </div>
          </Footer>
        </section>
      </SignupDialog>
    </SignupModal>
  );
};

export default Signup;
