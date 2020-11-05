import React, { useState } from "react";
import styled, { css } from "styled-components";

import Location from "./Location/Location";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { flexSet, displayNone, visibilityHidden } from "../../Styles/Theme";

const Search = ({ search }) => {
  const [isDividerActive, setIsDividerActive] = useState(0);
  const [isInputActive, setIsInputActive] = useState(1);
  const [locationMessage, setLocationMessage] = useState("");
  const [currentLocation, setCurrentLocation] = useState([]);

  const hoverInput = (e) => {
    const { id } = e.currentTarget.dataset;
    setIsDividerActive(+id);
  };

  const hoverOutInput = (e) => {
    !e.currentTarget.contains(e.relatedTarget) && setIsDividerActive(0);
  };

  const activeInput = (e) => {
    const { id } = e.currentTarget.dataset;
    setIsInputActive(+id);
  };

  const deactiveInput = (e) => {
    !e.currentTarget.contains(e.relatedTarget) && setIsInputActive(0);
  };

  const submitInfo = (e) => {
    e.preventDefault();
  };

  const openSecondMenu = (latitude, longitude) => {
    setLocationMessage("가까운 여행지 둘러보기");
    setCurrentLocation([latitude, longitude]);
    setIsInputActive(2);
  };

  return (
    <>
      <SearchMenu
        onBlur={deactiveInput}
        active={isInputActive}
        searchActive={search}
      >
        <div>
          <form>
            <fieldset>
              <span>숙소</span>
            </fieldset>
            <div>
              <div active={isInputActive} onBlur={hoverOutInput} tabIndex="0">
                <SearchInput
                  active={isInputActive}
                  searchActive={search}
                  location
                >
                  <label
                    onClick={activeInput}
                    onMouseOver={hoverInput}
                    data-id="1"
                    htmlFor="location"
                  >
                    <div>
                      <div>위치</div>
                      <input
                        type="text"
                        id="location"
                        placeholder="어디로 여행가세요?"
                        defaultValue={locationMessage}
                      />
                    </div>
                  </label>
                </SearchInput>
                <SearchDivider active={isDividerActive} first />
                <SearchInput
                  active={isInputActive}
                  searchActive={search}
                  onMouseEnter={hoverInput}
                  onClick={activeInput}
                  data-id="2"
                  checkin
                >
                  <div>
                    <div>
                      <div>체크인</div>
                      <div>날짜추가</div>
                    </div>
                  </div>
                </SearchInput>
                <SearchDivider active={isDividerActive} second />
                <SearchInput
                  active={isInputActive}
                  searchActive={search}
                  onMouseEnter={hoverInput}
                  onClick={activeInput}
                  data-id="3"
                  checkout
                >
                  <div>
                    <div>
                      <div>체크아웃</div>
                      <div>날짜추가</div>
                    </div>
                  </div>
                </SearchInput>
                <SearchDivider active={isDividerActive} third />
                <SearchInput
                  active={isInputActive}
                  searchActive={search}
                  onMouseEnter={hoverInput}
                  onClick={activeInput}
                  data-id="4"
                  guest
                >
                  <div>
                    <div>
                      <div>인원</div>
                      <div>게스트추가</div>
                    </div>
                    <button onClick={submitInfo}>
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span>검색</span>
                      </div>
                    </button>
                  </div>
                </SearchInput>
              </div>
            </div>
          </form>
        </div>
      </SearchMenu>
      <Location
        active={isInputActive}
        search={search}
        openSecond={openSecondMenu}
      />
    </>
  );
};

