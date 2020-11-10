import React, { useState, useRef } from "react";
import axios from "axios";
import KakaoLogin from "react-kakao-login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// LINK style
import {
  LoginModal,
  SocialLogin,
  Divider,
  InputForm,
  Footer,
  LoginDialog,
} from "./Login.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// LINK key
import {
  KAKAO_TOKEN,
  SIGNIN_API_KAKAO,
  SIGNIN_API_DEFAULT,
} from "../../../config";

import { signin } from "../../../Redux/Actions/Index";

const Login = ({ history, close, signin, userToken }) => {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const [inputData, setInputData] = useState({
    email: null,
    password: null,
  });
  // const [responseData, setResponseData] = useState("");

  const dialog = useRef();

  const handleBlur = (e) => {
    !dialog.current.contains(e.target) && close(false);
  };

  const inputHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.dataset.name]: e.target.value,
    });
  };

  const handleLoginType = (e) => {
    setIsEmailLogin(!isEmailLogin);
  };

  const responseKaKao = async (res) => {
    const ACCESS_TOKEN = res.response.access_token;
    try {
      const profile = {
        headers: {
          AUTHORIZATION: ACCESS_TOKEN,
        },
      };
      const response = await axios.get(SIGNIN_API_KAKAO, profile);
      const validation = response && response.status === 200;
      !validation && new Error("cannot fetch the data");
      const result = response.data.AUTHORIZATION;
      console.log(result);
      // ANCHOR send REDUX
      signin(result);
      history.push("/");
    } catch (error) {
      console.log("!!!error!!!");
    }
  };

  const responseLogin = async (res) => {
    const { email, password } = inputData;
    // console.log(email, password);
    try {
      console.log(inputData);
      const profile = {
        email,
        password,
      };
      console.log(profile);
      const response = await axios.post(SIGNIN_API_DEFAULT, profile);
      const validation = response && response.status === 200;
      !validation && new Error("cannot fetch the data");
      const result = response.data.AUTHORIZATION;
      console.log(result);
      // ANCHOR send REDUX
      signin(result);
      history.push("/");
    } catch (error) {
      console.log("!!!error!!!");
    }
  };

  const responseFail = (err) => {
    console.log(`!!! ${err} !!!`);
  };

  const responseLogout = (res) => {
    console.log(`---${res}---`);
  };

  return (
    <LoginModal onClick={handleBlur}>
      <LoginDialog ref={dialog}>
        <section>
          <header>
            <div onClick={() => close(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div>로그인</div>
          </header>
          <SocialLogin>
            <KakaoLogin
              token={KAKAO_TOKEN}
              onSuccess={responseKaKao}
              onFail={responseFail}
              onLogout={responseLogout}
            >
              <div>
                <img
                  src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                  height="48"
                />
              </div>
            </KakaoLogin>
            <button>
              <div>
                <span>
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
                <span>구글 계정으로 로그인</span>
              </div>
            </button>
          </SocialLogin>
          <Divider>
            <span />
            <span>또는</span>
            <span />
          </Divider>
          <InputForm email={isEmailLogin}>
            <div>
              {isEmailLogin ? (
                <input
                  type="text"
                  name="email"
                  data-name="email"
                  placeholder="이메일 주소"
                  onChange={inputHandler}
                />
              ) : (
                <>
                  <select name="locale">
                    <option value="+82">한국 (+82)</option>
                    <option value="+81">일본 (+81)</option>
                    <option value="+1">푸에르토리코 (+1)</option>
                    <option value="+33">프랑스 (+33)</option>
                    <option value="+63">필리핀 (+63)</option>
                    <option value="+36">헝가리 (+36)</option>
                  </select>
                  <input
                    type="text"
                    name="phone"
                    data-name="phoneNumber"
                    placeholder="전화번호"
                    onChange={inputHandler}
                  />
                </>
              )}
            </div>
            <div>
              <input
                type={isPassword ? "password" : "text"}
                data-name="password"
                name="password"
                placeholder="비밀번호"
                onChange={inputHandler}
              />
            </div>
            <div>
              <div onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? "비밀번호 보기" : "비밀번호 숨기기"}
              </div>
              <div>
                <span onClick={handleLoginType}>
                  {isEmailLogin ? "전화번호로 로그인" : "이메일로 로그인"}
                </span>
                <span> ﹒ </span>
                <span>비밀번호를 잊으셨나요?</span>
              </div>
            </div>
            <button onClick={responseLogin}>
              <div>로그인</div>
            </button>
          </InputForm>
          <Footer>
            <div>
              <span>에어비앤비 계정이 없으세요?</span>
              <span>회원 가입</span>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span>뒤로</span>
            </div>
          </Footer>
        </section>
      </LoginDialog>
    </LoginModal>
  );
};

const mapStateToProps = ({ signReducer: { userToken } }) => ({
  userToken,
});

const mapDispatchToProps = (dispatch) => ({
  signin: (token) => dispatch(signin(token)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
