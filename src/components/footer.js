import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";


const TopBorder = styled.div`
  background-color: rgb(135, 180, 225);
  height: 200px;
  font-size: 1px;
  @media (min-width: 540px) {
    height: 210px;
  }
  @media (min-width: 650px) {
    height: 156px;
  }
  @media (min-width: 768px) {
    height: 81px;
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
  width: 35%;
  margin-left: 32.5%;
  margin-right: 32.5%;
  @media (min-width: 768px) {
  }
  `;

const SocialMedia = styled.img`
padding-top: 40px;
  width: 36px;
  margin: 10px;
  @media (min-width: 768px) {
    padding-top: 20px;
  }
`

const SocialMediaLink = styled.a`` 

const Spacer = styled.div`
background-color: rgb(220, 180, 180);
  height: 45px;
  @media (min-width: 540px) {
    height: 45px;
  }
  @media (min-width: 650px) {
    height: 50px;
  }
  @media (min-width: 768px) {
    height: 68px;
  }
  @media (min-width: 840px) {
    height: 72px;
  }
  @media (min-width: 960px) {
    height: 88px;
  }
  @media (min-width: 1100px) {
    height: 96px;
  }
  @media (min-width: 1250px) {
    height: 100px;
  }
;
`

const MyInfo = styled.div`
  font-size: 10px;
  @media (min-width: 540px) {
    font-size: 12px;
  }
  @media (min-width: 650px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 840px) {
  font-size: 21px
  }
  @media (min-width: 960px) {
  font-size: 22px;
  }
  @media (min-width: 1100px) {
  font-size: 24px;
  }
  @media (min-width: 1250px) {
  font-size: 27px;
  }
;
`

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
    <SocialMediaLink href="https://www.facebook.com/BrewBuddiesNY/?paipv=0&eav=AfYBgyI-HEEXzXM_Y6jPbRy2K28VftlJf0LtnmqPZzwm87AQkv6YgWle06xw6MdEVkI&_rdr" target="_blank" >
    <SocialMedia src="https://i.imgur.com/Cu8kxbg.png" />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.instagram.com/brewbuddiesny/?hl=en" target="_blank" >
    <SocialMedia src="https://i.imgur.com/nBskSqC.png" />
    </SocialMediaLink>
    <Spacer />
    <MyInfo>Site built by Michael Driscoll</MyInfo>
    <MyInfo>For more information click below</MyInfo>
    <SocialMediaLink href="https://michaeldriscolldc.com/" target="_blank" >
    <MyInfo>Here</MyInfo>
    </SocialMediaLink>
    <BottomBorder />
  </div>
);

export default Footer;
