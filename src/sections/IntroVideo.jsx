// components/IntroVideo.js
import React from "react";
import "./style/IntroVideo.css";
import introVid from "../assets/IntroVideo.mp4";

const IntroVideo = () => {
  return (
    <div className="intro-video">
      <div className="intro-video__container">
        <video className="intro-video__video" autoPlay loop muted>
          <source src={introVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  ); 
};

export default IntroVideo;
