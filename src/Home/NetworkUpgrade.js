import React,{useEffect} from 'react'
import './NetworkUpgrade.css';
import { Card } from "antd";
import card2 from '../images/card2.jpg'
import { BsArrowRight } from "react-icons/bs";
import 'aos/dist/aos.css';
import Aos from 'aos'

function NetworkUpgrade() {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
    const { Meta } = Card;
  return (
    <div className='network-main' data-aos="fade-right">
         <Card
        hoverable
       
        cover={<img alt="example" src={card2} className="card-img" />}
        className="card-tag"
      >
        
          <Meta
            title="Curious For Upcoming Upgrade"
            className="meta-tag"
          />
       
        <div className="card-bottom">
        <p className="bottom-tag">Go to the Roadmap</p>
        <BsArrowRight className="bottom-tag-arrow"  />
        </div>

        
      </Card>

     

    </div>
  )
}

export default NetworkUpgrade