const buttonStyle = (firstNode, secondNode, last, active, search) => css`
  width: 100%;
  > ${firstNode} {
    ${search && flexSet("space-between", "center")}
    width: 100%;
    height: 66px;
    border-radius: 33px;
    padding: ${last ? "14px 10px 14px 32px" : "14px 32px"};
    box-shadow: ${active && "0px 4px 10px 4px #ddd"};
    cursor: pointer;

    &:hover {
      background-color: ${active ? "transparent" : "#eee"};
    }

    &:focus {
      outline: none;
    }

    > div {
      /* ${!search && displayNone} */
      width: ${(secondNode === "input" && 204) || (last && 120)}px;
      transition: 0.2s ease;

      > div {
        &:first-child {
          text-indent: ${secondNode === "input" ? "2px" : "0"};
          line-height: 18px;
          font-size: 12px;
          font-weight: 700;
        }

        ${secondNode === "div" &&
        css`
          &:last-child {
            color: #555;
            font-size: 13px;
            line-height: 18px;
          }
        `}
      }

      ${secondNode === "input" &&
      css`
        input {
          border: 0px;
          background-color: transparent;
          outline: none;

          &::placeholder {
            color: #555;
            line-height: 18px;
          }
        }
      `}
    }
  }
`;

const SearchMenu = styled.div`
  ${({ searchActive, active }) => {
    return css`
      width: 100%;
      transition: ease 0.3s;
      border: 1px solid blue;
      z-index: 200;

      > div {
        padding: 0 80px;

        form {
          margin: 0 auto;
          width: 850px;

          fieldset {
            ${flexSet("center", "center")};
            height: 80px;

            span {
              transform: ${!searchActive && "translateY(-70px)"};
              opacity: ${searchActive ? 1 : 0};
              text-align: center;
              line-height: 80px;
              transition: ease 0.2s;

              &::before {
                content: "";
                position: absolute;
                height: 2px;
                background-color: #000;
                border-radius: 1px;
                top: 60px;
                width: 18px;
                transform: translateX(5px);
              }
            }
          }

          > div {
            ${flexSet("center")}
            height: ${searchActive ? 100 : 0}px;
            transition: ease 0.2s;

            > div {
              ${flexSet("space-between", "center")};
              width: ${searchActive ? "100%" : "300px"};
              height: ${searchActive ? "66px" : "48px"};
              transform: ${!searchActive &&
              "translate(18px, -155px) scale(0.4)"};
              opacity: ${searchActive ? 1 : 0};
              border: 1px solid #ddd;
              border-radius: 33px;
              background-color: ${active ? "#f8f8f8" : "#fff"};
              transition: 0.2s ease;
            }
          }
        }
      }
    `;
  }}
`;

const SearchInput = styled.div`
  ${({ active, checkin, checkout, guest, theme, searchActive }) => {
    const isFirstActive = active === 1;
    const isSecondActive = active === 2;
    const isThirdActive = active === 3;
    const isForthActive = active === 4;
    return css`
      ${buttonStyle("label", "input", false, isFirstActive, searchActive)};
      ${checkin &&
      buttonStyle("div", "div", false, isSecondActive, searchActive)}
      ${checkout &&
      buttonStyle("div", "div", false, isThirdActive, searchActive)}
      ${guest && buttonStyle("div", "div", true, isForthActive, searchActive)}
      button {
        width: ${active ? 80 : 48}px;
        height: 48px;
        border: 1px solid ${theme.primaryColor};
        border-radius: 24px;
        background-color: ${theme.primaryColor};
        cursor: pointer;
        transition: ease 0.2s;

        div {
          ${flexSet("center", "center")}
          color: #fff;
          span {
            &:first-child {
              font-size: 15px;
            }

            &:last-child {
              ${!active && displayNone};
              margin-left: 8px;
              font-size: 16px;
              font-weight: 600;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    `;
  }}
`;

const SearchDivider = styled.div`
  ${({ first, second, third, active }) => {
    const firstActive = first && active === 1;
    const secondActive = (first || second) && active === 2;
    const thirdActive = (second || third) && active === 3;
    const forthActive = third && active === 4;
    return css`
      ${(firstActive || secondActive || thirdActive || forthActive) &&
      visibilityHidden}
    `;
  }}

  ${flexSet("center", "center")}
  border-right: 1px solid #ddd;
  height: 32px;
`;

export default Search;
