// components/Footer.js
import React from "react";
import "../style/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>
              Office No. 31 & 34 Building 1/344 Jami Al Akbar Street Ghala
              Industrial Area Bousher Muscat Sultanate Of Oman
            </p>
            <p>
              Phone: <br />
              <a href="tel:+96824495594">+968 244 955 94</a>
              <br />
              <a href="tel:+96824495598">+968 244 955 98</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@azengineers.com">info@azengineers.com</a>
            </p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
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
