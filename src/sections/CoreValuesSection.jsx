// import React, { useState, useEffect } from "react";
import "./style/CoreValuesSection.css"; // Import the CSS file
import { coreValues } from "../variables/vars";
import Card from "../components/Card";

const CardComponent = () => {
  

  return (
    <div className="main-container">
      <div className="headingContainer">
        Our{" "}
        <div className="headingTitle">
          Core Values
        </div>
      </div>
      <div className="cards-container">
        {coreValues?.map((card, idx) => {
          return (
            <Card title={card.title} content={card.description}/>
          );
        })}
      </div>
    </div>
  );
};

export default CardComponent;
