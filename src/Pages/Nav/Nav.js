import React, { useState, useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// LINK redux Action
import {
  toggleProfileModal,
  closeProfileModal,
  refNavbar,
  closeNavbar,
  refProfileButton,
  toggleNavbar,
} from "../../Redux/Actions/Index";

// LINK components
import Search from "../../Components/Search/Search";
import ProfileMenuList from "../../Components/ProfileMenuList/ProfileMenuList";

// LINK style item
import { Navbar, LogoSet, SearchTrigger, ProfileTrigger } from "./Nav.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faBars,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  // const [isSearchActive, setIsSearchActive] = useState(false);
  const [refs, setRefs] = useState();

  // ANCHOR redux state
  const modalReducer = useSelector(({ modalReducer }) => modalReducer);
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const isProfileModalActive = modalReducer.isProfileModalActive;
  const isNavbarActive = modalReducer.isNavbarActive;
  const navbar = modalReducer.navbar;
  const profile = modalReducer.profile;
  const profileButton = modalReducer.profileButton;
  // const mapMenu = modalReducer.mapMenu;
  const location = bookReducer.location;
  const startDate = bookReducer.startDate;
  const endDate = bookReducer.endDate;
  const adults = bookReducer.adults;
  const children = bookReducer.children;
  const babies = bookReducer.babies;
  let totalGuest = adults + children + babies;
  const userToken = signReducer.userToken;

  // ANCHOR redux function
  const dispatch = useDispatch();
  const refNavbarAction = (nav) => dispatch(refNavbar(nav));
  const refProfileButtonAction = (button) => dispatch(refProfileButton(button));
  const toggleProfileModalAction = () => dispatch(toggleProfileModal());
  const closeProfileModalAction = () => dispatch(closeProfileModal());
  const toggleNavbarAction = () => dispatch(toggleNavbar());
  const closeNavbarAction = () => dispatch(closeNavbar());

  console.log("------------nav-------------");

  // REVIEW ref nav declare
  useEffect(() => {
    const refs = {};
    refs["navbar"] = createRef();
    refs["profileButton"] = createRef();
    setRefs(refs);
  }, []);

  useEffect(() => {
    if (refs) {
      refNavbarAction(refs.navbar?.current);
      refProfileButtonAction(refs.profileButton?.current);
    }
  }, [refs]);

  const closeSearch = (e) => {
    !navbar?.contains(e.target) && isNavbarActive && closeNavbarAction();
  };

  const closeProfile = (e) => {
    !profileButton?.contains(e.target) &&
      !profile?.contains(e.target) &&
      isProfileModalActive &&
      closeProfileModalAction();
  };

  useEffect(() => {
    window.addEventListener("click", closeSearch);
    return () => {
      window.removeEventListener("click", closeSearch);
    };
  }, [isNavbarActive]);

  useEffect(() => {
    window.addEventListener("click", closeProfile);
    return () => {
      window.removeEventListener("click", closeProfile);
    };
  }, [isProfileModalActive]);

  return (
    <Navbar ref={refs && refs["navbar"]} data-name="nav">
      <section>
        <div>
          <LogoSet>
            <Link to="/main">
              <div>
                <span>
                  <img
                    src="https://media.vlpt.us/images/jjburi/post/510cf7af-d3bb-4656-8df5-347dd74fa5b6/logo_airc&b.png"
                    alt=""
                  />
                </span>
                <span>aircnb</span>
              </div>
            </Link>
          </LogoSet>

          {/* SECTION search trigger */}
          <SearchTrigger onClick={toggleNavbarAction} active={isNavbarActive}>
            <div>
              <button tabIndex="0">
                <div>
                  <span>
                    {totalGuest || endDate || location
                      ? `${location ? location : "장소입력"} | ${
                          endDate ? `${startDate}-${endDate}` : "날짜입력"
                        } | ${
                          totalGuest ? `게스트 ${totalGuest}명` : "게스트 추가"
                        }`
                      : "검색 시작하기"}
                  </span>
                </div>
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </button>
            </div>
          </SearchTrigger>

          {/* SECTION Profile trigger */}
          <ProfileTrigger
            ref={refs && refs["profileButton"]}
            onClick={toggleProfileModalAction}
            active={isProfileModalActive}
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
      <Search
        searchActive={isNavbarActive}
        searchHandler={toggleNavbarAction}
      />
      <ProfileMenuList />
    </Navbar>
  );
};

export default Nav;
