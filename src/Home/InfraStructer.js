import React,{useEffect} from "react";
import "./InfraStructer.css";
import { Card } from "antd";
import blockchain from "../images/leftimg.jpg";
import { BsArrowRight } from "react-icons/bs";
import 'aos/dist/aos.css';
import Aos from 'aos'

function InfraStructer() {
  useEffect(()=>{
    Aos.init({duration:1500,once: true})
    
  },[])
  const { Meta } = Card;
  return (
    <div className="infrastructer-main" data-aos="fade-left">
     
      <Card
        hoverable
        // style={{ width: 470 }}
        cover={<img alt="example" src={blockchain} className="card-img" />}
        className="card-tag"
        data-aos="fade-left"
      >
       <Meta
            title="We are building a new take on blockchain infrastructer"
            className="meta-tag"
          />
          <div className="card-bottom">
            <p className="bottom-tag">WHY ALEPH ZERO</p>
          {/* <Meta description="WHY ALEPH ZERO"  className="bottom-tag" />  */}
         
         <BsArrowRight className="bottom-tag-arrow"  />
         
          
          </div>
      </Card>
    </div>
  );
}

export default InfraStructer;
