import React from "react";
import "./HeroStyle.css";

const HeroSection = () => {
  return (
    <div className="hero-main">
      <iframe
        src="https://fast.wistia.com/embed/medias/26rzfjtw60"
        autoplay
        controls={false}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HeroSection;
