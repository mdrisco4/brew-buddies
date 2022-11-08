import React from "react";
import styled from "styled-components";
import "../styles/fonts.css"

const BrandHeader = styled.h1`
  font-family: 'Comfortaa', cursive;
  padding-top: 50px;
  text-decoration: underline;
  @media (min-width: 480px) {

  }
  @media (min-width: 576px) {

  }
  @media (min-width: 650px) {
    
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 870px) {
    
  }
  @media (min-width: 980px) {
    
  }
  @media (min-width: 1100px) {
    
  }
  @media (min-width: 1260px) {
    
  }
`;

const BrandInfo = styled.div`
  font-size: 24px;
  font-family: 'Comfortaa', cursive;
  text-align: center;
  /* color: rgb(154, 157, 159); */
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 8%;
  margin-right: 8%;
  padding-top: 20px;
  padding-bottom: 30px;
  @media (min-width: 480px) {

}
@media (min-width: 576px) {

}
@media (min-width: 650px) {
  
}
@media (min-width: 768px) {
  
}
@media (min-width: 870px) {
  
}
@media (min-width: 980px) {
  
}
@media (min-width: 1100px) {
  
}
@media (min-width: 1260px) {
  
}
`;

const LogoContainer1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  border-color: rgb(154, 157, 159);
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 95%;
  }
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LogoContainer2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  border-color: rgb(154, 157, 159);
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 70%;
  }
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const BrandLink = styled.a``;

const Logo = styled.img`
  width: 50%;
  margin: auto;
  margin-bottom: 14px;
  display: flex;
  @media (min-width: 768px) {
    /* margin-left: initial;
    margin-right: initial; */
  }
`;

const Brands = () => (
  <div style={{ maxWidth: "15000px", backgroundColor: "rgb(135, 180, 225)", textAlign: "center" }}>
    <BrandHeader>Featured Brands</BrandHeader>
    <BrandInfo>
      We strive to bring you the best in craft beer with our services. If you
      would like to get a brand you do not see featured here please inquire.
    </BrandInfo>
    <LogoContainer1>
      <BrandLink href="https://sagerbeerworks.com/" target="_blank">
        <Logo src="https://i.imgur.com/mUt147R.jpg" />
      </BrandLink>
      <BrandLink href="http://rustynickelbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/PUEJmsR.jpg" />
      </BrandLink>
      <BrandLink href="https://www.lillybellemeads.com/" target="_blank">
        <Logo src="https://i.imgur.com/NUr7F8O.png" />
      </BrandLink>
      <BrandLink href="https://www.butternutsbeerandale.com/" target="_blank">
        <Logo src="https://i.imgur.com/Vv4AcHe.png" />
      </BrandLink>
      </LogoContainer1>
      <LogoContainer2>
      <BrandLink href="https://elifishbrewing.com/" target="blank">
        <Logo src="https://i.imgur.com/Xns4WcX.png" />
      </BrandLink>
      <BrandLink href="https://ninemaidensbrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/sPjMWdH.jpg" />
      </BrandLink>
      <BrandLink href="https://www.westshorebrewing.com/" target="_blank">
        <Logo src="https://i.imgur.com/9JdZvY0.png" />
      </BrandLink>
    </LogoContainer2>
  </div>
);

export default Brands;
