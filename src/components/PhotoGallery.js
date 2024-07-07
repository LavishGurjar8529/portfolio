// src/components/PhotoGallery.js
import React from 'react';
import './PhotoGallery.css';

// Dynamically import all images from the directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const PhotoGallery = () => {
  return (
    <div className="container">
      <h1 className="gallery-title">Photo Gallery</h1>
      <p className="gallery-description">Check out some of the photos from my collection.</p>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.default || image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
