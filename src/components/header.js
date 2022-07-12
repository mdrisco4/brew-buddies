import React from "react";
import styled from "styled-components";

const SectionTitle = styled.div`
  font-size: 50px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 50px;
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
    font-size: 60px;
    margin-bottom: 25px;
  }
`;

const HeaderContainer = styled.div`
  font-size: 24px;
  text-align: center;
  background-color: rgb(154, 157, 159);
  font-weight: bold;
  margin-bottom: 15px;
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
  @media (min-width: 650px) {
    padding-left: 10px;
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

const ContactInfo = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media (min-width: 650px) {
    text-align: left;
  }
  @media (min-width: 850px) {
    font-size: 32px;
    margin-top: 4px;
  }
  @media (min-width: 1150px) {
    font-size: 45px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 650px) {
    flex-direction: row;
  }
  @media (min-width: 850px) {
  }
  @media (min-width: 1200px) {
  }
`;

const FooterLogo = styled.img`
  @media (min-width: 650px) {
    height: 100px;
    width: 100px;
    margin: 0;
  }
  @media (min-width: 850px) {
    height: 140px;
    width: 140px;
  }
  @media (min-width: 1150px) {
    height: 180px;
    width: 180px;
  }
`;

const Header = () => (
  <div style={{ maxWidth: "1200px", marginLeft: "10%", marginRight: "10%" }}>
    <HeaderContainer>
      <MenuLinksContainer>
        <MenuLinks>Contact Us</MenuLinks>
        <MenuLinks>Brands</MenuLinks>
        <MenuLinks>About Us</MenuLinks>
        <MenuLinks>Extra Link</MenuLinks>
      </MenuLinksContainer>
    </HeaderContainer>
  </div>
);

export default Header;
