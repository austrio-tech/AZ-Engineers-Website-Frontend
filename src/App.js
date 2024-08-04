// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Services from './containers/Services';
import About from './containers/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/Buttons/BackToTopButton';
import './variables/GLOB_VARS.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
