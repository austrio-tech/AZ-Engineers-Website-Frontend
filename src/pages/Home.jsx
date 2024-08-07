// components/Home.js
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import IntroVideo from "../sections/IntroVideo";
import CoreValuesSection from "../sections/CoreValuesSection";
import Contact from "../sections/ContactSection";
import { certBanner } from "../variables/vars";
import "./style/Home.css";

const Home = () => {
  useEffect(() => {
    const adjustCardHeights = () => {
      const cards = document.querySelectorAll(".card");
      let maxHeight = 0;

      // Reset heights to find the tallest one
      cards.forEach((card) => {
        card.style.height = "auto";
      });

      // Find the maximum height
      cards.forEach((card) => {
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight;
        }
      });

      // Set all cards to the maximum height
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    // Adjust heights on load
    adjustCardHeights();

    // Adjust heights on resize
    window.addEventListener("resize", adjustCardHeights);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustCardHeights);
    };
  }, []);
  return (
    <div className="home bg1">
      <Fade right>
        <img src={certBanner} alt="Fixed" className="fixed-image" />
      </Fade>
      <Fade bottom>
        <IntroVideo />
      </Fade>
      <div className="lilGap bg1" />
      <Fade bottom>
        <div className="bg1">
          <CoreValuesSection />
        </div>
      </Fade>
      <Fade bottom>
        <div className="bg2">
          <Contact />
        </div>
      </Fade>
    </div>
  );
};

export default Home;
