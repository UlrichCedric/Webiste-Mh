import React from 'react';
import './home.css';
import backgroundImage from '../../assets/background.jpg'; // Importe l'image d'arrière-plan
import image1 from '../../assets/photo.jpg'; // Importe la première image
import image2 from '../../assets/photo.jpg'; // Importe la deuxième image

const home = () => {
  return (
    <div className="first-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="first-section-content">
      <h1 className="main-title">Musculation Hayangeoise</h1>
      <div className="first-section-text-container">
        <div className="text-block">
          <div className="text-content">
            <h2>Titre du bloc 1</h2>
            <p>Texte du bloc 1</p>
          </div>
          <img src={image1} alt="Image 1" />
        </div>
        <div className="text-block">
          <img src={image2} alt="Image 2" />
          <div className="text-content">
            <h2>Titre du bloc 2</h2>
            <p>Texte du bloc 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default home;