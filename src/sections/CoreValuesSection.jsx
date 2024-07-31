import React, { useState, useEffect } from "react";
import "./style/CoreValuesSection.css"; // Import the CSS file
import { coreValues } from "../variables/vars";

const colors = ["#fff", "#eee", "#ddd", "#ccc", "#bbb", "#aaa", "#999"];
const CardComponent = () => {
  const [hovered, setHovered] = useState(false);
  // const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState(null);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const swapCardIndices = (alpha) => {
    // Find indices of the cards to swap
    const cardAlpha = coreValues.find((card) => card.index === alpha);
    const cardSix = coreValues.find((card) => card.index === cards.length - 1);

    if (!cardAlpha || !cardSix) {
      console.error(
        "One or both of the cards do not exist.",
        cardAlpha,
        cardSix
      );
      return;
    }

    // Swap indices
    [cardAlpha.index, cardSix.index] = [cardSix.index, cardAlpha.index];

    // Sort the cards array by index to maintain the correct order
    cards.sort((a, b) => a.index - b.index);
    setCards(coreValues);
  };
  const handleCardClick = (index) => {
    swapCardIndices(index);
    console.log(cards);
  };

  useEffect(() => {
    // Initialise cards array
    const newCards = [...coreValues].map((card, index) => ({
      ...card,
      index,
    }));
    setCards(newCards);
    console.log(newCards);
  }, []);

  return (
    <div className="main">
      {cards?.map((card, index) => {
        const rotationAngle = 15 * (-(cards.length / 2) + card.index + 1);

        return (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`card ${hovered ? "hovered" : ""} `}
            style={{
              backgroundColor:
                colors[colors.length - card.index - 1],
              transform: hovered ? `rotate(${rotationAngle}deg)` : "none",
              zIndex: card.index,
              transformOrigin: "right bottom", // Set the origin to the left bottom corner
            }}
            onClick={() => handleCardClick(index)}
          >
            {card.title}, {card.index}
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
