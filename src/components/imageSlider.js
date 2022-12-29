import React from "react";
import ReactDOM from "react-dom";
import "./imageSlider.css";
// import styled from "styled-components";

import Beer1 from "../slideshow_images/Beer1.jpeg";
import Beer2 from "../slideshow_images/Beer2.jpeg";
import Beer3 from "../slideshow_images/Beer3.jpeg";
import Beer4 from "../slideshow_images/Beer4.jpeg";

const slideData = [
  {
    title: "Image One",
    img: Beer1,
    label: "One",    
    index: 0
  },
  {
    title: "Iwage Two",
    img: Beer2,
    label: "Two",
    index: 1
  },
  {
    title: "Image Three",
    img: Beer3,
    label: "Three",
    index: 2
  },
  {
    title: "Image Four",
    img: Beer4,
    label: "Four",
    index: 3
  },
];

const Slide = ({ property }) => {
  const { title, img, label, index } = property;
  return (
    <div id={`slide-${index}`} className="slide">
      <div className="slide-container">
        <div className="image">
          <img src={img} className="slide-img" />
          {/* <p className="slide-text">{`${label}`}</p> */}
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
      property: this.props.slideData[0]
    };
  }

  prevProperty = () => {
    if (this.state.property.index > 0) {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
    if (this.state.property.index == 0) {
        const newIndex = this.props.slideData.length - 1;
        this.setState({
          property: this.props.slideData[newIndex]
        });
      }
  };

  nextProperty = () => {
    if (this.state.property.index >= 0) {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
    if (this.state.property.index == this.props.slideData.length - 1) {
        const newIndex = 0;
        this.setState({
          property: this.props.slideData[newIndex]
        });
      }
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <div className="card">
          <button className="button" onClick={() => this.prevProperty()}>
          <p className='button-icon'>&#10094;</p>
          </button>
          <div className="slide">
            <Slide property={property} />
          </div>
          <button className="button" onClick={() => this.nextProperty()}>
            <p className='button-icon'>&#10095;</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;