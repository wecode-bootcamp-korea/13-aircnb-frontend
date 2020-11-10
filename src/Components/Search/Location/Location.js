import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//LINK style
import { Map } from "./Location.Styled";

// LINK Icons
import map from "../../../Images/Search/map.svg";
import pin from "../../../Images/Search/pin.svg";
import { refMapMenu } from "../../../Redux/Actions/Index";

const Location = ({ searchResult, current, address, btnActive }) => {
  console.log("------------location-------------");

  // ANCHOR redux
  const modalReducer = useSelector(({ modalReducer }) => modalReducer);
  const mapMenu = modalReducer.mapMenu;
  const dispatch = useDispatch();
  const refMapMenuAction = (menu) => dispatch(refMapMenu(menu));

  // REVIEW ref
  const mapMenuRef = useRef();
  useEffect(() => {
    refMapMenuAction(mapMenuRef?.current);
  }, []);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      current(coords.latitude, coords.longitude);
    });
  };

  const getAddress = (e) => {
    e.stopPropagation();
    const { id, name } = e.currentTarget.dataset;
    address(id, name);
  };

  return (
    <Map ref={mapMenuRef} btnActive={btnActive}>
      <ul>
        {searchResult.length ? (
          searchResult.map((address, idx) => (
            <li
              key={idx}
              data-id={address.id}
              data-name={address.name}
              onClick={getAddress}
            >
              <div>
                <img src={pin} alt="location" />
              </div>
              <div>{address.name}</div>
            </li>
          ))
        ) : (
          <li onClick={getGeolocation}>
            <div>
              <img src={map} alt="current location" />
            </div>
            <div>가까운 여행지 둘러보기</div>
          </li>
        )}
      </ul>
    </Map>
  );
};

export default Location;
