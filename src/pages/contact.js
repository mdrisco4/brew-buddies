import React from "react";
import styled from "styled-components";

const ContactInfo = styled.div`
  text-align: center;
  font-size: 24px;
  @media (min-width: 480px) {
    font-size: 27px;
  }
  @media (min-width: 576px) {
    font-size: 30px;
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
  <div style={{ maxWidth: "15000px", backgroundColor: "rgb(74, 73, 72)", textAlign: "center" }}>
    <h3>Reach Out Any Time!</h3>
    <ContactInfo>Rob Richenberg</ContactInfo>
    <ContactInfo>Founder/Beer Guru</ContactInfo>
    <ContactInfo>Rob@BrewBuddiesNY.com</ContactInfo>
    <ContactInfo>(585) 813-4506</ContactInfo>
  </div>
);

export default Contact;
