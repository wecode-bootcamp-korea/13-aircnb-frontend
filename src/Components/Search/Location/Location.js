import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexSet, displayNone } from "../../../Styles/Theme";
import map from "../../../Images/Search/map.svg";

const Location = ({ active, search, openSecond }) => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    return;
  });

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      openSecond(coords.latitude, coords.longitude);
    });
  };

  return (
    <Map active={active} search={search}>
      <ul>
        <li onClick={getGeolocation}>
          <div>
            <img src={map} alt="" />
          </div>
          <div>가까운 여행지 둘러보기</div>
        </li>
      </ul>
    </Map>
  );
};

const Map = styled.div`
  ${({ active, search }) => (active === 1 && search ? "" : displayNone)}
  ${flexSet("flex-start", "center")}
  width: 500px;
  height: 112px;
  margin-top: -22px;
  margin-left: 180px;
  padding: 16px 0;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 10px 4px #ddd;

  > ul {
    width: 100%;
    height: 64px;

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
