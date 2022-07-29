import React from "react";
import styled from "styled-components";



const MissionStatement = styled.div`
  font-size: 24px;
  text-align: center;
  /* color: rgb(154, 157, 159); */
  font-weight: bold;
  margin-bottom: 15px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
  @media (min-width: 1150px) {
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 200px;
  border-color: rgb(154, 157, 159);
`;

const Logo = styled.img`
  width: 50%;
  margin: auto;
  @media (min-width: 768px) {
    /* margin-left: initial;
    margin-right: initial; */
  }
`;

const Brands = () => (
    <div style={{ maxWidth: "1200px", backgroundColor: "rgb(154, 157, 159)" }}>
    <h1>Brands Offered</h1>
    <MissionStatement>Here are the brands offered by our services.</MissionStatement>
    <MissionStatement>If you would like to get a brand not featured here please ask.</MissionStatement>
    <LogoContainer>

    <Logo src="https://i.imgur.com/xYO0SLc.png" />
    <Logo src="https://i.imgur.com/Vk5ylrJ.jpg" />
    <Logo src="https://i.imgur.com/wxPVsA5.jpg" />
    <Logo src="https://i.imgur.com/33Tp5t4.png" />
    <Logo src="https://i.imgur.com/5878TcE.png" />
    <Logo src="https://i.imgur.com/O2OXJkV.jpg" />
    </LogoContainer>
  </div>
);

export default Brands;
