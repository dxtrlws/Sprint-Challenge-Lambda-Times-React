import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0
    };
  }
  componentDidMount() {
    this.setState({ images: carouselData });
  }

  leftClick = () => {
    if (this.state.currentIndex <= 0) {
      this.setState({ currentIndex: this.state.images.length - 1 });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
    }
  };

  rightClick = () => {
    if (this.state.currentIndex >= this.state.images.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
    }
  };

  // selectedImage = () => {
  //   return <img src={} style={{ display: "block" }} />;
  // };

  render() {
    return (
      <div className="carousel">
        
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <img
          src={this.state.images[this.state.currentIndex]}
          style={{ display: "block" }}
        />
        ;
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
