import React, { useEffect,useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
//import { ArrowRightOutlined } from "@ant-design/icons";

import azeroicon from "../images/azero.jpeg";
import "./Home.css";
import HeroFooter from "./HeroFooter";
import WebOverview from "./WebOverview";
import NetworkUpgrade from "./NetworkUpgrade";
import Environment from "./Environment";
import Community from "./Community";
import AzeroCard from "./AzeroCard";
import ScrollUp from "./ScrollUp";
import Foter from "./Foter";
import Scelton from "./Scelton";
import InfraStructer from "./InfraStructer";
import { BsArrowRight } from "react-icons/bs";

// import AutoPlay from "./AutoPlay";



const Webdata = [
  { title: "0.9 sec", text: "Time to Finality" },
  { title: "0.0003 AZERO", text: "Avg Cost PerTransaction" },
  { title: "~318,5 M", text: "Total Issuance" },
  { title: "~34 M", text: "Finalized blocks" },
  { title: "64.3%", text: "Supply Staked" },
];

function Home() {

  
  return (
    <div  className= "top-header">
      <div className="top-header-div-1">
        <div className="header-data" >
          <div className="img-div">
            <img src={azeroicon} alt="Icon" className="header-datad-icon" />
          </div>
          <div>
            <p className="header-data-title">
              Community validators{" "}
              <span className="data-title2"> are live on the mainnet!</span>
            </p>
            </div>
            <div className="divider"></div>

            <div className="learn-div">
              <p>Learn more</p>
              <div className="arrow-icon" ><BsArrowRight  /></div>
            </div>
            
          
        </div>
      </div>

      <div className="top-header-div-2"></div>
      <Header />
      <HeroSection />
      <HeroFooter />
      <div className="divider-tag"></div>
      <WebOverview webdata={Webdata} />
     
      <InfraStructer />
      <Scelton/>
      <NetworkUpgrade />
      <ScrollUp />
      <Environment />
      <Community />
      <AzeroCard />
      
      
    
      <Foter />
      
    </div>
  );
}

export default Home;
