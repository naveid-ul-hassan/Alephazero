import React,{useEffect} from "react";
import "./WebOverview.css";

import 'aos/dist/aos.css';
import Aos from 'aos'

function WebOverview({ webdata }) {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="web-head" data-aos="zoom-in">

      {webdata.map((item) => {
        return (
          <div className="web-tag">
            <div className="web-title">
              <p className="web-title-tag">{item.title}</p>
            </div>
            <div className="web-divider"></div>
            <div className="web-text">
            
              <p className="web-text-tag">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WebOverview;
