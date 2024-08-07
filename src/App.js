// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
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
          <Route path="/projects/completed" element={<Projects />} />
          <Route path="/projects/current" element={<Projects current={true} />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
