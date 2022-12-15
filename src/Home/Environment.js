import React from 'react'
import './Environment.css';
import { Card } from "antd";
import bg3 from '../images/card3.jpg';
function Environment() {
    const { Meta } = Card;
  return (
    
      <div className='environment-main'>
         <Card
        hoverable
        style={{ width: 470 }}
        cover={<img alt="example" src={bg3} className="card-img" />}
        className="card-tag"
      >
        <div>
          <Meta
            title="Aleph Zero is designed to care for the Environment"
            className="meta-tag"
          />
        </div>
        <div className="decript">
          <Meta description="Our carbon Footprint" />
        </div>
      </Card>
    </div>
    
  )
}

export default Environment
