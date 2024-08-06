import React, { useState } from 'react';
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

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container" onClick={() => handleImageClick(index)}>
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
          <img src={images[selectedImageIndex].img} alt={images[selectedImageIndex].name} className="large-image" />
          <span className="close" onClick={closeImageView}>&times;</span>
          <button className="nav-button left" onClick={(e) => { e.stopPropagation(); showPreviousImage(); }}>&lt;</button>
          <button className="nav-button right" onClick={(e) => { e.stopPropagation(); showNextImage(); }}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
