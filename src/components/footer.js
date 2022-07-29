import React from "react";
import styled from "styled-components";



const TopBorder = styled.div`
  background-color: rgb(74, 73, 72);
  height: 30px;
  @media (min-width: 540px) {
    height: 35px;
  }
  @media (min-width: 650px) {
    height: 42px;
  }
  @media (min-width: 768px) {
    height: 45px;
  }
  @media (min-width: 840px) {
    height: 50px;
  }
  @media (min-width: 960px) {
    height: 56px;
  }
  @media (min-width: 1240px) {
    height: 60px;
  }
  @media (min-width: 1150px) {
    height: 64px;
  }
`;

const BottomBorder = styled.div`
  background-color: rgb(154, 157, 159);
  height: 110px;
  @media (min-width: 540px) {
    height: 85px;
  }
  @media (min-width: 650px) {
    height: 75px;
  }
  @media (min-width: 768px) {
    height: 65px;
  }
  @media (min-width: 840px) {
    height: 50px;
  }
  @media (min-width: 960px) {
    height: 56px;
  }
  @media (min-width: 1240px) {
    height: 60px;
  }
  @media (min-width: 1150px) {
    height: 64px;
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
  <div style={{ maxWidth: "15000px", backgroundColor: "rgb(154, 157, 159)", textAlign: "center" }}>
    <TopBorder />
    <Logo src="https://i.imgur.com/rpLw26n.png" />
    <ContactInfo>Rob Richenberg</ContactInfo>
    <ContactInfo>Founder/Beer Guru</ContactInfo>
    <ContactInfo>Rob@BrewBuddiesNY.com</ContactInfo>
    <ContactInfo>(585) 813-4506</ContactInfo>
    <BottomBorder />
  </div>
);

export default Footer;
