import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContent = ({ google, latitude, longitude }) => {
  const mapStyles = {
    width: "100%",
    height: "500px",
  };

  const markerPosition = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <StyledMap>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        center={{ lat: latitude, lng: longitude }}
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        containerStyle={{ maxWidth: "1090px", height: "500px" }}
      >
        <Marker position={markerPosition} />
      </Map>
    </StyledMap>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAsg1DV_7IBAUdg1y9y0fGK_AgIJorBNxk",
})(MapContent);

const StyledMap = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 30px;
`;
