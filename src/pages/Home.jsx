// components/Home.js
import React from 'react';
import Fade from 'react-reveal/Fade';
import IntroVideo from '../sections/IntroVideo';
import Services from '../containers/Services';
import CompletedProjects from '../containers/CompletedProjects';
import CurrentProjects from '../containers/CurrentProjects';
import About from '../containers/About';
import Address from '../containers/Address';
import '../style/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Fade bottom>
        <IntroVideo />
      </Fade>
      <Fade bottom>
        <Services />
      </Fade>
      <Fade bottom>
        <CompletedProjects />
      </Fade>
      <Fade bottom>
        <CurrentProjects />
      </Fade>
      <Fade bottom>
        <About />
      </Fade>
      <Fade bottom>
        <Address />
      </Fade>
    </div>
  );
};

export default Home;
