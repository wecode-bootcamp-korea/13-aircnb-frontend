import React, { useState, useRef } from "react";
import axios from "axios";
import KakaoLogin from "react-kakao-login";

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

// LINK Kakao jskey
import { KAKAO_TOKEN } from "../../../config";

const Login = ({ close }) => {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const [responseData, setResponseData] = useState("");

  const dialog = useRef();

  const handleBlur = (e) => {
    !dialog.current.contains(e.target) && close(false);
  };

  const responseKaKao = (response) => {
    // TODO need API
    // const response = await axios.get(API);
    // const validation = response && response.status === 200;
    // validation && new Error("cannot fetch the data");
    // const { location } = await response.data;
    // const result = JSON.stringify(response);
    // setResponseData(result);
    console.log(response);
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
            <span></span>
            <span>또는</span>
            <span></span>
          </Divider>
          <InputForm email={isEmailLogin}>
            <div>
              {isEmailLogin ? (
                <input type="text" name="email" placeholder="이메일 주소" />
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
                  <input type="text" name="phone" placeholder="전화번호" />
                </>
              )}
            </div>
            <div>
              <input
                type={isPassword ? "password" : "text"}
                name="password"
                placeholder="비밀번호"
              />
            </div>
            <div>
              <div onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? "비밀번호 보기" : "비밀번호 숨기기"}
              </div>
              <div>
                <span onClick={() => setIsEmailLogin(!isEmailLogin)}>
                  {isEmailLogin ? "전화번호로 로그인" : "이메일로 로그인"}
                </span>
                <span> ﹒ </span>
                <span>비밀번호를 잊으셨나요?</span>
              </div>
            </div>
            <button>
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

export default Login;
