import React,{useEffect} from 'react'
import './Environment.css';
import { Card } from "antd";
import bg3 from '../images/card3.jpg';
import { BsArrowRight } from "react-icons/bs";
import 'aos/dist/aos.css';
import Aos from 'aos'

function Environment() {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
    const { Meta } = Card;
  return (
    
      <div className='environment-main' data-aos="fade-left">
         <Card
        hoverable
        // style={{ width: 470 }}
        cover={<img alt="example" src={bg3} className="card-img" />}
        className="card-tag"
      >
       
          <Meta
            title="Aleph Zero is designed to care for the Environment"
            className="meta-tag"
          />
       
        <div className="card-bottom">
        <p className="bottom-tag">Our carbon Footprint</p>
        <BsArrowRight className="bottom-tag-arrow"  />
        </div>

        
        



      </Card>

    </div>
    
  )
}

export default Environment
