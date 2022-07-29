import React from "react";
import styled from "styled-components";

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
  <div style={{ maxWidth: "1200px" }}>
    <Logo src="https://i.imgur.com/rpLw26n.png" />
    <ContactInfo>Rob Richenberg</ContactInfo>
    <ContactInfo>Founder/Beer Guru</ContactInfo>
    <ContactInfo>(585) 813-4506</ContactInfo>
    <ContactInfo>Rob@BrewBuddiesNY.com</ContactInfo>
  </div>
);

export default Footer;
