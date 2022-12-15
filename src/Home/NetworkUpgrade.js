import React from 'react'
import './NetworkUpgrade.css';
import { Card } from "antd";
import card2 from '../images/card2.jpg'

function NetworkUpgrade() {
    const { Meta } = Card;
  return (
    <div className='network-main'>
         <Card
        hoverable
        style={{ width: 470 }}
        cover={<img alt="example" src={card2} className="card-img" />}
        className="card-tag"
      >
        <div>
          <Meta
            title="Curious For Upcoming Upgrade"
            className="meta-tag"
          />
        </div>
        <div className="decript">
          <Meta description="Go to the Roadmap" />
        </div>
      </Card>
    </div>
  )
}

export default NetworkUpgrade
