import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./imageSlider.css";
import styled from "styled-components";


const slide = styled.div`

`

const SlideContainer = styled.div`

`

const ImageContainer = styled.div`

`

const SlideImage = styled.img`

`


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
      property: this.props.slideData[0]
    };
  }

  prevProperty = () => {
    if (this.state.property.index > 0) {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
      console.log(this.state.property.index)
    }
    if (this.state.property.index == 0) {
        const newIndex = this.props.slideData.length - 1;
        this.setState({
          property: this.props.slideData[newIndex]
        });
        console.log(this.state.property.index)
      }
  };

  nextProperty = () => {
    if (this.state.property.index >= 0) {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
      console.log(this.state.property.index)
    }
    if (this.state.property.index == this.props.slideData.length - 1) {
        const newIndex = 0;
        this.setState({
          property: this.props.slideData[newIndex]
        });
        console.log(this.state.property.index)
      }
  };

  AutoScroll = () => {
      setInterval(this.nextProperty, 3000); 
    }

  
  // AutoScroll = () => {
  //   useEffect(() => {
  //     setInterval(this.nextProperty, 3000); 
  //   })
  // };

  

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
          <button className="button" onClick={() => this.AutoScroll()}>
            <p className='button-icon'>&#10095;</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;