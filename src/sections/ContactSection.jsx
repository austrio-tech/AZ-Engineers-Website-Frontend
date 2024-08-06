import React from "react";
import ContactUsForm from "../components/ContactUs";
import MapLocation from "../components/MapLocation";
import ContactInfo from "../components/ContactInfo";
import LinkedInTooltip from "../components/ToolTips/LinkedInTooltip";
import { contactInfo } from "../variables/vars";
import "./style/ContactSection.css";
const ContactSection = () => {
  return (
    <section className="contact-us">
      <div className="container contactContainer">
        <div className="headingContainer">
          <div className="headingTitle">Contact</div> Us
        </div>
        <br />
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="myFlex">
              <ContactInfo />
              <div>
                <LinkedInTooltip />
              </div>
            </div>
            <p>
              <strong>Address:</strong>{" "}
              <a href={contactInfo.address.Href}>{contactInfo.address.Value}</a>
            </p>
            <MapLocation />
          </div>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
