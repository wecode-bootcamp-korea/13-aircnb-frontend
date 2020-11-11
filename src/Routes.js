import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomeBooking from "./Pages/HomeBooking/HomeBooking";
import HomeDetails from "./Pages/HomeDetails/HomeDetails";
import HomeList from "./Pages/HomeList/HomeList";
import Main from "./Pages/Main/Main";
import Nav from "./Pages/Nav/Nav";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import theme, { flexSet } from "./Styles/Theme";

// fontawesome 아이콘
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

// 기본 fontawesome 쓰는법
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Route exact path="/nav" component={Nav} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/homebooking" component={HomeBooking} />
            <Route exact path="/homebooking/:id" component={HomeBooking} />
            <Route exact path="/homedetails" component={HomeDetails} />
            <Route exact path="/homedetails/:id" component={HomeDetails} />
            <Route exact path="/homelist" component={HomeList} />
          </ThemeProvider>
        </Switch>
      </Router>
    </Fragment>
  );
};

// 반드시 대문자로 styled component 쓰는법

export default Routes;
