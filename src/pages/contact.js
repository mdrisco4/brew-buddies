import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const ContactHeader = styled.div`
  font-family: "Comfortaa", cursive;
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
  font-family: "Comfortaa", cursive;
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

const NewClientLink = styled.a`
  text-align: center;
  font-family: "Comfortaa", cursive;
  font-size: 24px;
  text-decoration: none;
  color: black;
  margin-bottom: 12px;
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
  &:hover {
    color: rgb(220, 180, 180);
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`;

const EmailLink = styled.a`
  text-align: center;
  font-family: "Comfortaa", cursive;
  font-size: 24px;
  text-decoration: none;
  color: black;
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
  &:hover {
    color: rgb(220, 180, 180);
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`;

const PhoneLink = styled.a`
  text-align: center;
  font-family: "Comfortaa", cursive;
  font-size: 24px;
  text-decoration: none;
  color: black;
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
  &:hover {
    color: rgb(220, 180, 180);
    text-shadow: 4px 4px 5px darkblue;
    filter: drop-shadow(1px 1px white);
  }
`;

const SocialMedia = styled.img`
  width: 28px;
  margin: 4px 8px 4px 8px;
  transition: transform 0.55s;
  @media (min-width: 480px) {
    width: 30px;
  }
  @media (min-width: 576px) {
    width: 35px;
  }
  @media (min-width: 650px) {
    width: 39px;
    margin: 4px 10px 4px 10px;
  }
  @media (min-width: 768px) {
    width: 45px;
    margin: 4px 12px 4px 12px;
  }
  @media (min-width: 870px) {
    width: 51px;
  }
  @media (min-width: 980px) {
    width: 56px;
  }
  @media (min-width: 1100px) {
    width: 63px;
    margin: 4px 15px 4px 15px;
  }
  @media (min-width: 1260px) {
    width: 68px;
  }
  :hover {
    transform: scale(1.25);
  }
`;

const SocialMediaLink = styled.a``;

const Contact = () => (
  <div
    style={{
      maxWidth: "15000px",
      backgroundColor: "rgb(135, 180, 225)",
      textAlign: "center",
    }}
  >
    <div>
      <NewClientLink href="https://forms.gle/cvsYm2cddPijwsMj8" target="_blank">
        Interested in working with us?
      </NewClientLink>
      <ContactHeader>Reach Out Any Time!</ContactHeader>
      <ContactInfo>Rob Richenberg</ContactInfo>
      <ContactInfo>Founder/Director of Sales</ContactInfo>
      <EmailLink href="mailto:Rob@BrewBuddiesNY.com" target="_blank">
        Rob@BrewBuddiesNY.com
      </EmailLink>
      <br></br>
      <PhoneLink href="tel:1-585-813-4506">(585) 813-4506</PhoneLink>
    </div>
    <SocialMediaLink
      href="https://www.facebook.com/BrewBuddiesNY/?paipv=0&eav=AfYBgyI-HEEXzXM_Y6jPbRy2K28VftlJf0LtnmqPZzwm87AQkv6YgWle06xw6MdEVkI&_rdr"
      target="_blank"
    >
      <SocialMedia src="https://i.imgur.com/Cu8kxbg.png" />
    </SocialMediaLink>
    <SocialMediaLink
      href="https://www.instagram.com/brewbuddiesny/?hl=en"
      target="_blank"
    >
      <SocialMedia src="https://i.imgur.com/nBskSqC.png" />
    </SocialMediaLink>
  </div>
);

export default Contact;
