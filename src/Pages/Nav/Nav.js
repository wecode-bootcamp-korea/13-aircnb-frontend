import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  console.log("------------nav-------------");

  // REVIEW ref declare
  const nav = useRef();
  const profile = window.document.querySelector(".sc-giIncl");

  const closeSearch = (e) => {
    !nav.current.contains(e.target) &&
      isSearchActive &&
      setIsSearchActive(false);
  };

  const closeProfile = (e) => {
    !profile?.contains(e.target) &&
      isProfileActive &&
      setIsProfileActive(false);
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
  }, [isProfileActive]);

  return (
    <Navbar ref={nav} data-name="nav">
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
                <span>검색 시작하기</span>
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </button>
            </div>
          </SearchTrigger>

          {/* SECTION Profile trigger */}
          <ProfileTrigger
            onClick={() => setIsProfileActive(!isProfileActive)}
            active={isProfileActive}
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
      <Search searchActive={isSearchActive} />
      <ProfileMenuList profileActive={isProfileActive} />
    </Navbar>
  );
};

export default Nav;
