import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// LINK components
import Search from "../../Components/Search/Search";

// LINK style item
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
  const [isSearchHover, setIsSearchHover] = useState(false);
  console.log("------------nav-------------");

  // REVIEW ref declare
  const nav = useRef();

  const closeSearch = (e) => {
    // !nav.current.contains(e.target) &&
    //   isSearchActive &&
    //   setIsSearchActive(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeSearch);
    return () => {
      window.removeEventListener("click", closeSearch);
    };
  }, [isSearchActive]);

  return (
    <Navbar ref={nav} data-name="nav">
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

          {/* SECTION search trigger */}
          <SearchTrigger
            onClick={() => setIsSearchActive(true)}
            active={isSearchActive}
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

          {/* SECTION Profile trigger */}
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
      {/* SECTION triggered menu */}
      <Search searchActive={isSearchActive} />
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
  );
};

const Navbar = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  z-index: 100;

  > section {
    height: 100%;
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
      z-index: 200;

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
      z-index: 200;

      & > div {
        width: 100%;

        button {
          ${flexSet("space-between", "center")};
          position: absolute;
          top: 19%;
          left: 39%;
          width: ${active ? 600 : 300}px;
          height: 48px;
          background-color: #fff;
          border: 1px solid ${borderColor};
          border-radius: 24px;
          transition: 0.2s ease-in;
          opacity: ${active ? 0 : 1};
          transform: translateY(${active && 40}px);
          transition: 0.2s ease;
          cursor: pointer;

          &:hover {
            box-shadow: 0px 2px 4px 0.5px ${borderColor};
          }

          span {
            &:first-child {
              font-size: 14px;
              font-weight: 550;
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
  z-index: 200;
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
  font-size: 14px;
  z-index: 200;

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
