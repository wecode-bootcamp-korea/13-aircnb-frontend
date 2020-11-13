import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 20px)",
        }}
      >
        <Map
          style={{}}
          initialCenter={{
            lat: 33.38272,
            lng: 126.551084,
          }}
          google={this.props.google}
          zoom={10}
        >
          <Marker
            onClick={this.onMarkerClick}
            icon={{
              url: "/img/icon.svg",
              anchor: new this.props.google.maps.Point(32, 32),
              scaledSize: new this.props.google.maps.Size(64, 64),
            }}
            name={"Current location"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAZwE63cSUDFsRkkMFmlA-bOUiRoIApLYo",
})(GoogleMap);
