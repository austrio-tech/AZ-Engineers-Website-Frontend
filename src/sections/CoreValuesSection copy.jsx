// import React, { useState, useEffect } from "react";
// import "./style/CoreValuesSection.css"; // Import the CSS file
// import { coreValues } from "../variables/vars";

// const colors = ["#fff", "#eee", "#ddd", "#ccc", "#bbb", "#aaa", "#999"];
// const CardComponent = () => {
//   const [hovered, setHovered] = useState(false);
//   const [cards, setCards] = useState([]);

//   const handleMouseEnter = () => setHovered(true);
//   const handleMouseLeave = () => setHovered(false);

//   const swapCardIndices = (alpha) => {
//     setCards((prevCards) => {
//       const cardAlpha = prevCards.find((card) => card.index === alpha);
//       const cardSix = prevCards.find(
//         (card) => card.index === prevCards.length - 1
//       );

//       if (!cardAlpha || !cardSix) {
//         console.error(
//           "One or both of the cards do not exist.",
//           cardAlpha,
//           cardSix
//         );
//         return prevCards;
//       }

//       // Swap indices
//       [cardAlpha.index, cardSix.index] = [cardSix.index, cardAlpha.index];

//       // Sort the cards array by index to maintain the correct order
//       const newCards = [...prevCards];
//       newCards.sort((a, b) => a.index - b.index);
//       return newCards;
//     });
//   };

//   const handleCardClick = (index) => {
//     swapCardIndices(index);
//     setHovered(false);
//     console.log(cards);
//   };

//   useEffect(() => {
//     // Initialise cards array
//     const newCards = [...coreValues].map((card, index) => ({
//       ...card,
//       index,
//     }));
//     setCards(newCards);
//     console.log(newCards);
//   }, []);

//   return (
//     <div className="main-container">
//       <div className="headingContainer">
//         Our{" "}
//         <div className="headingTitle">
//           Core <br /> Values
//         </div>
//       </div>
//       <div className="cards-container">
//         {cards?.map((card, idx) => {
//           const rotationAngle = 0.5 * (-(cards.length / 2) + card.index + 1);
//           const translateX = 30 * (card.index - cards.length / 2);
//           const translateY = 60 * (card.index - cards.length / 2);

//           return (
//             <div
//               key={card.number}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               className={`card ${hovered ? "hovered" : ""}`}
//               style={{
//                 backgroundColor:
//                   colors[
//                     colors.length -
//                       card.index -
//                       1 -
//                       (colors.length - cards.length)
//                   ],
//                 transform: hovered
//                   ? `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotationAngle}deg)`
//                   : `translateX(${translateX / 10}px) translateY(${
//                       translateY / 10
//                     }px) rotate(${rotationAngle / 10}deg)`,
//                 zIndex: hovered ? cards.length - 1 : card.index,
//                 transition:
//                   "transform 0.3s ease-in-out, z-index 0.3s ease, box-shadow 0.3s",
//               }}
//               onClick={() => handleCardClick(card.index)}
//             >
//               <div className="cardHead">
//                 <h3 className="cardNumber">{card.number}</h3>
//                 <h2 className="cardTitle">{card.title}</h2>
//               </div>
//               <p className="cardDescription">{card.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CardComponent;
