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
  <div style={{ maxWidth: "15000px", backgroundColor: "rgb(135, 180, 225)", textAlign: "center" }}>
    <h1>Featured Brands</h1>
    <BrandInfo>
      We strive to bring you the best in craft beer with our services. If you
      would like to get a brand you do not see featured here please inquire.
    </BrandInfo>
    <LogoContainer>
      <BrandLink href="https://sagerbeerworks.com/" target="_blank">
        <Logo src="https://i.imgur.com/mUt147R.jpg" />
      </BrandLink>
      <BrandLink href="https://elifishbrewing.com/" target="blank">
        <Logo src="https://i.imgur.com/Xns4WcX.png" />
      </BrandLink>
      <BrandLink href="https://www.lillybellemeads.com/" target="_blank">
        <Logo src="https://i.imgur.com/NUr7F8O.png" />
      </BrandLink>
      <BrandLink href="https://www.westshorebrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/9JdZvY0.png" />
      </BrandLink>
      <BrandLink href="http://rustynickelbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/PUEJmsR.jpg" />
      </BrandLink>
      <BrandLink href="https://ninemaidensbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/sPjMWdH.jpg" />
      </BrandLink>
      <BrandLink href="https://www.butternutsbeerandale.com/" target="_blank">
        <Logo src="https://i.imgur.com/Vv4AcHe.png" />
      </BrandLink>
    </LogoContainer>
  </div>
);

export default Brands;
