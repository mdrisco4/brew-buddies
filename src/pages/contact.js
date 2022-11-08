import React from "react";
import styled from "styled-components";

const ContactHeader = styled.div`
  font-family: 'Comfortaa', cursive;
  padding-top: 50px;
  padding-bottom: 30px;
  text-decoration: underline;
  font-size: 28px;
  @media (min-width: 480px) {
    font-size: 33px;
  }
  @media (min-width: 576px) {
    font-size: 36px;
  }
  @media (min-width: 650px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 45px;
  }
  @media (min-width: 870px) {
    font-size: 49px;
  }
  @media (min-width: 980px) {
    font-size: 54px;
  }
  @media (min-width: 1100px) {
    font-size: 60px;
  }
  @media (min-width: 1260px) {
    font-size: 66px;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  font-family: 'Comfortaa', cursive;
  font-size: 24px;
  @media (min-width: 480px) {
    font-size: 27px;
  }
  @media (min-width: 576px) {
    font-size: 30px;
  }
  @media (min-width: 650px) {
    font-size: 33px;
  }
  @media (min-width: 768px) {
    font-size: 35px;
  }
  @media (min-width: 870px) {
    font-size: 42px;
  }
  @media (min-width: 980px) {
    font-size: 48px;
  }
  @media (min-width: 1100px) {
    font-size: 54px;
  }
  @media (min-width: 1260px) {
    font-size: 60px;
  }
`;

const Contact = () => (
  <div style={{ maxWidth: "15000px", backgroundColor: "rgb(135, 180, 225)", textAlign: "center" }}>
    <ContactHeader>Reach Out Any Time!</ContactHeader>
    <ContactInfo>Rob Richenberg</ContactInfo>
    <ContactInfo>Founder/Beer Guru</ContactInfo>
    <ContactInfo>Rob@BrewBuddiesNY.com</ContactInfo>
    <ContactInfo>(585) 813-4506</ContactInfo>
  </div>
);

export default Contact;
