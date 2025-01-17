import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";

const BrandHeader = styled.div`
  font-family: "Comfortaa", cursive;
  padding-top: 50px;
  text-decoration: underline;
  font-size: 24px;
  @media (min-width: 480px) {
    font-size: 28px;
  }
  @media (min-width: 576px) {
    font-size: 32px;
  }
  @media (min-width: 650px) {
    font-size: 33px;
  }
  @media (min-width: 768px) {
    font-size: 39px;
  }
  @media (min-width: 870px) {
    font-size: 42px;
  }
  @media (min-width: 980px) {
    font-size: 45px;
  }
  @media (min-width: 1100px) {
    font-size: 50px;
  }
  @media (min-width: 1260px) {
    font-size: 52px;
  }
`;

const BrandInfo = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 8%;
  margin-right: 8%;
  padding-top: 20px;
  padding-bottom: 30px;
  @media (min-width: 480px) {
    font-size: 24px;
  }
  @media (min-width: 576px) {
    font-size: 30px;
  }
  @media (min-width: 650px) {
    font-size: 30px;
  }
  @media (min-width: 768px) {
    text-align: center;
    font-size: 33px;
  }
  @media (min-width: 870px) {
    font: 36px;
  }
  @media (min-width: 980px) {
    font-size: 40px;
  }
  @media (min-width: 1100px) {
    font-size: 48px;
  }
  @media (min-width: 1260px) {
    font-size: 50px;
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
  transition: transform 0.55s;
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
      {/* BrewBuddies is proud to represent the following brands. Click their logos
      to learn more about each of our partners! */}
      Click their logos to learn more about each of the brands we work with!'
    </BrandInfo>
    <LogoContainer2>
      <BrandLink href="https://sagerbeerworks.com/" target="_blank">
        <Logo src="https://i.imgur.com/D2PxpfJ.png" />
      </BrandLink>
      <BrandLink href="https://www.irontugbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/yfUaxAQ.png" />
      </BrandLink>
      <BrandLink href="https://triphammerbierwerks.com/" target="_blank">
        <Logo src="https://i.imgur.com/SIIWc7a.png" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer2>
      <BrandLink
        href="https://www.stoneyardbrewingcompany.com/"
        target="_blank"
      >
        <Logo src="https://i.imgur.com/hpDcx39.png" />
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
    <LogoContainer2>
      <BrandLink href="https://www.twinforkbeer.com/" target="_blank">
        <Logo src="https://i.imgur.com/hj0ZqYt.png" />
      </BrandLink>
      <BrandLink href="https://www.beelzebubbles.com/" target="_blank">
        <Logo src="https://i.imgur.com/T0u0a1N.png" />
      </BrandLink>
      <BrandLink href="https://www.katboocha.com/" target="_blank">
        <Logo src="https://i.imgur.com/ZhvEMfn.png" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer2>
      <BrandLink href="https://www.luckyharebrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/KJCE4FK.png" />
      </BrandLink>
      <BrandLink
        href="https://happygutsanctuary.com/index.html"
        target="_blank"
      >
        <Logo src="https://i.imgur.com/Y6wWNjt.png" />
      </BrandLink>
      <BrandLink href="https://seedandstonecidery.com/" target="_blank">
        <Logo src="https://i.imgur.com/42OnRME.png" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer2>
      <BrandLink href="https://www.tilbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/GyvBrIu.png" />
      </BrandLink>
      <BrandLink
        href="https://www.facebook.com/steampunkcider/"
        target="_blank"
      >
        <Logo src="https://i.imgur.com/tL5W19N.png" />
      </BrandLink>
      <BrandLink href="https://seedandstonecidery.com/" target="_blank">
        <Logo src="https://i.imgur.com/jLQV4S3.gif" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer2>
      <BrandLink href="https://bullfinchbrewpub.com/" target="_blank">
        <Logo src="https://i.imgur.com/nRj22M5.png" />
      </BrandLink>
      <BrandLink href="https://wagnerbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/YkLBZSh.png" />
      </BrandLink>
      <BrandLink href="https://brazenbrewco.com/" target="_blank">
        <Logo src="https://i.imgur.com/raXHyWZ.png" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer2>
      <BrandLink href="https://www.brindlehausbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/GjQOJxj.png" />
      </BrandLink>
      <BrandLink href="https://buffalo-brewing-company.com/" target="_blank">
        <Logo src="https://i.imgur.com/99eoAiw.png" />
      </BrandLink>
      <BrandLink href="https://www.peacemakerbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/yK3kthB.png" />
      </BrandLink>
    </LogoContainer2>
    <LogoContainer3>
      <BrandLink href="https://octopusbrew.com/" target="_blank">
        <Logo src="https://i.imgur.com/i9fFQCZ.png" />
      </BrandLink>
      <BrandLink href="https://www.stumblinmonkeybeer.com/" target="_blank">
        <Logo src="https://i.imgur.com/z5Wi4iB.png" />
      </BrandLink>
    </LogoContainer3>
  </div>
);

export default Brands;
