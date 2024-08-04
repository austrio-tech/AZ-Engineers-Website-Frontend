import React from "react";
import "./style/Contact.css"; // Make sure to create and include this CSS file
import ContactUsForm from "../components/ContactUs";
// import LinkedInTooltip from "../components/ToolTips/LinkedInTooltip";
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
            <p>
              <strong>Email:</strong>{" "}
              <a href={contactInfo.emailContact.Href}>{contactInfo.emailContact.Value}</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={contactInfo.phone1.Href}>{contactInfo.phone1.Value}</a>
            {/* </p>
            <p>
              <strong>Phone:</strong>{" "} */}{" "}
              <a href={contactInfo.phone2.Href}>{contactInfo.phone2.Value}</a>
            </p>
            <p>
              <strong>Address:</strong>{" "}
              <a href={contactInfo.address.Href}>{contactInfo.address.Value}</a>
            </p>
            {/* <div className="">
            <LinkedInTooltip></LinkedInTooltip>
            </div> */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6061248089254!2d58.334718699999996!3d23.582585599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e0008a9ff9a05%3A0x546c6ab25880ce97!2zQVogRW5naW5lZXJzICYgUGFydG5lcnMgTC5MLkMgT21hbiDYp9mE2YXZh9mG2K_Ys9mK2YYg2KfZiiDYstivINmIINi02LHZg9in2KbZh9mF!5e0!3m2!1sen!2som!4v1722684582629!5m2!1sen!2som"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
          </div>
          <ContactUsForm/>
        </div>
         
      </div>
    </section>
  );
};

export default ContactUs;
