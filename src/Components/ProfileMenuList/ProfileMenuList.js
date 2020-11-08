import React, { useState } from "react";

//LINK component
import Login from "./Login/Login";

// LINK style
import { ProfileMenu, ProfileMenuGroup } from "./ProfileMenuList.Styled";

const ProfileMenuList = ({ profileActive }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <ProfileMenu active={profileActive}>
        <div>
          <ul>
            <ProfileMenuGroup>
              <li onClick={() => setIsLogin(!isLogin)}>
                <span>로그인</span>
              </li>
              <li>
                <span>회원 가입</span>
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
      {isLogin && <Login close={setIsLogin} />}
    </>
  );
};

export default ProfileMenuList;
