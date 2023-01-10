import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/imageSlider.css";
import styled from "styled-components";

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
      console.log(this.state.property.index);
    }
    if (this.state.property.index == this.props.slideData.length - 1) {
      const newIndex = 0;
      this.setState({
        property: this.props.slideData[newIndex],
      });
      console.log(this.state.property.index);
    }
  };

  AutoScroll = () => {
    //  var stopFiring = false
    //  console.log(stopFiring);
    //   if (stopFiring = false) {
    setInterval(this.nextProperty, 3000);
    //   stopFiring = true;
    //   console.log(stopFiring);
    // }
  };

  render() {
    const { stopFiring, property } = this.state;

    const slideShow = () => {
      this.AutoScroll();
      console.log("fired")
    };

    window.onload=function() {
      slideShow()
    };

    return (
      <div>
        <div
          className="card"
        >
          {/* <button className="button" onClick={() => this.prevProperty()}>
          <p className='button-icon'>&#10094;</p>
          </button> */}
          <div
            className="slide"
            // onLoad={slideShow}
          >
            <Slide property={property} />
          </div>
          <button className="button" onClick={() => this.AutoScroll()}>
            <p className="button-icon">&#10095;</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
