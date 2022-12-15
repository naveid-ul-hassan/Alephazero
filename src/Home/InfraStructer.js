import React from "react";
import "./InfraStructer.css";
import { Card } from "antd";
import blockchain from "../images/leftimg.jpg";

function InfraStructer() {
  const { Meta } = Card;
  return (
    <div className="infrastructer-main">
     
      <Card
        hoverable
        style={{ width: 470 }}
        cover={<img alt="example" src={blockchain} className="card-img" />}
        className="card-tag"
      >
        <div>
          <Meta
            title="We are building a new take on blockchain infrastructer"
            className="meta-tag"
          />
        </div>
        <div className="decript">
          <Meta description="WHY ALEPH ZERO ?" />
        </div>
      </Card>
    </div>
  );
}

export default InfraStructer;
