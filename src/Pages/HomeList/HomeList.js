import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MordalPortal from "./MordalPortal";
import Card from "./Components/Card";
import GoogleMap from "./Components/GoogleMap";
import MoreFilters from "./Components/Filters/MoreFilters";
import CancellationFlexibility from "./Components/Filters/CancellationFlexibility";
import TypeOfPlace from "./Components/Filters/TypeOfPlace";
import InstantBook from "./Components/Filters/InstantBook";
import ModalPortal from "./MordalPortal";

//함수
const HomeList = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(0);

  const useOpenModal = () => {
    setModal(true);
  };

  const useCloseModal = () => {
    setModal(false);
  };

  const useOpenFilter = (e) => {
    switch (e.target.id) {
      case "1":
        setFilter(1);
        break;
      case "2":
        setFilter(2);
        break;
      case "3":
        setFilter(3);
        break;
      case "4":
        setFilter(4);
        break;
      case "5":
        setFilter(5);
        break;
      default:
        console.log("It works");
    }
  };

  return (
    <>
      {/* 필터리스트 */}
      {filter === 5 && modal && (
        <ModalPortal>
          <MoreFilters onClose={useCloseModal} />
        </ModalPortal>
      )}

      <WrapperHL fixed={modal} filter={filter}>
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
                      <div
                        id="1"
                        className="btnFilter"
                        name="1"
                        onClick={(useOpenFilter, useOpenModal)}
                      >
                        <Button>
                          <span>유연한 환불 정책</span>
                        </Button>
                        <div className="filterModal">
                          {filter === 1 && modal && (
                            <CancellationFlexibility onClose={useCloseModal} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        id="2"
                        className="btnFilter"
                        name="2"
                        onClick={useOpenFilter}
                      >
                        <Button>
                          <span>숙소 유형</span>
                        </Button>
                        <div className="filterModal">
                          {filter === 2 && modal && (
                            <TypeOfPlace onClose={useCloseModal} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        id="3"
                        className="btnFilter"
                        name="3"
                        onClick={useOpenFilter}
                      >
                        <Button>
                          <span>요금</span>
                        </Button>
                        <div className="filterModal"></div>
                      </div>
                    </div>

                    <div>
                      <div
                        id="4"
                        className="btnFilter"
                        name="4"
                        onClick={useOpenFilter}
                      >
                        <Button>
                          <span>즉시 예약</span>
                        </Button>
                        <div className="filterModal">
                          {filter === 4 && modal && (
                            <InstantBook onClose={useCloseModal} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        id="5"
                        className="btnFilter"
                        name="5"
                        onClick={(useOpenModal, useOpenFilter)}
                      >
                        <Button>
                          <span>필터 추가하기</span>
                        </Button>
                        <div className="filterModal"></div>
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

//스타일
const WrapperHL = styled.div`
  width: 98vw;
  height: 100%;
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  /* Morefilters 생길 때 이것도 변경되게 하기 */
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
    width: 540px;
    & > div {
      & > .btnFilter {
        margin-right: 5px;
        position: relative;
        & > .filterModal {
          position: absolute;
          top: 20px;
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
