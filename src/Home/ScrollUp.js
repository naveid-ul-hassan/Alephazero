import "./ScrollUp.css";
import React, { Component } from "react";
import Slider from "react-slick";
import one from "../images/scrollimg1.svg";

const scrolldata = [
  { img: one, title: "DNS", altr: "One" },
  { img: one, title: "Supply Chain Management", altr: "two" },
  { img: one, title: "DNS", altr: "three" },
  { img: one, title: "DNS", altr: "four" },
  { img: one, title: "DNS", altr: "five" },
  { img: one, title: "DNS", altr: "five" },
  { img: one, title: "DNS", altr: "five" },
  { img: one, title: "DNS", altr: "five" },
];

export default class ScrollUp extends Component {
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
      infinite: true,

      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: 100,
      speed: 1000,

      cssEase: "linear",
      vertical: true,
    };

    return (
      <div className="scroll-main">
        <div className="scroll-left">
          <div>
            <p className="scroll-left-title">
              Driving <span className="left-title2"> web3 Adoption </span>
            </p>
          </div>
          <div className="scroll-left-divider"></div>
          <div>
            <p className="scroll-left-para">
              Aleph Zero bridges the gap between scalability, security,
              developer friendliness, and cost of use. Moreover, the network
              will boast a native privacy stack to further enable you to build
              solutions that strike the balance between transparency and
              privacy.
            </p>
          </div>
          <div>
            <button className="scroll-left-btn">See What,s Possible</button>
          </div>
        </div>
        <div className="scroll-right">
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            {scrolldata.map((item) => {
              return (
                <div className="scroll-card">
                  <div className="scroll-card-tag">
                    <div>
                      <img src={item.img} alt={item.altr} />
                    </div>
                    <div>
                      <p>{item.title} </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
