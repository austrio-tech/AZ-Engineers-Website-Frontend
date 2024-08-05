// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Footer from "./components/Footer";
import BackToTopButton from "./components/Buttons/BackToTopButton";
import "./variables/GLOB_VARS.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
