import React from "react";
import "./style/ContactInfo.css";
import { contactInfo } from "../variables/vars";

const ContactInfo = ({ extras = false }) => {
  return (
    <div className="left">
      <p>
        {extras ? (
          <div className="contactsTitle">General Queries</div>
        ) : (
          <strong>Email:</strong>
        )}
        <a href={contactInfo.emailContact.Href}>
          {contactInfo.emailContact.Value}
        </a>
      </p>
      {extras && (
        <>
          <p>
            <div className="contactsTitle">Careers</div>
            <a href={contactInfo.emailCareers.Href}>
              {contactInfo.emailCareers.Value}
            </a>
          </p>
          <p>
            <div className="contactsTitle">Tenders</div>
            <a href={contactInfo.emailTender.Href}>
              {contactInfo.emailTender.Value}
            </a>
          </p>
        </>
      )}
      <p>
        {extras ? (
          <div className="contactsTitle">Phone</div>
        ) : (
          <strong className="inlineTab">Phone:</strong>
        )}
        <p className="inlineTab">
          <a href={contactInfo.phone1.Href}>{contactInfo.phone1.Value}</a>
          <br />
          <a href={contactInfo.phone2.Href}>{contactInfo.phone2.Value}</a>
        </p>
      </p>
      {extras && (
        <p>
          <div className="contactsTitle">Address:</div>
          <a href={contactInfo.address.Href}>{contactInfo.address.Value}</a>
        </p>
      )}
    </div>
  );
};

export default ContactInfo;
