import React from "react";
import styled from "styled-components";
import { flexSet } from "../../../Styles/Theme";

// LINK Icons
import map from "../../../Images/Search/map.svg";
import pin from "../../../Images/Search/pin.svg";

const Location = ({ searchResult, current, address }) => {
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
    <Map>
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

const Map = styled.div`
  ${flexSet("flex-start", "center")}
  position: absolute;
  width: 500px;
  top: 160px;
  padding: 16px 0;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 10px 4px #ddd;

  > ul {
    width: 100%;

    li {
      ${flexSet("flex-start", "center")};
      padding: 8px 16px 8px 32px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }

      div {
        &:first-child {
          width: auto;
          height: 48px;
          font-size: 48px;
          line-height: 48px;
        }
        &:last-child {
          margin-left: 10px;
          font-size: 16px;
        }

        img {
          height: 100%;
        }
      }
    }
  }
`;

export default Location;
