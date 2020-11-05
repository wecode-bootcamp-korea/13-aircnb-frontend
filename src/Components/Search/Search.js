import React, { useState, useEffect, useCallback, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

//LINK file
import Location from "./Location/Location";
import Calendar from "./Calendar/Calendar";

//LINK others
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { flexSet, displayNone, visibilityHidden } from "../../Styles/Theme";

//LINK Mockdata
const API = "/data/Location/Location.json";

const Search = ({ searchActive }) => {
  const [isDividerActive, setIsDividerActive] = useState(0);
  const [isInputActive, setIsInputActive] = useState(0);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [locationValue, setLocationValue] = useState("");
  const [address, setAddress] = useState([]);

  console.log("------------search-------------");

  //NOTE for hiding menu divider interactive
  const hoverInput = useCallback(
    (e) => {
      const { id } = e.currentTarget.dataset;
      isDividerActive !== +id && setIsDividerActive(+id);
    },
    [isDividerActive]
  );

  const hoverOutInput = useCallback(
    (e) => {
      const { id } = e.currentTarget.dataset;
      const validation = isDividerActive !== 0 && isDividerActive !== +id;
      validation &&
        !e.currentTarget.contains(e.relatedTarget) &&
        setIsDividerActive(0);
    },
    [isDividerActive]
  );

  //NOTE for active menu styling
  const activeInput = useCallback(
    (e) => {
      const { id } = e.currentTarget.dataset;
      isInputActive !== +id && setIsInputActive(+id);
    },
    [isInputActive]
  );

  const searchField = useRef();

  const deactiveInput = (e) => {
    !searchField.current.contains(e.target) &&
      isInputActive &&
      setIsInputActive(0);
  };

  const searchArea = useCallback(
    (e) => {
      const { value } = e.target;
      // TODO will post with querystring
      value ? getAddress() : setAddress([]);
      locationValue !== value && setLocationValue(value);
    },
    [locationValue]
  );

  const getAddress = async () => {
    try {
      const response = await axios.get(API);
      const validation = response && response.status === 200;
      validation && new Error("cannot fetch the data");
      const { location } = await response.data;
      setAddress(location);
    } catch (error) {
      console.log("!!error fetch data!!");
    }
  };

  const clearLocationValue = () => {
    setLocationValue("");
    setAddress([]);
  };

  const confirmCurrentAddress = (latitude, longitude) => {
    setLocationValue("가까운 여행지 둘러보기");
    setCurrentLocation([latitude, longitude]);
    setIsInputActive(2);
  };

  const confirmAddress = (keyword, fullname) => {
    setLocationValue(fullname);
    setCurrentLocation([keyword]);
    setIsInputActive(2);
  };

  const submitInfo = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SearchMenu
        searchActive={searchActive}
        active={isInputActive}
        onClick={deactiveInput}
      >
        <div>
          <form>
            <fieldset>
              <span>숙소</span>
            </fieldset>
            <div>
              <div ref={searchField}>
                <SearchInput
                  searchActive={searchActive}
                  active={isInputActive}
                  input={locationValue}
                  onClick={activeInput}
                  onMouseOver={hoverInput}
                  onMouseOut={hoverOutInput}
                  data-id="1"
                  location
                >
                  <label htmlFor="location">
                    <div>
                      <div>위치</div>
                      <input
                        type="text"
                        id="location"
                        placeholder="어디로 여행가세요?"
                        value={locationValue}
                        onChange={searchArea}
                      />
                    </div>
                    <span onClick={clearLocationValue}>
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                  </label>
                </SearchInput>

                {/* ANCHOR Location popup */}
                {isInputActive === 1 && (
                  <Location
                    current={confirmCurrentAddress}
                    address={confirmAddress}
                    searchResult={address}
                  />
                )}

                <SearchDivider active={isDividerActive} first />
                <SearchInput
                  active={isInputActive}
                  searchActive={searchActive}
                  onMouseOver={hoverInput}
                  onMouseOut={hoverOutInput}
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
                  searchActive={searchActive}
                  onMouseOver={hoverInput}
                  onMouseOut={hoverOutInput}
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

                {/* ANCHOR Calendar */}
                {isInputActive === 2 && <Calendar />}

                <SearchDivider active={isDividerActive} third />
                <SearchInput
                  active={isInputActive}
                  searchActive={searchActive}
                  onMouseOver={hoverInput}
                  onMouseOut={hoverOutInput}
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
    </>
  );
};

// STUB button template
const buttonStyle = (
  firstNode,
  secondNode,
  last,
  active,
  search,
  input = null
) => css`
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
      width: ${(secondNode === "input" && 204) || (last && 120)}px;
      transition: 0.2s ease;
      font-size: 13px;

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
    > span {
      ${!input && displayNone}
    }
  }
`;

// SECTION Styled
const SearchMenu = styled.div`
  ${({ searchActive, active }) => {
    return css`
      border: 1px solid red;
      position: absolute;
      top: 0px;
      width: 100%;
      transition: ease 0.3s;
      border: 1px solid blue;
      z-index: 101;

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
  ${({ active, checkin, checkout, guest, theme, searchActive, input }) => {
    const isFirstActive = active === 1;
    const isSecondActive = active === 2;
    const isThirdActive = active === 3;
    const isForthActive = active === 4;
    return css`
      ${buttonStyle(
        "label",
        "input",
        false,
        isFirstActive,
        searchActive,
        input
      )};
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
              font-size: 16 px;
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
