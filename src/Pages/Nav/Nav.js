import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faBars,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { flexSet, displayNone } from "../../Styles/Theme";

const Nav = () => {
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // const handleSearch = (e) => {
  //   console.log(e.target.dataset.name);
  //   e.target.dataset.name === "searchTrigger" && setIsSearchActive(true);
  //   // console.log(e.target.firstElementChild.children[1]);
  //   // const searchTrigger = e.target.firstElementChild.children[1];
  //   // e === searchTrigger && setIsSearchActive(true);
  // };

  return (
    <>
      <Navbar active={isSearchActive}>
        <section>
          <div>
            <LogoSet>
              <Link to="/">
                <div>
                  <span>
                    <FontAwesomeIcon icon={faAirbnb} />
                  </span>
                  <span>aircnb</span>
                </div>
              </Link>
            </LogoSet>

            <SearchTrigger active={isSearchActive}>
              <div>
                <button onFocus={() => setIsSearchActive(true)} tabIndex="0">
                  <span>검색 시작하기</span>
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </button>
              </div>
            </SearchTrigger>
            <ProfileTrigger
              onClick={() => setIsProfileActive(true)}
              onBlur={() => setIsProfileActive(false)}
              active={isProfileActive}
              tabIndex="0"
            >
              <button>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </span>
                </div>
              </button>
            </ProfileTrigger>
          </div>
        </section>
        <SearchMenu>
          <div>
            <form>
              <fieldset>
                <span>숙소</span>
              </fieldset>
              <div>
                <div>
                  <div>
                    <label htmlFor="location">
                      <div>
                        <div>위치</div>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          placeholder="어디로 여행가세요?"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <div>체크인</div>
                  <div>날짜추가</div>
                </div>
                <div>
                  <div>체크아웃</div>
                  <div>날짜추가</div>
                </div>
                <div>
                  <div>
                    <div>인원</div>
                    <div>게스트추가</div>
                  </div>
                  <button>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                      <span>검색</span>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </SearchMenu>
        <ProfileMenu active={isProfileActive}>
          <div>
            <ul>
              <ProfileMenuGroup>
                <li>
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
      </Navbar>
    </>
  );
};

const Navbar = styled.header`
  > section {
    height: 80px;
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0px;
    border: 1px solid red;
    > div {
      ${flexSet("space-between", "center")};
      height: 100%;
      padding: 0 80px;
    }
  }
`;

const LogoSet = styled.div`
  ${({ theme }) => {
    const primaryColor = theme.primaryColor;
    return css`
      & div {
        ${flexSet(null, "center")};

        span {
          &:first-child {
            font-size: 35px;
            color: ${primaryColor};
          }
          &:last-child {
            color: ${primaryColor};
            margin-left: 10px;
            font-size: 25px;
            font-weight: 700;
          }
        }
      }
    `;
  }}
`;

const SearchTrigger = styled.div`
  ${({ theme, active }) => {
    const primaryColor = theme.primaryColor;
    const borderColor = theme.borderColor;
    return css`
      padding: 0 24px;

      & > div {
        width: 100%;

        button {
          ${active && displayNone}
          ${flexSet("space-between", "center")};
          width: 300px;
          height: 48px;
          background-color: #fff;
          border: 1px solid ${borderColor};
          border-radius: 24px;
          transition: ease 0.3s;
          cursor: pointer;

          &:hover {
            box-shadow: 0px 2px 4px 0.5px ${borderColor};
          }

          span {
            &:first-child {
              font-weight: 600;
              padding: 0 16px 0 24px;
              line-height: 18px;
            }

            &:last-child {
              ${flexSet("center", "center")};
              width: 32px;
              height: 32px;
              color: #fff;
              background-color: ${primaryColor};
              border-radius: 50%;
            }
          }
        }
      }
    `;
  }}
`;

const ProfileTrigger = styled.div`
  button {
    ${flexSet("center", "center")};
    width: 77px;
    height: 42px;
    padding: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 24px;
    box-shadow: ${({ active }) => active && "0px 2px 4px 0.5px #ddd"};
    transition: ease 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 2px 4px 0.5px #ddd;
    }

    > div {
      ${flexSet("space-between", "center")};
      width: 100%;
      padding: 5px 5px 5px 12px;
      span {
        color: #717171;
        &:first-child {
          font-size: 16px;
        }
        &:last-child {
          font-size: 30px;
        }
      }
    }
  }
`;

const SearchMenu = styled.div`
  width: 100%;

  > div {
    padding: 0 80px 16px 80px;

    form {
      margin: 0 auto;
      width: 850px;

      fieldset {
        ${flexSet("center", "center")}
        height: 80px;
        span {
          &::before {
            content: "";
            height: 2px;
            background-color: #000;
            border-radius: 1px;
            position: absolute;
            top: 60px;
            width: 18px;
          }
        }
      }
    }
  }
`;

const ProfileMenu = styled.div`
  ${({ active }) => !active && displayNone}
  position: fixed;
  top: 75px;
  right: 80px;
  width: 240px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0.5px #ddd;
  border-radius: 10px;
  z-index: 101;
  font-size: 14px;

  div {
    padding: 3px 0;
    ul {
      li {
        cursor: pointer;
        &:hover {
          background-color: #f9f9f9;
        }
        span {
          padding: 0 15px;
        }
      }
    }
  }
`;

const ProfileMenuGroup = styled.div`
  & {
    li {
      padding: 13px 0;
    }
  }
  & + & {
    border-top: 1px solid #ddd;
    li {
      padding: 13px 0;

      &:first-child {
        margin-top: 2px;
      }
    }
  }
`;

export default Nav;
