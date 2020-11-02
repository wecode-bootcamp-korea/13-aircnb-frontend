import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <Navbar>Nav</Navbar>;
};

const Navbar = styled.nav`
  color: ${(props) => props.theme.primaryColor};
`;

export default Nav;
