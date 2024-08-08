import React, { useState, useEffect } from "react";
import "./style/ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImageView = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex !== null) {
        if (event.key === "ArrowLeft") {
          showPreviousImage();
        } else if (event.key === "ArrowRight") {
          showNextImage();
        } else if (event.key === "Escape") {
          closeImageView();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, images.length]);

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => handleImageClick(index)}
          >
            <img src={image.img} alt={image.name} className="image" />
            <div className="overlay">
              <div className="Imagetext">{image.name}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="image-viewer" onClick={closeImageView}>
          <div className="image-header">
            <h2>{images[selectedImageIndex].name}</h2>
          </div>
          <img
            src={images[selectedImageIndex].img}
            alt={images[selectedImageIndex].name}
            className="large-image"
          />
          <span className="close" onClick={closeImageView}>
            &times;
          </span>

          <button
            className="button-3d nav-button left"
            onClick={(e) => {
              e.stopPropagation();
              showPreviousImage();
            }}
          >
            <div className="button-top">
              <span className="material-icons">❮</span>
            </div>
            <div className="button-bottom"></div>
          </button>
          <button
            className="button-3d nav-button right"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
          >
            <div className="button-top">
              <span className="material-icons">❯</span>
            </div>
            <div className="button-bottom"></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
