import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//LINK redux action
import {
  refProfile,
  signout,
  toogleLoginModal,
} from "../../Redux/Actions/Index";

//LINK component
import Login from "./Login/Login";

// LINK style
import { ProfileMenu, ProfileMenuGroup } from "./ProfileMenuList.Styled";

const ProfileMenuList = () => {
  // ANCHOR redux
  const modalReducer = useSelector(({ modalReducer }) => modalReducer);
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const isProfileModalActive = modalReducer.isProfileModalActive;
  const profile = modalReducer.profile;
  const isLoginModalActive = modalReducer.isLoginModalActive;
  const userToken = signReducer.userToken;

  const dispatch = useDispatch();
  const refProfileAction = (profile) => dispatch(refProfile(profile));
  const signoutAction = () => dispatch(signout());
  const toogleLoginModalAction = () => dispatch(toogleLoginModal());

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
                <li onClick={signoutAction}>
                  <span>로그아웃</span>
                </li>
              ) : (
                <>
                  <li onClick={toogleLoginModalAction}>
                    <span>로그인</span>
                  </li>
                  <li>
                    <span>회원 가입</span>
                  </li>
                </>
              )}
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
    </>
  );
};

export default ProfileMenuList;
