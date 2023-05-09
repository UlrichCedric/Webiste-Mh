import React from 'react';
import './home.css';
import backgroundImage from '../../assets/background.jpg'; // Importe l'image d'arrière-plan
import image1 from '../../assets/photo.jpg'; // Importe la première image
import image2 from '../../assets/photo.jpg'; // Importe la deuxième image

const Home = () => {
  return (
    <div className="first-section">
      <img src={backgroundImage} alt="Arrière-plan" className="background-image" />
      <div className="first-section-overlay">
        <h1 className="main-title-home">Musculation Hayangeoise</h1>
      </div>
      <div className="first-section-content">
        {/* <div className="fade-overlay"></div> */}
        <div className="text-background"> 
          
          <div className="first-section-text-container">
          <div className="text-block text-block-1">
            <div className="text-content">
              <h2>Titre du bloc 1</h2>
              <p>Texte du bloc 1</p>
            </div>
            <img src={image1} alt="screen1" className='text-image' />
          </div>
          <div className="text-block text-block-1">
            <img src={image2} alt="screen2" className='text-image' />
            <div className="text-content">
              <h2>Titre du bloc 2</h2>
              <p>Texte du bloc 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;