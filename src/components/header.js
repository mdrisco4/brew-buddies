import React from "react";
import styled from "styled-components";
import Contact from "../pages/contact.js";
import { Route, Link } from "react-router-dom";

const HeaderContainer = styled.div`
  font-size: 24px;
  text-align: center;
  background-color: rgb(154, 157, 159);
  font-weight: bold;
  /* border-bottom: 200px;
  border-color: rgb(154, 157, 159); */
  @media (min-width: 800px) {
    font-size: 30px;
  }
  @media (min-width: 1150px) {
  }
`;

const MenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  justify-content: space-between;
  @media (min-width: 650px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
  }
`;

const MenuLinks = styled.a`
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3.5%;
  /* color: rgb(154, 157, 159); */
  font-weight: bold;
  @media (min-width: 550px) {
    font-size: 20px;
  }
  @media (min-width: 800px) {
    font-size: 24px;
  }
  @media (min-width: 1150px) {
    font-size: 32px;
  }
`;

const Logo = styled.img`
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    margin-left: initial;
    margin-right: initial;
  }
`;

const Header = () => (
  <div style={{ maxWidth: "1200px", marginLeft: "10%", marginRight: "10%" }}>
    <HeaderContainer>
      <MenuLinksContainer>
        <MenuLinks>Contact Us</MenuLinks>
        {/* <Link></Link> */}
        {/* <Link to="/about">About</Link> */}
        {/* <Link className="contact" to="/Contact">
          <MenuLinks>Contact Us</MenuLinks>
        </Link> */}
        {/* <Route path="/Contact" exact component={Contact} /> */}
        <MenuLinks>Brands</MenuLinks>
        <Logo src="https://i.imgur.com/rpLw26n.png" />
        <MenuLinks>About Us</MenuLinks>
        <MenuLinks>Extra Link</MenuLinks>
      </MenuLinksContainer>
    </HeaderContainer>
  </div>
);

export default Header;
