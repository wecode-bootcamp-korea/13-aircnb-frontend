import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// LINK component
import HomeBooking from "./Pages/HomeBooking/HomeBooking";
import HomeDetails from "./Pages/HomeDetails/HomeDetails";
import HomeList from "./Pages/HomeList/HomeList";
import Main from "./Pages/Main/Main";
import Nav from "./Pages/Nav/Nav";

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
          <Nav />
          <Switch>
            {/* <Route path="/" component={Nav} /> */}
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

const MainContents = styled.main`
  position: relative;
  top: 80px;
  z-index: 1;
`;

export default Routes;
