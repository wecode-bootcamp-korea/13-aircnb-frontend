import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

// LINK redux action
import { refMapMenu } from "../../../Redux/Actions/Index";

//LINK style
import { Map } from "./Location.Styled";

// LINK Icons
import map from "../../../Images/Search/map.svg";
import pin from "../../../Images/Search/pin.svg";

const Location = ({ searchResult, current, address, btnActive }) => {
  // ANCHOR redux
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
      //NOTE originally this should be needed but this time, doesn't use this
      // takeLocationAction(coords.latitude, coords.longitude)
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
        {searchResult?.length ? (
          searchResult.map((stay) => (
            <li
              key={stay.id}
              data-id={stay.id}
              data-name={stay.full_address}
              onClick={getAddress}
            >
              <div>
                <img src={pin} alt="location" />
              </div>
              <div>{stay.full_address}</div>
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
