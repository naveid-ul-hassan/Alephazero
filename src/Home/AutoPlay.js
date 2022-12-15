import React, { Component } from "react";
import Slider from "react-slick";


export default class AutoPlay extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
      }
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        vertical:true
      };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div style={{background: "green", height: "150px", width: "150px"}}>
            <h3 style={{color: "blue"}} >1</h3>
          </div>
          <div style={{backgroundColor: "red", height: 150, width: 150}}>
            <h3 style={{color: "red"}}>2</h3>
          </div>
          <div style={{backgroundColor: "red", height: 150, width: 150}}>
            <h3>3</h3>
          </div>
          <div style={{backgroundColor: "red", height: 150, width: 150}}>
            <h3>4</h3>
          </div>
          <div style={{backgroundColor: "red", height: 150, width: 150}}>
            <h3>5</h3>
          </div>
          <div style={{backgroundColor: "red", height: 150, width: 150}}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}