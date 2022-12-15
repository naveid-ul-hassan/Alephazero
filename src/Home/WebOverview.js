import React from "react";
import "./WebOverview.css";
function WebOverview({ webdata }) {
  return (
    <div className="web-head">

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
