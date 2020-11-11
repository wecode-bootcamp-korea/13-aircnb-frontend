import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// LINK component
import HomeBooking from "./Pages/HomeBooking/HomeBooking";
import HomeDetails from "./Pages/HomeDetails/HomeDetails";
import HomeList from "./Pages/HomeList/HomeList";
import Main from "./Pages/Main/Main";
import Nav from "./Pages/Nav/Nav";
import calendar from "./Pages/HomeBooking/Calendar";

// LINK style
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/Theme";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* <Nav /> */}
          <Route path="/" component={Nav} />
          <Switch>
            <MainContents>
              <Route path="/main" component={Main} />
              <Route exact path="/homebooking" component={HomeBooking} />
              <Route exact path="/homebooking" component={HomeBooking} />
              <Route exact path="/homebooking/:id" component={HomeBooking} />
              <Route exact path="/homedetails" component={HomeDetails} />
              <Route exact path="/homedetails/:id" component={HomeDetails} />
              <Route exact path="/homelist" component={HomeList} />
            </MainContents>
          </Switch>
        </ThemeProvider>
      </Router>
    </Fragment>
  );
};

const MainContents = styled.section`
  border: 1px solid red;
  position: relative;
  top: 80px;
  z-index: 1;
`;

export default Routes;
