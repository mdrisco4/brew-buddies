import React from "react";
import styled from "styled-components";

const ContactInfo = styled.div`
  text-align: center;
  font-size: 40px;
  @media (min-width: 768px) {
    /* margin-left: initial;
    margin-right: initial; */
  }
`;

const Contact = () => (
  <div style={{ maxWidth: "1200px", backgroundColor: "rgb(74, 73, 72)" }}>
    <h1>Contact</h1>
    <ContactInfo>Rob Richenberg</ContactInfo>
    <ContactInfo>Founder/Beer Guru</ContactInfo>
    <ContactInfo>Rob@BrewBuddiesNY.com</ContactInfo>
    <ContactInfo>(585) 813-4506</ContactInfo>
  </div>
);

export default Contact;
