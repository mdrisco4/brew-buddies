import React from "react";
import styled from "styled-components";

const LandingPageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const LandingPageImage = styled.img`
  width: 100%;
`;

const LandingPagePromptOne = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
  -webkit-text-stroke: 2px black;
`;

const LandingPagePromptTwo = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
  -webkit-text-stroke: 2px black;
`;

const Home = () => (
  <div
    style={{
      maxWidth: "1200px",
      marginLeft: "10%",
      marginRight: "10%",
      backgroundColor: "blue",
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
