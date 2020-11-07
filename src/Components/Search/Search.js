import React, { useState, useCallback, useRef } from "react";
import axios from "axios";

//LINK file
import Location from "./Location/Location";
import Calendar from "./Calendar/Calendar";

//LINK style
import { SearchMenu, SearchInput, SearchDivider } from "./Search.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

//LINK Mockdata
const API = "/data/Location/Location.json";

const Search = ({ searchActive }) => {
  const [isDividerActive, setIsDividerActive] = useState(0);
  const [isInputActive, setIsInputActive] = useState(0);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [locationValue, setLocationValue] = useState("");
  const [address, setAddress] = useState([]);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [booking, setBooking] = useState({
    startDate: "날짜추가",
    endDate: "날짜추가",
  });

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
  const activeInput = (e) => {
    const { id } = e.currentTarget.dataset;
    const isBtnStatus = !isBtnClicked;
    isInputActive === +id
      ? setIsBtnClicked(isBtnStatus)
      : setIsInputActive(+id);
  };

  const searchField = useRef();

  const deactiveInput = (e) => {
    !searchField.current.contains(e.target) &&
      isInputActive !== 0 &&
      setIsInputActive(0);
  };

  // SECTION Location Input

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

  // SECTION Booking Input

  const getBookingStatus = (startDate, endDate) => {
    setBooking({ startDate, endDate });
  };

  const clearBookingStaus = () => {
    setBooking({ startDate: "날짜추가", endDate: "날짜추가" });
  };

  // SECTION submit action

  const submitInfo = (e) => {
    e.preventDefault();
    // TODO will post with API
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
                    btnActive={isBtnClicked}
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
                      <div>{booking.startDate}</div>
                    </div>
                    <span onClick={clearBookingStaus}>
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
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
                      <div>{booking.endDate}</div>
                    </div>
                    <span onClick={clearBookingStaus}>
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                  </div>
                </SearchInput>

                {/* ANCHOR Calendar */}
                {(isInputActive === 2 || isInputActive === 3) && (
                  <Calendar
                    active={isInputActive}
                    btnActive={isBtnClicked}
                    bookStatus={booking}
                    booking={getBookingStatus}
                  />
                )}

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

export default Search;
