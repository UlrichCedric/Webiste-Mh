import React from 'react';
import './home.css';
import backgroundImage from '../../assets/background.jpg';
import image1 from '../../assets/photo.jpg';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Home = () => {
  return (
    <div className="first-section" id="home">
      <img src={backgroundImage} alt="Arrière-plan" className="background-image" />
      <div className="first-section-overlay">
        <ScrollReveal animation="fade-in">
          <h1 className="main-title-home">Musculation Hayangeoise</h1>
        </ScrollReveal>
      </div>
      <div className="first-section-content">
        {/* <div className="fade-overlay"></div> */}
        <div className="text-background" id="material">
          
          <div className="first-section-text-container">
            <ScrollReveal animation="fade-up">
              <div className="text-block text-block-1">
                <div className="text-content">
                  <h2>L'Espace Musculation</h2>
                  <p>C'est la salle idéale pour vos séances. Nous possédons :</p>
                  <ul>
                    <li>2 bancs de développé couché</li>
                    <li>1 banc développé incliné & 1 décliné</li>
                    <li>1 Smith machine & 1 Rack à squat</li>
                    <li>1 Presse à cuisses & 1 Presse à pectoraux</li>
                    <li>1 Tirage vertical & Poulie vis-à-vis</li>
                    <li>2 machines pour les mollets</li>
                  </ul>
                </div>
                <img src={image1} alt="Salle de musculation" className='text-image' />
              </div>
            </ScrollReveal>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Home;