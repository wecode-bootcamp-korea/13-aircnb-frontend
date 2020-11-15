import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Card from "./Components/Card";
import GoogleMap from "./Components/GoogleMap";
import MoreFilters from "./Components/Filters/MoreFilters";
import CancellationFlexibility from "./Components/Filters/CancellationFlexibility";
import TypeOfPlace from "./Components/Filters/TypeOfPlace";
import InstantBook from "./Components/Filters/InstantBook";
import ModalPortal from "./MordalPortal";
import { useSelector } from "react-redux";
import Pages from "./Components/Pages";
import { SEARCH_LIST_API } from "../../config";

//함수
const HomeList = (props) => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(0);
  const [onoff, setOnOff] = useState(false);
  const [stay, setStay] = useState([]);
  const [allValues, setAllValues] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [offset, setOffset] = useState(0);
  const LIMIT = 5;

  const PATHNAME = window.location.pathname;
  // console.log(PATHNAME, "===================");
  // const API = `http://10.58.1.225:8000/homelist${props.location.search}&limit=${LIMIT}&offset=${offset}`;
  // const API = "/Data/data.json";
  // const LIKELIST = `http://10.58.1.75:8000/user/likelist&limit=${LIMIT}&offset=${offset}`;
  //redux
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const userToken = signReducer.userToken;

  async function fetchData() {
    // console.log(props.location.search, "hahaha this is id");
    const API = `${SEARCH_LIST_API}${props.location.search}`;

    if (PATHNAME === "/homelist") {
      const res = await fetch(API, {
        headers: {
          AUTHORIZATION: userToken,
        },
      });
      res.json().then((res) => setStay(res.stay));
    }
    // else {
    //   const res = await fetch(LIKELIST, {
    //     headers: {
    //       AUTHORIZATION: userToken,
    //     },
    //   });
    //   res.json().then((res) => setStay(res.stay));
    // }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const urlParams = new URLSearchParams(props.location.search);

  useEffect(() => {
    const result = [];
    for (const [key, value] of urlParams) {
      result.push({ [key]: value });
    }
    setAllValues(result);
  }, []);

  const fetchHome = async (e) => {
    const LIMIT = 5;
    // setOffset(Number(e.target.id) * LIMIT);
    const offset = Number(e.target.id) * LIMIT;
    const nextLimit = offset + 5;
    // const API = `${SEARCH_LIST_API}?${props.location.search}`;
    // console.log("==================", props.location);
    const API = `${SEARCH_LIST_API}${props.location.search}&limit=${nextLimit}&offset=${offset}`;
    // const LIKELIST = `http://10.58.1.75:8000/user/likelist&limit=${LIMIT}&offset=${offset}`;
    fetch(API, { headers: { AUTHORIZATION: userToken } })
      .then((res) => res.json())
      .then((res) => setStay(res.stay));
    // }
    // else {
    //   fetch(LIKELIST, {
    //     headers: {
    //       AUTHORIZATION: userToken,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((res) => setStay(res.stay));
    // }
  };

  const fetchFilter = (num) => {
    const LIMIT = 5;
    // const nextOffset = offset + LIMIT;
    const API = `${SEARCH_LIST_API}${props.location.search}&limit=${LIMIT}&offset=0&beds=${num.beds}&rooms=${num.rooms}$bathrooms=${num.bathrooms}`;
    fetch(API, {
      headers: {
        AUTHORIZATION: userToken,
      },
    })
      .then((res) => res.json())
      .then((res) => setStay(res.stay));
  };

  const fetchLike = () => {
    const LIMIT = 5;
    // const nextOffset = offset + LIMIT;
    const API = `http://10.58.1.225:8000/homelist${props.location.search}&limit=${LIMIT}&offset=0`;
    fetch(API, {
      method: "POST",
      headers: {
        AUTHORIZATION: userToken,
        stay_id: `${props.id}`,
      },
    });
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openFilter = (e) => {
    setOnOff(true);
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
      default:
    }
  };
  const closeFilter = () => {
    // TODO filter
    setOnOff(false);
  };
  return (
    <>
      {/* 필터리스트 */}
      {modal && (
        <ModalPortal>
          <MoreFilters onClose={closeModal} />
        </ModalPortal>
      )}
      <WrapperHL fixed={modal}>
        <section>
          <div>haha</div>
        </section>
        <section>
          <div>
            <div>
              <div>
                <Filter>
                  {allValues.length && (
                    <p>
                      숙박 {stay.length}건 ·{" "}
                      {allValues[1].checkin_date &&
                        allValues[1].checkin_date +
                          " ~ " +
                          allValues[2].checkout_date}
                      {Number(allValues[3].adults) !== 0 &&
                        " · 게스트 " +
                          (Number(allValues[3].adults) +
                            Number(allValues[4].children)) +
                          "명"}
                    </p>
                  )}
                  <h1>{stay[0] && stay[0].city}의 숙소</h1>
                  {PATHNAME === "/homelist" && (
                    <div className="btns">
                      <div>
                        <div className="btnFilter">
                          <Button id="1" onClick={openFilter}>
                            <span id="1" onClick={openFilter}>
                              유연한 환불 정책
                            </span>
                          </Button>
                          <div className="filterModal">
                            {filter === 1 && onoff && (
                              <CancellationFlexibility onClose={closeFilter} />
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="btnFilter">
                          <Button id="2" onClick={openFilter}>
                            <span id="2" onClick={openFilter}>
                              숙소 유형
                            </span>
                          </Button>
                          <div className="filterModal">
                            {filter === 2 && onoff && (
                              <TypeOfPlace onClose={closeFilter} />
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="btnFilter">
                          <Button>
                            <span>요금</span>
                          </Button>
                          <div className="filterModal"></div>
                        </div>
                      </div>
                      <div>
                        <div className="btnFilter">
                          <Button id="4" onClick={openFilter}>
                            <span id="4" onClick={openFilter}>
                              즉시 예약
                            </span>
                          </Button>
                          <div className="filterModal">
                            {filter === 4 && onoff && (
                              <InstantBook onClose={closeFilter} />
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          id="5"
                          className="btnFilter"
                          name="5"
                          onClick={openModal}
                        >
                          <Button onClick={openModal}>
                            <span>필터 추가하기</span>
                          </Button>
                          <div className="filterModal"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </Filter>
              </div>
              <div>
                {stay[0] &&
                  stay.map((el) => {
                    return (
                      <Card
                        fetchLike={fetchLike}
                        id={el.id}
                        name={el.name}
                        province={el.province}
                        city={el.city}
                        address1={el.address1}
                        address2={el.address2}
                        latitude={el.latitude}
                        longitude={el.longitude}
                        price={el.price}
                        discount_price={el.discount_price}
                        subcategory={el.subcategory}
                        capacity={el.capacity}
                        beds={el.beds}
                        rooms={el.rooms}
                        bathrooms={el.bathrooms}
                        imgUrl={el.imgUrl}
                        review={el.review}
                        like={el.has_like}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="map">
              <GoogleMap />
            </div>
          </div>
          <div>
            <Pages
              currentIndex={currentIndex}
              fetchHome={fetchHome}
              d
              PATHNAME={PATHNAME}
            />
          </div>
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
  /* top: -80px; */
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
      height: 178px;
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
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50px;
          z-index: 50;
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
