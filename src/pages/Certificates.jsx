import React from "react";
import "./style/Certificates.css";
import ImageGallery from "../components/ImageGallery";
import { awards } from "../variables/vars";

const Certificates = () => {
  return (
    <div className="certs">
      <div className="headGap"></div>
      <div className="shadowText headingContainer">Certificates</div>
      <ImageGallery images={awards} />
    </div>
  );
};

export default Certificates;
