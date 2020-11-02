import React, { Fragment } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import HomeBooking from "./Pages/HomeBooking/HomeBooking";
import HomeDetails from "./Pages/HomeDetails/HomeDetails";
import HomeList from "./Pages/HomeList/HomeList";
import Main from "./Pages/Main/Main";
import Nav from "./Pages/Nav/Nav";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import Theme from "./Styles/Theme";

// fontawesome 아이콘
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

// 기본 fontawesome 쓰는법
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <ThemeProvider theme={{ Theme }}>
          <GlobalStyle />
          <Container>
            <FontAwesomeIcon icon={faCheckCircle} spin size="6x" color="red" />
            Hello Aircnb!!!
            <Link exact to="/nav" component={Nav} />
            <Link exact to="/main" component={Main} />
            <Link exact to="/homebooking" component={HomeBooking} />
            <Link exact to="/homedetails" component={HomeDetails} />
            <Link exact to="/homelist" component={HomeList} />
          </Container>
        </ThemeProvider>
      </Router>
    </Fragment>
  );
};

// 반드시 대문자로 styled component 쓰는법
const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Routes;
