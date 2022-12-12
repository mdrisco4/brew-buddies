import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";

const AboutHeader = styled.h1`
  font-family: "Comfortaa", cursive;
  padding-top: 50px;
  text-decoration: underline;
  padding-left: 5%;
  padding-right: 5%;
`;

const MissionStatement = styled.div`
  font-size: 14px;
  font-family: "Comfortaa", cursive;
  text-align: left;
  font-weight: bold;
  margin-left: 6%;
  margin-right: 6%;
  padding-top: 30px;
  @media (min-width: 550px) {
    font-size: 18px;
    margin-left: 9%;
    margin-right: 9%;
  }
  @media (min-width: 640px) {
    font-size: 22px;
    margin-left: 11%;
    margin-right: 11%;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    margin-left: 4%;
    margin-right: 4%;
    text-align: center;
  }
  @media (min-width: 950px) {
    margin-left: 9%;
    margin-right: 9%;
  }
  @media (min-width: 1150px) {
    margin-left: 15%;
    margin-right: 15%;
  }
`;

const About = () => (
  <div
    style={{
      maxWidth: "15000px",
      backgroundColor: "rgb(135, 180, 225)",
      textAlign: "center",
    }}
  >
    <AboutHeader>About Us</AboutHeader>
    <MissionStatement>
      BrewBuddies was formed out of a desire to improve the craft beverage
      experience for breweries, bars, restaurants, and the consumers themselves.
      New York State allows craft beverage companies to sell their products
      directly to consumers and retailers without the need to partner with a
      traditional distributor, and our goal is to help those companies realize
      the maximum potential from this unique opportunity.
    </MissionStatement>
    <AboutHeader>What can BrewBuddies do for you?</AboutHeader>
    <MissionStatement>
      Are you a brewery or other craft manufacturer looking towards expanding or
      developing your business? BrewBuddies offers a wide array of service
      packages to meet whatever needs your business has, no matter how small.
    </MissionStatement>
    <MissionStatement>
      Are you a bar, restaurant or retailer looking to enhance your craft
      beverage programming? BrewBuddies offers free consultation services
      because sometimes a fresh set of eyes can identify hidden opportunities
      and potential areas for growth.  Do you just REALLY like drinking craft
      beer?  BrewBuddies also holds regular events to promote our partners,
      engage with their fans and uplift the craft beverage community as a whole!
    </MissionStatement>
  </div>
);

export default About;
