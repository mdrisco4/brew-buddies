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



const About = () => (
  <div style={{ maxWidth: "1200px", backgroundColor: "rgb(154, 157, 159)" }}>
    <h1>About Us</h1>
    <MissionStatement>
      BrewBuddies was formed out of a desire to improve the craft beverage
      experience for breweries, bars, restaurants, and the consumers themselves.
      New York State allows craft beverage companies to sell their products
      directly to consumers and retailers without the need to partner with a
      traditional distributor, and our goal is to help those companies realize
      the maximum potential from this unique opportunity.
    </MissionStatement>
  </div>
);

export default About;
