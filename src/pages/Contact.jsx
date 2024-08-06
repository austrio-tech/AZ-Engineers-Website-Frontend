// components/Contact.js
import React from "react";
import ContactInfo from "../components/ContactInfo";
import MapLocation from "../components/MapLocation";
import ContactUsForm from "../components/ContactUs";
import "./style/Contact.css";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="headGap"></div>
      <div className="headingContainer">
        <div className="headingTitle">Contact</div> Us
      </div>
      <div className="myFlex">
        <div className="contactInfos shadow">
          <ContactInfo extras={true} />
        </div>
        <ContactUsForm paged={true} />
      </div>
      <div className="mapContainer">
        <MapLocation />
      </div>
    </div>
  );
};

export default Contact;
