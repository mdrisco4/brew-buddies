import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";

const AboutHeader = styled.div`
  font-family: "Comfortaa", cursive;
  padding-top: 50px;
  text-decoration: underline;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 30px;
  @media (min-width: 550px) {
    font-size: 18px;
    margin-left: 9%;
    margin-right: 9%;
    font-size: 35px;
  }
  @media (min-width: 640px) {
    font-size: 22px;
    margin-left: 11%;
    margin-right: 11%;
    font-size: 40px;
  }
  @media (min-width: 768px) {
    margin-left: 4%;
    margin-right: 4%;
    font-size: 45px;
  }
  @media (min-width: 950px) {
    margin-left: 9%;
    margin-right: 9%;
    font-size: 49px;
  }
  @media (min-width: 1150px) {
    margin-left: 15%;
    margin-right: 15%;
    font-size: 54px;
  }
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
      directly to consumers and retailers without the need to work with a
      wholesaler, and our goal is to help those companies realize the maximum
      potential from this.
      {/* BrewBuddies was formed out of a desire to improve the craft beverage
      experience for breweries, bars, restaurants, and the consumers themselves.
      New York State allows craft beverage companies to sell their products
      directly to consumers and retailers without the need to partner with a
      traditional distributor, and our goal is to help those companies realize
      the maximum potential from this unique opportunity. */}
    </MissionStatement>
    {/* <AboutHeader>What can BrewBuddies do for you?</AboutHeader>
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
      engage with their fans, and uplift the craft beverage community as a whole!
    </MissionStatement> */}
    <AboutHeader>Who We Are</AboutHeader>
    <MissionStatement>
      BrewBuddies was founded in the Spring of 2022 by Rob Richenberg. Over the
      past ten years, Rob has gained extensive experience in various facets of
      the craft beer industry: he's managed a beer bar, overseen brewery taproom
      operations, and organized & curated a major regional beer festival. As a
      passionate advocate of supporting local businesses, he's personally
      overseen nearly 100 collaboration brews and organized countless unique
      events designed to benefit craft beverage producers across the state.
    </MissionStatement>
    <AboutHeader>What We Do</AboutHeader>
    <MissionStatement>
      BrewBuddies aims to provide a service-focused alternative to traditional
      beer distributors:
    </MissionStatement>
    <MissionStatement>
      ∙For our retail clients, this means eliminating the "red tape" that often
      comes with buying from clunky corporate wholesalers: order minimums,
      timing restrictions, order cutoffs. We understand the realities of running
      a restaurant, and know that sometimes, you're gonna need to place that
      order after 5pm because you had a cook call out and you have to cover prep
      for a 25-top that just let you know they're coming in 3 hours.
    </MissionStatement>
    <MissionStatement>
      ∙For our supplier clients, this means providing an experienced sales team
      dedicated to craft beer and genuinely excited to get your products into
      the hands of customers via bars, restaurants, and store shelves. Full
      transparency (something severely lacking in this industry): we're not
      looking to lock anyone into a contract or own anyone's brands rights. We
      want to make money together, not sell your brand to a bigger fish for a
      quick payday.
    </MissionStatement>
  </div>
);

export default About;
