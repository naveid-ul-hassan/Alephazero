import React from 'react'
import azeroicon from "../images/azero.jpeg";
import './HeroFooter.css';

import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';

import five from '../images/5.png';
import six from '../images/6.png';

import seven from '../images/7.png';
import eight from '../images/8.png';
import nine from '../images/9.png';

function HeroFooter() {
  return (
    <div class="marquee bg-[#111B24]">
      <div>
        <p className="marquee-title">FEATURED IN</p>
      </div>
      <div class="marquee-content">
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={one} alt="" />
        </div>
        
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={two} alt="" />
        </div>
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={three} alt="" />
        </div>
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={four} alt="" />
        </div>
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={five} alt="" />
        </div>
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={six} alt="" />
        </div>
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={seven} alt="" />
        </div>
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={eight} alt="" />
        </div>
        <div class="marquee-item">
          <img className="bg-[#111B24]" src={nine} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default HeroFooter
