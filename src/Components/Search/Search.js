import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

// LINK redux action
import {
  refSearchMenu,
  closeProfileModal,
  resetGuestNumber,
  takeLocation,
  resetLoction,
} from "../../Redux/Actions/Index";

//LINK component
import Location from "./Location/Location";
import Calendar from "./Calendar/Calendar";
import Guest from "./Guest/Guest";

//LINK style
import { SearchMenu, SearchInput, SearchDivider } from "./Search.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

//LINK API
import { SEARCH_API } from "../../config";

const Search = ({ searchActive, history }) => {
  const [isDividerActive, setIsDividerActive] = useState(0);
  const [isInputActive, setIsInputActive] = useState(0);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [locationValue, setLocationValue] = useState("");
  const [address, setAddress] = useState([]);
  const [isBtnClicked, setIsBtnClicked] = useState(true);
  const [booking, setBooking] = useState({
    startDate: "날짜추가",
    endDate: "날짜추가",
  });
  // const [totalGuest, setTotalGuest] = useState(0);

  console.log("------------search-------------");

  // ANCHOR redux
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const location = bookReducer.location;
  const startDate = bookReducer.startDate;
  const endDate = bookReducer.endDate;
  const adults = bookReducer.adults;
  const children = bookReducer.children;
  const babies = bookReducer.babies;
  let totalGuest = adults + children + babies;

  const dispatch = useDispatch();
  const refSearchMenuAction = (searchs) => dispatch(refSearchMenu(searchs));
  const takeLocationAction = (place) => dispatch(takeLocation(place));
  const closeProfileModalAction = () => dispatch(closeProfileModal());
  const resetGuestNumberAction = () => dispatch(resetGuestNumber());
  const resetLoctionAction = () => dispatch(resetLoction());

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
    e.stopPropagation();
    setIsBtnClicked(true);
    const { id } = e.currentTarget.dataset;
    isInputActive === +id
      ? setIsBtnClicked(!isBtnClicked)
      : setIsInputActive(+id);
  };

  // ANCHOR ref
  const searchField = useRef();

  useEffect(() => {
    refSearchMenuAction(searchField?.current);
  }, []);

  const deactiveInput = (e) => {
    e.stopPropagation();
    if (!searchField.current.contains(e.target) && isInputActive !== 0) {
      setIsInputActive(0);
      setIsBtnClicked(false);
      closeProfileModalAction();
    }
  };

  // SECTION Location Input

  const searchArea = useCallback(
    (e) => {
      const { value } = e.target;
      // TODO will post with querystring
      value ? getAddress() : setAddress([]);
      locationValue !== value && setLocationValue(value);
      takeLocationAction(value);
    },
    [locationValue]
  );

  const getAddress = async () => {
    try {
      const response = await axios.get(
        SEARCH_API + `place_id=${locationValue}`
      );
      const validation = response && response.status === 200;
      validation && new Error("cannot fetch the data");
      const { stay } = await response.data;
      setAddress(stay);
    } catch (error) {
      console.log("!!error fetch data!!");
    }
  };

  const clearLocationValue = () => {
    setLocationValue("");
    setAddress([]);
    resetLoctionAction();
  };

  const confirmCurrentAddress = (latitude, longitude) => {
    setLocationValue("가까운 여행지 둘러보기");
    takeLocationAction("가까운 여행지 둘러보기");
    setCurrentLocation([latitude, longitude]);
    setIsInputActive(2);
  };

  const confirmAddress = (keyword, fullname) => {
    setLocationValue(fullname);
    takeLocationAction(fullname);
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

  // SECTION Guest Input
  const clearGuestStaus = () => {
    resetGuestNumberAction();
    totalGuest = 0;
  };

  // SECTION submit action

  const extractNumFromDate = (dateInfo) => {
    const name = ["month", "day"];
    let result = {};
    const form = [0, 1].map((item) => dateInfo.split(" ")[item]);
    form.map(
      (date, idx) => (result[name[idx]] = date.slice(0, date.length - 1))
    );
    return result;
  };

  const submitInfo = (e) => {
    e.preventDefault();
    // TODO will post with API
    const queryStartDate = startDate && extractNumFromDate(startDate);
    const queryEndDate = endDate && extractNumFromDate(endDate);

    history.push(
      `/homelist?place_id=${location}&checkin_date=2020-${queryStartDate.month}-${queryStartDate.day}&checkout_date=2020-${queryEndDate.month}-${queryEndDate.day}&adults=${adults}&children=${children}&infants=${babies}`
    );
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

                {/* ANCHOR Location modal */}
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

                {/* ANCHOR Calendar modal*/}
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
                      <div>
                        {totalGuest ? `게스트 ${totalGuest}명` : "게스트추가"}
                      </div>
                    </div>
                    <span onClick={clearGuestStaus}>
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
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

                {/* ANCHOR Guest modal */}
                {isInputActive === 4 && <Guest btnActive={isBtnClicked} />}
              </div>
            </div>
          </form>
        </div>
      </SearchMenu>
    </>
  );
};

export default withRouter(Search);
