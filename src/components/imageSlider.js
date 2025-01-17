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
  width: 50%;
  margin-left: auto;
  margin-right: auto;
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
    // this.SlideOne = this.Slide.bind(this);
  }

  prevProperty = () => {
    if (this.state.property.index > 0) {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: this.props.slideData[newIndex],
      });
      console.log(this.state.property.index);
    }
    if (this.state.property.index == 0) {
      const newIndex = this.props.slideData.length - 1;
      this.setState({
        property: this.props.slideData[newIndex],
      });
      console.log(this.state.property.index);
    }
  };

  nextProperty = () => {
    // if (this.state.property.index >= 0) {
    if (this.state.property.index < this.props.slideData.length - 1) {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: this.props.slideData[newIndex],
      });
      // console.log(this.state.property.index);
    }
    if (this.state.property.index == this.props.slideData.length - 1) {
      const newIndex = 0;
      this.setState({
        property: this.props.slideData[newIndex],
      });
      // console.log(this.state.property.index);
    }
  };

  AutoScroll = () => {
    setInterval(this.nextProperty, 3000);
  };

  SlideOne = () => {
    this.setState({
      property: 0,
    });
    // this.state.property.index = 0
    console.log("slide 1");
  };

  SlideTwo = () => {
    this.state.props.slideData = 1;
    console.log("slide 2");
  };

  SlideThree = () => {
    this.state.props.slideData = 2;
    console.log("slide 3");
  };

  render() {
    const { stopFiring, property } = this.state;

    const slideShow = () => {
      this.AutoScroll();
      // console.log("fired");
    };

    window.onload = function () {
      slideShow();
      console.log("loaded");
    };

    // window.$(document).ready = function () {
    //   slideShow();
    //   console.log("loaded")
    // }

    // window.addEventListener = function () {
    //   slideShow()
    //   // , {once : true};
    //   console.log("loaded")
    // };

    // window.addEventListener("load", slideShow, false);
    //   console.log("loaded")
    // };

    return (
      <div>
        <SliderText>
          BrewBuddies was founded to disrupt the status quo in the craft
          beverage industry, which has long been ripe for change. Follow us on
          our journey to take back craft!
        </SliderText>
        <div className="card">
          {/* <button className="button" onClick={() => this.prevProperty()}>
          <p className='button-icon'>&#10094;</p>
          </button> */}
          <div className="slide">
            <Slide property={property} />
          </div>
          {/* <button className="button" onClick={() => this.AutoScroll()}>
            <p className="button-icon">&#10095;</p>
          </button> */}
        </div>
        {/* <CircleContainer>
          <Dot onClick={this.SlideOne}/>
          <Dot onClick={this.SlideTwo}/>
          <Dot onClick={this.SlideThree}/>
        </CircleContainer> */}
      </div>
    );
  }
}

export default Slider;
