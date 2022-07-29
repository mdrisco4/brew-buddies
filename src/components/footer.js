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
  margin-left: 40%;
  margin-right: 40%;
  @media (min-width: 768px) {
    /* margin-left: initial;
    margin-right: initial; */
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  font-size: 20px;
  @media (min-width: 768px) {
    /* margin-left: initial;
    margin-right: initial; */
  }
`;

const Footer = () => (
  <div style={{ maxWidth: "1200px"}}>
    <Logo src="https://i.imgur.com/rpLw26n.png" />
    <ContactInfo>Rob Richenberg</ContactInfo>
    <ContactInfo>Founder/Beer Guru</ContactInfo>
    <ContactInfo>Rob@BrewBuddiesNY.com</ContactInfo>
    <ContactInfo>(585) 813-4506</ContactInfo>
  </div>
);

export default Footer;

