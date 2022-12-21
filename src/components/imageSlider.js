import React from "react";
import ReactDOM from "react-dom";
import "./Slider.css";
import styled from "styled-components";

import Beer1 from "../slideshow_images/Beer1.png";
import Beer2 from "../slideshow_images/Beer2.png";
import Beer3 from "../slideshow_images/Beer3.png";
import Beer4 from "../slideshow_images/Beer4.png";

const slideData = [
  {
    title: "Fall 2020 Collection",
    img: Beer1,
    label: "LUCA",    
    index: 0
  },
  {
    title: "Fall 2020 Collection",
    img: Beer2,
    label: "AlWAYS",
    index: 1
  },
  {
    title: "Fall 2020 Collection",
    img: Beer3,
    label: "ALICE",
    index: 2
  },
  {
    title: "Fall 2020 Collection",
    img: Beer4,
    label: "AINSLEY",
    index: 3
  },
];

const Slide = ({ property }) => {
  const { title, imga, imgb, labela, labelb, index } = property;
  return (
    <div id={`slide-${index}`} className="slide">
      <div className="slide-container">
        <div className="image-1">
          <img src={img} className="slide-img" />
          <p className="slide-text">{`${label}`}</p>
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
    if (this.state.property.index >= 0) {
      const newIndex = this.state.property.index - 1;
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