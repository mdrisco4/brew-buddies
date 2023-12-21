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
  padding-top: 30px;
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
  margin-top: 3%;
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

const BrandLink = styled.a`
transition: transform .55s;
:hover {
  transform: scale(1.25);
}
`;

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
    <LogoContainer2>
      <BrandLink href="https://sagerbeerworks.com/" target="_blank">
        <Logo src="https://i.imgur.com/D2PxpfJ.png" />
      </BrandLink>
      <BrandLink href="https://www.irontugbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/yfUaxAQ.png" />
      </BrandLink>
      <BrandLink href="https://www.westshorebrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/l94GXvG.jpg" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer2>
      <BrandLink href="https://www.stoneyardbrewingcompany.com/" target="_blank">
        <Logo src="https://i.imgur.com/XzcdnKM.jpg" />
      </BrandLink>
      <BrandLink href="https://ninemaidensbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/16ZsSO2.png" />
      </BrandLink>
      <BrandLink href="https://elifishbrewing.com/" target="blank">
        <Logo src="https://i.imgur.com/tdGuKKq.png" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer2>
      <BrandLink href="https://www.lillybellemeads.com/" target="_blank">
        <Logo src="https://i.imgur.com/KkN1Fdv.png" />
      </BrandLink>
      <BrandLink href="http://rustynickelbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/Y7PdPio.png" />
      </BrandLink>
      <BrandLink href="https://www.lakedrumbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/RQzC9Jy.png" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer1>
      <BrandLink href="https://visitgeneseeny.com/destinations/tracy-bs-market-and-farm-brewery" target="_blank">
      <Logo src="https://i.imgur.com/Q7i1cGk.jpg" />
      </BrandLink>
      <BrandLink href="https://www.beelzebubbles.com/" target="_blank">
      <Logo  src="https://i.imgur.com/Y4kmurN.jpg" />
      </BrandLink>
    </LogoContainer1>
    <LogoContainer1>
      <BrandLink href="https://www.luckyharebrewing.com/" target="_blank">
      <Logo src="https://i.imgur.com/KJCE4FK.png" />
      </BrandLink>
      <BrandLink href="https://happygutsanctuary.com/index.html" target="_blank">
      <Logo  src="https://i.imgur.com/Y6wWNjt.png" />
      </BrandLink>
    </LogoContainer1>
  </div>
);

export default Brands;
