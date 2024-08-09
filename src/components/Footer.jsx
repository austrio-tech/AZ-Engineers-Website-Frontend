// components/Footer.js
import React from "react";
import "./style/Footer.css";
import { contactInfo } from "../variables/vars";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footerContainer">
        <div className="footer-top">
          <div className="footer-col">
            <h4>About Us</h4>
            <p className="justify">
              We Provide Construction Services in Oman major cities. Our
              services include Data Centers & Multi-story Building Construction,
              Roadworks, Bridges and Underpasses, Box Culverts and Rigid
              Pavements, and other related work.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Policies">Our Policies</a>
              </li>
              <li>
                <a href="/certificates">Awards & Certificates</a>
              </li>
              <li>
                <a href="/projects">Our Projects</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col noUnderline">
            <h4>Contact Us</h4>
            <p>
              <a href={contactInfo.address.Href}>{contactInfo.address.Value}</a>
            </p>
            <p>
              Phone: <br />
              <a href={contactInfo.phone1.Href}>{contactInfo.phone1.Value}</a>
              <br />
              <a href={contactInfo.phone2.Href}>{contactInfo.phone2.Value}</a>
            </p>
            <p>
              Email:{" "}
              <a href={contactInfo.emailContact.Href}>
                {contactInfo.emailContact.Value}
              </a>
            </p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AZ Engineers and Partners. All rights reserved.</p>
          <p>
            Designed by <a href="/">AZEP Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
