import React, { Component } from "react";
import "./HeroImg2Styles.css";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <p>{this.props.text1}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
