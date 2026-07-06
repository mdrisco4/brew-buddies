import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/imageSlider.css";
import styled from "styled-components";
import { slide } from "react-burger-menu";

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: block;
  color: black;
  background-color: green;
  border: 4px solid black;
  margin: 0 5px 0;
`;

const SliderText = styled.div`
  font-family: "Comfortaa", cursive;
  margin-bottom: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  @media (min-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 576px) {
    width: 70%;
    font-size: 20px;
  }
  @media (min-width: 650px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 870px) {
    font-size: 27px;
  }
  @media (min-width: 980px) {
    font-size: 30px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
  }
  @media (min-width: 1260px) {
    font-size: 35px;
  }
`;

const Slide = ({ property }) => {
  const { img, index } = property;
  return (
    <div id={`slide-${index}`} className="slide">
      <div className="slide-container">
        <div className="image">
          <img src={img} className="slide-img" />
        </div>
      </div>
    </div>
  );
};

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: this.props.slideData,
      property: this.props.slideData[0],
      stopFiring: false,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(this.nextProperty, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  prevProperty = () => {
    if (this.state.property.index > 0) {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: this.props.slideData[newIndex],
      });
    } else {
      const newIndex = this.props.slideData.length - 1;
      this.setState({
        property: this.props.slideData[newIndex],
      });
    }
  };

  nextProperty = () => {
    console.log("Next slide");

    if (this.state.property.index < this.props.slideData.length - 1) {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: this.props.slideData[newIndex],
      });
    } else {
      this.setState({
        property: this.props.slideData[0],
      });
    }
  };

  SlideOne = () => {
    this.setState({
      property: this.props.slideData[0],
    });
  };

  SlideTwo = () => {
    this.setState({
      property: this.props.slideData[1],
    });
  };

  SlideThree = () => {
    this.setState({
      property: this.props.slideData[2],
    });
  };

  render() {
    const { property } = this.state;

    return (
      <div>
        <SliderText>
          BrewBuddies was founded to disrupt the status quo in the craft
          beverage industry, which has long been ripe for change. Follow us on
          our journey to take back craft!
        </SliderText>

        <div className="card">
          <div className="slide">
            <Slide property={property} />
          </div>
        </div>

        {/*
        <CircleContainer>
          <Dot onClick={this.SlideOne} />
          <Dot onClick={this.SlideTwo} />
          <Dot onClick={this.SlideThree} />
        </CircleContainer>
        */}
      </div>
    );
  }
}

export default Slider;
