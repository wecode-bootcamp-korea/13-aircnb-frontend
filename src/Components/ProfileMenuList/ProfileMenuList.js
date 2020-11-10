import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

//LINK redux action
import { refProfile, signout } from "../../Redux/Actions/Index";

//LINK component
import Login from "./Login/Login";

// LINK style
import { ProfileMenu, ProfileMenuGroup } from "./ProfileMenuList.Styled";

const ProfileMenuList = ({
  profile,
  isProfileModalActive,
  refProfile,
  userToken,
  signout,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(userToken, "usertokeeeeeeee");

  const menu = useRef();
  useEffect(() => {
    refProfile(menu?.current);
  }, [profile]);

  return (
    <>
      <ProfileMenu ref={menu} active={isProfileModalActive}>
        <div>
          <ul>
            <ProfileMenuGroup>
              {userToken ? (
                <li onClick={signout}>
                  <span>로그아웃</span>
                </li>
              ) : (
                <>
                  <li onClick={() => setIsLogin(!isLogin)}>
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
      {isLogin && <Login close={setIsLogin} />}
    </>
  );
};

const mapStateToProps = ({
  modalReducer: { isProfileModalActive, profile },
  signReducer: { userToken },
}) => ({
  profile,
  isProfileModalActive,
  userToken,
});

const mapDispatchToProps = (dispatch) => ({
  refProfile: (profile) => dispatch(refProfile(profile)),
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenuList);
