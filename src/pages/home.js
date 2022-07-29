import React from "react";
import styled from "styled-components";

const LandingPageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const LandingPageImage = styled.img`
  width: 100%;
  margin-bottom: none !important;
`;

const LandingPagePromptOne = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  @media (min-width: 420px) {
    top: 44%;
    font-size: 25px;
  }
  @media (min-width: 540px) {
    top: 44%;
    font-size: 30px;
  }
  @media (min-width: 650px) {
    -webkit-text-stroke: 2px black;
    top: 45%;
    font-size: 34px;
  }
  @media (min-width: 768px) {
    font-size: 39px;
  }
  @media (min-width: 850px) {
    font-size: 45px;
  }
  @media (min-width: 960px) {
    font-size: 51px;
  }
  @media (min-width: 1100px) {
    font-size: 56px;
  }
  @media (min-width: 1250px) {
    font-size: 63px;
  }
`;

const LandingPagePromptTwo = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  width: 60%;
  @media (min-width: 420px) {
    top: 56%;
    font-size: 25px;
  }
  @media (min-width: 540px) {
    top: 58%;
    font-size: 30px;
  }
  @media (min-width: 650px) {
  -webkit-text-stroke: 2px black;
    top: 58%;
    font-size: 34px;
  }
  @media (min-width: 768px) {
    font-size: 39px;
  }
  @media (min-width: 850px) {
    font-size: 45px;
  }
  @media (min-width: 960px) {
    font-size: 51px;
  }
  @media (min-width: 1100px) {
    font-size: 56px;
  }
  @media (min-width: 1250px) {
    font-size: 63px;
  }
`;

const Home = () => (
  <div
    style={{
      maxWidth: "1500px",
      marginLeft: "10%",
      marginRight: "10%",
      backgroundColor: "rgb(74, 73, 72)",
    }}
  >
    <LandingPageContainer>
      <LandingPageImage src="https://i.imgur.com/lFmBaFx.jpg" />
      <LandingPagePromptOne>Hello There!</LandingPagePromptOne>
      <LandingPagePromptTwo>General Kenobi!</LandingPagePromptTwo>
    </LandingPageContainer>
  </div>
);

export default Home;
