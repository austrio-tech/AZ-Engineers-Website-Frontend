import React from "react";
import "./style/Contact.css"; // Make sure to create and include this CSS file
import ContactUsForm from "../components/ContactUs";
import MapLocation from "../components/MapLocation";
import LinkedInTooltip from "../components/ToolTips/LinkedInTooltip";
import { contactInfo } from "../variables/vars";
const ContactUs = () => {
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
              <div>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={contactInfo.emailContact.Href}>
                    {contactInfo.emailContact.Value}
                  </a>
                </p>
                <p>
                  <strong className="inlineTab">Phone:</strong>{" "}
                  <p className="inlineTab">
                    <a href={contactInfo.phone1.Href}>
                      {contactInfo.phone1.Value}
                    </a>
                    <br />
                    <a href={contactInfo.phone2.Href}>
                      {contactInfo.phone2.Value}
                    </a>
                  </p>
                </p>
              </div>
              <div>
                <LinkedInTooltip></LinkedInTooltip>
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

export default ContactUs;
