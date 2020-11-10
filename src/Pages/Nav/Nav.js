import React, { useState, useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// LINK redux Action
import {
  toggleProfileModal,
  closeProfileModal,
  refNavbar,
  refProfileButton,
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
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [refs, setRefs] = useState();

  // ANCHOR redux state
  const modalReducer = useSelector(({ modalReducer }) => modalReducer);
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const isProfileModalActive = modalReducer.isProfileModalActive;
  const navbar = modalReducer.navbar;
  const profile = modalReducer.profile;
  const profileButton = modalReducer.profileButton;
  const mapMenu = modalReducer.mapMenu;
  const startDate = bookReducer.startDate;
  const endDate = bookReducer.endDate;
  const userToken = signReducer.userToken;

  // ANCHOR redux function
  const dispatch = useDispatch();
  const refNavbarAction = (nav) => dispatch(refNavbar(nav));
  const refProfileButtonAction = (button) => dispatch(refProfileButton(button));
  const toggleProfileModalAction = () => dispatch(toggleProfileModal());
  const closeProfileModalAction = () => dispatch(closeProfileModal());

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
    !navbar?.contains(e.target) && isSearchActive && setIsSearchActive(false);
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
  }, [isSearchActive]);

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
                <span>
                  {endDate ? `${startDate}-${endDate}` : "검색 시작하기"}
                </span>
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
      <Search searchActive={isSearchActive} searchHandler={setIsSearchActive} />
      <ProfileMenuList />
    </Navbar>
  );
};

export default Nav;
