import React from "react";

//LINK style
import { Map } from "./Location.Styled";

// LINK Icons
import map from "../../../Images/Search/map.svg";
import pin from "../../../Images/Search/pin.svg";

const Location = ({ searchResult, current, address, btnActive }) => {
  console.log("------------location-------------");

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      current(coords.latitude, coords.longitude);
    });
  };

  const getAddress = (e) => {
    const { id, name } = e.currentTarget.dataset;
    address(id, name);
  };

  return (
    <Map btnActive={btnActive}>
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
                <img src={pin} alt="" />
              </div>
              <div>{address.name}</div>
            </li>
          ))
        ) : (
          <li onClick={getGeolocation}>
            <div>
              <img src={map} alt="" />
            </div>
            <div>가까운 여행지 둘러보기</div>
          </li>
        )}
      </ul>
    </Map>
  );
};

export default Location;
