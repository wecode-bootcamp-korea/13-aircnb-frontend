import React, { useState } from "react";
import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { flexSet, displayNone, visibilityHidden } from "../../Styles/Theme";

const Search = () => {
  const [isDividerActive, setIsDividerActive] = useState(0);
  const [isInputActive, setIsInputActive] = useState(0);

  const hoverInput = (e) => {
    const { id } = e.target.dataset;
    setIsDividerActive(+id);
  };

  const hoverOutInput = (e) => {
    setIsDividerActive(0);
  };

  const activeInput = (e) => {
    const { id } = e.target.dataset;
    setIsInputActive(+id);
  };

  return (
    <SearchMenu>
      <div>
        <form>
          <fieldset>
            <span>숙소</span>
          </fieldset>
          <div>
            <div>
              <SearchInput>
                <label
                  htmlFor="location"
                  onMouseEnter={hoverInput}
                  onMouseLeave={hoverOutInput}
                  onFocus={activeInput}
                  data-id="1"
                >
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
              </SearchInput>
              <SearchDivider active={isDividerActive} first />
              <SearchInput checkin>
                <div
                  onMouseEnter={hoverInput}
                  onMouseLeave={hoverOutInput}
                  onFocus={activeInput}
                  data-id="2"
                >
                  <div>
                    <div>체크인</div>
                    <div>날짜추가</div>
                  </div>
                </div>
              </SearchInput>
              <SearchDivider active={isDividerActive} second />
              <SearchInput checkout>
                <div
                  onMouseEnter={hoverInput}
                  onMouseLeave={hoverOutInput}
                  data-id="3"
                >
                  <div>
                    <div>체크아웃</div>
                    <div>날짜추가</div>
                  </div>
                </div>
              </SearchInput>
              <SearchDivider active={isDividerActive} third />
              <SearchInput guest>
                <div
                  onMouseEnter={hoverInput}
                  onMouseLeave={hoverOutInput}
                  data-id="4"
                >
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
              </SearchInput>
            </div>
          </div>
        </form>
      </div>
    </SearchMenu>
  );
};

const buttonStyle = (firstNode, secondNode, width, button) => css`
  > ${firstNode} {
    ${flexSet("flex-start", "center")}
    height: 66px;
    border-radius: 33px;
    padding: ${button ? "14px 10px 14px 32px" : "14px 32px"};
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }

    > div {
      width: ${width};
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
    ${button &&
    css`
      button {
        width: 48px;
        height: 48px;
        border: 1px solid ${({ theme }) => theme.primaryColor};
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primaryColor};
        div {
          color: #fff;
          span {
            &:first-child {
              font-size: 17px;
            }

            &:last-child {
              ${displayNone}
            }
          }
        }
      }
    `}
  }
`;

const SearchMenu = styled.div`
  width: 100%;
  border: 1px solid blue;

  > div {
    padding: 0 80px;

    form {
      margin: 0 auto;
      width: 850px;

      fieldset {
        ${flexSet("center", "center")};
        height: 80px;

        span {
          text-align: center;
          line-height: 80px;
          &::before {
            content: "";
            height: 2px;
            background-color: #000;
            border-radius: 1px;
            position: absolute;
            top: 60px;
            width: 18px;
            transform: translateX(5px);
          }
        }
      }

      > div {
        ${flexSet("center")}
        height: 100px;
        > div {
          ${flexSet("center", "center")}
          height: 66px;
          border: 1px solid #ddd;
          border-radius: 33px;
          background-color: #fff;
        }
      }
    }
  }
`;

const SearchInput = styled.div`
  ${buttonStyle("label", "input", "204px")}
  ${({ checkin, checkout }) =>
    (checkin || checkout) && buttonStyle("div", "div", "120px")}
  ${({ guest }) => guest && buttonStyle("div", "div", "120px", true)}
`;

const SearchDivider = styled.div`
  ${flexSet("center", "center")}
  border-right: 1px solid #ddd;
  height: 32px;
  ${({ first, active }) => first && active === 1 && visibilityHidden}
  ${({ first, second, active }) =>
    (first || second) && active === 2 && visibilityHidden}
  ${({ second, third, active }) =>
    (second || third) && active === 3 && visibilityHidden}
  ${({ third, active }) => third && active === 4 && visibilityHidden}
`;

export default Search;
