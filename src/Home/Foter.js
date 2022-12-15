import { Checkbox } from "antd";
import React from "react";
import "./Foter.css";
import img1 from "../images/ftrimg1.svg";

const footercard = [
  {
    img: img1,
    title: "Aleph Zero Foundation",
    para: "The Aleph Zero Foundation is responsible for overseeing the development of Aleph Zero protocol. The Foundation is also the issuer of the AZERO coin.",
    address: "Bergliweg 15, 6300 Zug, Switzerland" ,
    email:["hello@alephzero.org"]
    
    
  },
  {
    img: img1,
    title: "Cardinal Cryptography Sp. z o.o.",
    para: "The Aleph Zero Foundation is responsible for overseeing the development of Aleph Zero protocol. The Foundation is also the issuer of the AZERO coin.",
    address: "Bergliweg 15, 6300 Zug, Switzerland" ,
    email:["hello@alephzero.org","hello@alephzero.org"] }
  
];

const footerdata = [
  {
    heading: "Learn",

    link: [
      "Why aleph zero",
      "application",
      "Utility and Economics",
      "Carbon Footprint",
      "Faq",
      "White Papers",
      "Blog",
    ],
  },
  {
    heading: "Use",

    link: [
      "Why aleph zero",
      "application",
      "Utility and Economics",
      "Carbon Footprint",
      "Faq",
      "White Papers",
      "Blog",
    ],
  },
  {
    heading: "Explore",

    link: [
      "Why aleph zero",
      "application",
      "Utility and Economics",
      "Carbon Footprint",
      "Faq",
      "White Papers",
      "Blog",
    ],
  },
  {
    heading: "Meet Us",

    link: [
      "Why aleph zero",
      "application",
      "Utility and Economics",
      "Carbon Footprint",
      "Faq",
      "White Papers",
      "Blog",
    ],
  },
];

function Foter() {
  return (
    <div className="footer-main">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-title-tag">
            <div className="footer-top-left-divider"></div>{" "}
            <p className="footer-top-left-title">Be future-ready</p>
          </div>
          <div>
            <p className="footer-top-left-des1">
              Get the latest from the Aleph Zero ecosystem and engineering
              updates, straight to your inbox.
            </p>
          </div>
          <div className="footer-top-left-input">
            <input placeholder="Your email" className="input-field" />{" "}
            <button>Subscribe</button>
          </div>
          <div className="footer-top-left-des2-tag">
            <Checkbox></Checkbox>
            <p className="footer-top-left-des2">
              I consent to receive commercial information in the form of a
              newsletter sent to the e-mail address provided by the Aleph Zero
              Foundation with registered seat in Bergliweg 15, 6300 Zug.
              Providing consent is voluntary. Consent may be revoked at any
              time.
            </p>
          </div>
          <div></div>
        </div>
        <div className="footer-top-right">
          {footerdata.map((item, index) => {
            return (
              <div className="list-div">
                <h3 key={index} className="list-heading">
                  {" "}
                  {item.heading}{" "}
                </h3>

                {item.link.map((value, key) => {
                  return (
                    <li key={key} className="list-link">
                      {value}
                    </li>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-center">
        {footercard.map((item) => {
          return (
            <div className="footer-card">
              <div className="footer-card-first">
                <div>
                  <img src={item.img} alt="image" className="footer-card-img" />
                </div>
                <div>
                  <h3 className="footer-card-title">{item.title}</h3>
                  <p className="footer-card-para">{item.para}</p>
                </div>
              </div>
              <div className="footer-divider"></div>
              <div className="footer-card-second">
                <p className="footer-card-second-address"> {item.address}</p>
                <div>
                {item.email.map((items) => {
                  return (
                   
                      <p className="footer-card-second-address">{items}</p>
                     
                  );
                })}
                 </div>
               
              </div>
            </div>
          );
        })}

        
      </div>
      <div className="footer-divider2"></div>
      <div className="footer-bottom">

        <div><p className="footer-bottom-left-para">Aleph Zero Foundation © 2018-2022</p></div>
        <div><p className="footer-bottom-right-para">Privacy Policy</p></div>
      </div>
    </div>
  );
}

export default Foter;
