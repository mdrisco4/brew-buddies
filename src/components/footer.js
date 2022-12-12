import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";

const TopBorder = styled.div`
  background-color: rgb(135, 180, 225);
  height: 30px;
  font-size: 1px;
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
  background-color: rgb(220, 180, 180);
  height: 250px;
  @media (min-width: 540px) {
    height: 185px;
  }
  @media (min-width: 650px) {
    height: 175px;
  }
  @media (min-width: 768px) {
    height: 165px;
  }
  @media (min-width: 840px) {
    height: 90px;
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
  padding-top: 40px;
  @media (min-width: 768px) {
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: "Comfortaa", cursive;
  @media (min-width: 768px) {
  }
`;

// const EmailLink = styled.a`
//   font-family: "Montserrat Alternates";
//   color: black;
//   text-shadow: 1px 1px 3px white;
//   text-decoration: none;
//   font-weight: bold;
//   margin: 4px 5%;
//   font-size: 24px;
//   @media (min-width: 600px) {
//     font-size: 30px;
//   }
//   &:hover {
//     color: darkblue;
//     text-shadow: 4px 4px 5px darkblue;
//     filter:drop-shadow(1px 1px white);
//   }
// `

// const PhoneLink = styled.a`
//   font-family: "Montserrat Alternates";
//   color: black;
//   text-shadow: 1px 1px 1px white;
//   text-decoration: none;
//   font-weight: 900;
//   margin: 4px 5%;
//   font-size: 24px;
//   @media (min-width: 600px) {
//     font-size: 30px;
//   }
//   &:hover {
//     color: darkblue;
//     text-shadow: 4px 4px 5px darkblue;
//     filter:drop-shadow(1px 1px white);
//   }
// `

const Footer = () => (
  <div
    style={{
      maxWidth: "15000px",
      backgroundColor: "rgb(220, 180, 180)",
      textAlign: "center",
    }}
  >
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
