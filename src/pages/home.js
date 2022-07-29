import React from "react";
import styled from "styled-components";

const LandingPageImage = styled.img`
  width: 100%;
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
    <LandingPageImage src="https://i.imgur.com/vkGHLOP.jpg" />
  </div>
);

export default Home;
