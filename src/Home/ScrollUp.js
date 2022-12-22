import "./ScrollUp.css";
import React, {useEffect, Component } from "react";
import Slider from "react-slick";
import one from "../images/scrollimg1.svg";
import {Space, Skeleton } from 'antd';
import 'aos/dist/aos.css';
import Aos from 'aos'

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
     
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      cssEase: "linear",
      vertical: true,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
    };
   
    return (
      <div className="scroll-main">
        <div className="scroll-left" data-aos="fade-right">
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
        <div className="scroll-right" data-aos="fade-left">

          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            {scrolldata.map((item,key) => {
              return (
                <div className="scroll-card" >
                  <div className="scroll-card-left"></div>
                  <div className="scroll-card-tag" key={key}>
                    
                    <div>
                      <img src={item.img} alt={item.altr} />
                    </div>
                    <div>
                      <p>{item.title} </p>
                    </div>
                  </div>
                  <div className="scroll-card-right"></div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
