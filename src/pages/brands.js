import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";

const BrandHeader = styled.div`
  font-family: "Comfortaa", cursive;
  padding-top: 50px;
  text-decoration: underline;
  font-size: 28px;
  @media (min-width: 480px) {
    font-size: 32px;
  }
  @media (min-width: 576px) {
    font-size: 35px;
  }
  @media (min-width: 650px) {
    font-size: 39px;
  }
  @media (min-width: 768px) {
    font-size: 44px;
  }
  @media (min-width: 870px) {
    font-size: 48px;
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

const BrandInfo = styled.div`
  text-align: left;
  font-size: 24px;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 8%;
  margin-right: 8%;
  padding-top: 20px;
  padding-bottom: 30px;
  @media (min-width: 480px) {
    font-size: 28px;
  }
  @media (min-width: 576px) {
    font-size: 32px;
  }
  @media (min-width: 650px) {
    font-size: 35px;
  }
  @media (min-width: 768px) {
    text-align: center;
    font-size: 39px;
  }
  @media (min-width: 870px) {
    font: 44px;
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

const LogoContainer1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-color: rgb(154, 157, 159);
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;
  }
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LogoContainer2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  border-color: rgb(154, 157, 159);
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 95%;
  }
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const LogoContainer3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-color: rgb(154, 157, 159);
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;
  }
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BrandLink = styled.a``;

const Logo = styled.img`
  width: 50%;
  margin: auto;
  margin-bottom: 14px;
  display: flex;
  @media (min-width: 768px) {
  }
`;

const Brands = () => (
  <div
    style={{
      maxWidth: "15000px",
      backgroundColor: "rgb(135, 180, 225)",
      textAlign: "center",
    }}
  >
    <BrandHeader>Featured Brands</BrandHeader>
    <BrandInfo>
      BrewBuddies is proud to represent the following brands. Click their logos
      to learn more about each of our partners!
    </BrandInfo>
    <LogoContainer1>
      <BrandLink href="https://sagerbeerworks.com/" target="_blank">
        <Logo src="https://i.imgur.com/D2PxpfJ.png" />
      </BrandLink>
      <BrandLink href="http://rustynickelbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/PUEJmsR.jpg" />
      </BrandLink>
    </LogoContainer1>
    <LogoContainer2>
      <BrandLink href="https://www.lillybellemeads.com/" target="_blank">
        <Logo src="https://i.imgur.com/iiePk9U.png" />
      </BrandLink>
      <BrandLink href="https://www.butternutsbeerandale.com/" target="_blank">
        <Logo src="https://i.imgur.com/Vv4AcHe.png" />
      </BrandLink>
      <BrandLink href="https://ninemaidensbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/sPjMWdH.jpg" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer3>
      <BrandLink href="https://elifishbrewing.com/" target="blank">
        <Logo src="https://i.imgur.com/vp9vYAt.png" />
      </BrandLink>
      <BrandLink href="https://www.westshorebrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/hkFOFfi.png" />
      </BrandLink>
    </LogoContainer3>
  </div>
);

export default Brands;
