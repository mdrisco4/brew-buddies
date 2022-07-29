import React from "react";
import styled from "styled-components";

const BrandInfo = styled.div`
  font-size: 24px;
  text-align: center;
  /* color: rgb(154, 157, 159); */
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 8%;
  margin-right: 8%;
  @media (min-width: 800px) {
    font-size: 30px;
  }
  @media (min-width: 1150px) {
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-color: rgb(154, 157, 159);
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const BrandLink = styled.a``;

const Logo = styled.img`
  width: 50%;
  margin: auto;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    /* margin-left: initial;
    margin-right: initial; */
  }
`;

const Brands = () => (
  <div style={{ maxWidth: "15000px", backgroundColor: "rgb(74, 73, 72)", textAlign: "center" }}>
    <h1>BrewBuddies Brands</h1>
    <BrandInfo>
      We strive to bring you the best in craft beer with our services. If you
      would like to get a brand you do not see featured here please inquire.
    </BrandInfo>
    <LogoContainer>
      <BrandLink href="https://threeheadsbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/xYO0SLc.png" />
      </BrandLink>
      <BrandLink href="https://northcoastbrewing.com/" target="blank">
        <Logo src="https://i.imgur.com/Vk5ylrJ.jpg" />
      </BrandLink>
      <BrandLink href="https://www.redbear.beer/" target="_blank">
        <Logo src="https://i.imgur.com/wxPVsA5.jpg" />
      </BrandLink>
      <BrandLink href="https://www.stonebrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/33Tp5t4.png" />
      </BrandLink>
      <BrandLink href="https://www.breckbrew.com/" target="_blank">
        <Logo src="https://i.imgur.com/5878TcE.png" />
      </BrandLink>
      <BrandLink href="https://bellsbeer.com/" target="_blank">
        <Logo src="https://i.imgur.com/O2OXJkV.jpg" />
      </BrandLink>
    </LogoContainer>
  </div>
);

export default Brands;
