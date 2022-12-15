import React from "react";
import icon1 from "../images/azero1.svg";
import icon2 from "../images/azeroicon2.svg";
import icon3 from "../images/azeroicon3.svg";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./AzeroCard.css";

const azerodata = [
  {
    icon: icon1,
    azerotitle1: "Azero",
    azerotitle2: "Wallet",
    azerodes:
      "Set up your aleph zero wallet to be able to hold , transfer or stake your azero coin",
    btndata: "Go to",
    altr: "icon-1",
  },
  {
    icon: icon2,
    azerotitle1: "Azero",
    azerotitle2: "Explorer",
    azerodes:
      "Set up your aleph zero wallet to be able to hold , transfer or stake your azero coin",
    btndata: "Go to",
    altr: "icon-2",
  },
  {
    icon: icon3,
    azerotitle1: "Azero",
    azerotitle2: "Utitlity",
    azerodes:
      "Set up your aleph zero wallet to be able to hold , transfer or stake your azero coin",
    btndata: "Go to",
    altr: "icon-3",
  },
];
function AzeroCard() {
  return (
    <div className="azero-card-main">
      {azerodata.map((item) => {
        return (
          <div className="azero-main">
            <div className="azero-img">
              <img src={item.icon} alt={item.altr} />
            </div>
            <div className="azero-data">
              <div className="azero-data-title-tag">
                <p className="azero-data-title">
                  {item.azerotitle1}{" "}
                  <span className="azero-title-2">{item.azerotitle2}</span>
                </p>
              </div>
              <div>
                <p className="azero-data-des">{item.azerodes}</p>
              </div>
            </div>
            <div className="azero-btn">
              <button className="azero-btn-tag">
                <ArrowRightOutlined />
                <span className="btn-text">{item.btndata}</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AzeroCard;
