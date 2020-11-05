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
import { flexSet, displayNone, visibilityHidden } from "../../Styles/Theme";

import Search from "../../Components/Search/Search";

const Nav = () => {
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchHover, setIsSearchHover] = useState(false);

  const closeSearch = (e) => {
    !e.currentTarget.contains(e.relatedTarget) && setIsSearchActive(false);
  };

  return (
    <>
      <Navbar active={isSearchActive} onBlur={closeSearch} tabIndex="0">
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
            <SearchTrigger
              active={isSearchActive}
              hover={isSearchHover}
              tabIndex="0"
            >
              <div>
                <button tabIndex="0">
                  <span>검색 시작하기</span>
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </button>
              </div>
            </SearchTrigger>
            <SearchFake
              onClick={() => setIsSearchActive(true)}
              onMouseOver={() => setIsSearchHover(true)}
              onMouseOut={() => setIsSearchHover(false)}
              tabIndex="1"
            />
            <ProfileTrigger
              onFocus={() => setIsProfileActive(true)}
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
        <Search search={isSearchActive} />
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

const SearchFake = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-44%);
  width: 300px;
  height: ${({ active }) => (active ? 0 : 48)}px;
  z-index: 2;
  cursor: pointer;
`;

const SearchTrigger = styled.div`
  ${({ theme, active, hover }) => {
    const primaryColor = theme.primaryColor;
    const borderColor = theme.borderColor;

    return css`
      padding: 0 24px;

      & > div {
        width: 100%;

        button {
          ${flexSet("space-between", "center")};
          position: absolute;
          top: 19%;
          left: 39%;
          width: 300px;
          height: 48px;
          background-color: #fff;
          border: 1px solid ${borderColor};
          border-radius: 24px;
          transition: 0.2s ease-in;
          cursor: pointer;
          box-shadow: ${hover && "0px 2px 4px 0.5px"} ${borderColor};
          opacity: ${active ? 0 : 1};
          transform: translateY(${active && 30}px);
          transition: 0.2s ease;

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
