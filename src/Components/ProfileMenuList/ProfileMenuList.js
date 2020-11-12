import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

//LINK redux action
import {
  refProfile,
  signout,
  toogleLoginModal,
  toggleSignupModal,
} from "../../Redux/Actions/Index";

//LINK component
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

// LINK style
import { ProfileMenu, ProfileMenuGroup } from "./ProfileMenuList.Styled";

const ProfileMenuList = ({ history }) => {
  // ANCHOR redux
  const modalReducer = useSelector(({ modalReducer }) => modalReducer);
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const isProfileModalActive = modalReducer.isProfileModalActive;
  const profile = modalReducer.profile;
  const isLoginModalActive = modalReducer.isLoginModalActive;
  const isSignupModalActive = modalReducer.isSignupModalActive;
  const userToken = signReducer.userToken;

  const dispatch = useDispatch();
  const refProfileAction = (profile) => dispatch(refProfile(profile));
  const signoutAction = () => dispatch(signout());
  const toogleLoginModalAction = () => dispatch(toogleLoginModal());
  const toggleSignupModalAction = () => dispatch(toggleSignupModal());

  const doSignout = () => {
    Swal.fire({
      title: "로그아웃 완료",
      text: "로그아웃이 성공적으로 완료되었습니다!",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
    signoutAction();
  };

  const menu = useRef();
  useEffect(() => {
    refProfileAction(menu?.current);
  }, [profile]);

  return (
    <>
      <ProfileMenu ref={menu} active={isProfileModalActive}>
        <div>
          <ul>
            <ProfileMenuGroup>
              {userToken ? (
                <li onClick={doSignout}>
                  <span>로그아웃</span>
                </li>
              ) : (
                <>
                  <li onClick={toogleLoginModalAction}>
                    <span>로그인</span>
                  </li>
                  <li onClick={toggleSignupModalAction}>
                    <span>회원 가입</span>
                  </li>
                </>
              )}
              <li onClick={() => history.push("/user/likelist")}>
                <span>저장 목록</span>
              </li>
            </ProfileMenuGroup>
            <ProfileMenuGroup>
              <li>
                <span>도움말</span>
              </li>
            </ProfileMenuGroup>
          </ul>
        </div>
      </ProfileMenu>
      {isLoginModalActive && <Login />}
      {isSignupModalActive && <Signup />}
    </>
  );
};

export default withRouter(ProfileMenuList);
