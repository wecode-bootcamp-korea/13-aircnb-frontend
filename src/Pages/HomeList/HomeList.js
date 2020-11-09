import React from "react";
import styled, { keyframes } from "styled-components";

import Card from "./Components/Card";
import GoogleMap from "./Components/GoogleMap";

import MoreFilters from "./Components/Filters/MoreFilters";
import RoomsAndBeds from "./Components/Filters/RoomsAndBeds";
import Price from "./Components/Filters/Price";
import CancellationFlexibility from "./Components/Filters/CancellationFlexibility";
import TypeOfPlace from "./Components/Filters/TypeOfPlace";
import InstantBook from "./Components/Filters/InstantBook";

//스타일
const WrapperHL = styled.div`
  width: 98vw;
  height: 100%;
  position: relative;
  /* position: fixed; */
  & > section:first-child {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 98vw;
    margin-bottom: 80px;
    //네비게이션바 여기 조절
  }

  & > section:nth-child(2) {
    position: relative;
    top: 80px;
    left: 0;
    width: 98vw;
    display: flex;
    flex-direction: column;

    & > div:first-child {
      display: flex;
      width: 98vw;
      //리스트
      & > div:first-child {
        width: 840px;
        height: auto;
        //필터
        & > div:first-child {
          width: 840px;
          height: 180px;
          padding: 0 24px;
          padding-top: 50px;
          margin-bottom: 10px;
        }
        & > div:nth-child(2) {
          padding: 0 24px;
        }
      }

      & > div:nth-child(2).map {
        width: calc(98vw - 840px);
        height: 100vh;
        position: sticky;
        top: 80px;
        right: 0;
      }
    }

    & > div:nth-child(2) {
      display: block;
      width: 98vw;
      height: 50px;
    }
  }

  & > section:nth-child(3) {
    display: block;
    width: 98vw;
    height: 300px;
  }
`;

const Filter = styled.div`
  & > p {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 8px;
  }

  & > h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 800;
  }
  & > div.btns {
    display: flex;
    margin: 20px 0;
    & > div {
      & > .btnFilter {
        margin-right: 5px;
        position: relative;
        & > .modalFilter {
          position: absolute;
          top: 50px;
          left: 0;
          border-radius: 13px;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px;
          height: auto;
          z-index: 300;
        }
      }
    }
  }
`;

const Button = styled.button`
  margin-right: 5px;
  cursor: pointer;
  padding: 8px 16px;
  height: 36px;
  border-radius: 30px;
  border: 1px solid rgb(176, 176, 176);
  background-color: white;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    outline: none;
    border: 1px solid rgb(34, 34, 34);

    box-shadow: 1px -1px rgb(34, 34, 34), -0.7px -1px rgb(34, 34, 34),
      1px 1px rgb(34, 34, 34), -0.7px 1px rgb(34, 34, 34);
  }
  & > span {
    font-size: 14px;
    color: rgb(34, 34, 34);
    font-stretch: 100%;
    font-weight: 400;
    line-height: 18px;
  }
`;

const MD = () => {
  return <MoreFilters />;
};

//함수
const HomeList = () => {
  return (
    <>
      {/* 필터리스트 */}
      {/* <MoreFilters /> */}
      <WrapperHL>
        <section>
          <div>haha</div>
        </section>

        <section>
          <div>
            <div>
              <div>
                <Filter>
                  <p>
                    300개 이상의 숙소 · 11월 20일 - 12월 14일 (±3일) · 게스트
                    3명
                  </p>
                  <h1>제주시의 숙소</h1>
                  <div className="btns">
                    <div>
                      <div className="btnFilter">
                        <Button>
                          <span>유연한 환불 정책</span>
                        </Button>
                        {/* <div className="modalFilter">
                          <CancellationFlexibility />
                        </div> */}
                      </div>
                    </div>

                    <div>
                      <div className="btnFilter">
                        <Button>
                          <span>숙소 유형</span>
                        </Button>
                      </div>
                      <div className="modalFilter">
                        <TypeOfPlace />
                      </div>
                    </div>

                    <div>
                      <div className="btnFilter">
                        <Button>
                          <span>요금</span>
                        </Button>
                      </div>
                      {/* <div className="modalFilter">
                        <Price />
                      </div> */}
                    </div>

                    <div>
                      <div className="btnFilter">
                        <Button>
                          <span>즉시 예약</span>
                        </Button>
                      </div>
                      {/* <div className="modalFilter">
                        <InstantBook />
                      </div> */}
                    </div>

                    <div>
                      <div className="btnFilter">
                        <Button>
                          <span>필터 추가하기</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Filter>
              </div>

              <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>

            <div className="map">
              <GoogleMap />
            </div>
          </div>

          <div></div>
        </section>

        <section>
          <div></div>
        </section>
      </WrapperHL>
    </>
  );
};

export default HomeList;
