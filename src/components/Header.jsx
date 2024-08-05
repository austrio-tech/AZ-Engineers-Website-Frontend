// components/Header.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/imgs/logos/Horizontal_Logo_No_BG.png";
import "./style/Header.css";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    setScrolled(scrollTop > viewportHeight / 6);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash in the location
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container headerContainer">
        <div className="logo-container">
          <img
            src={logo}
            alt="Construction Company Logo"
            className="logo-image"
          />
        </div>
        <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
