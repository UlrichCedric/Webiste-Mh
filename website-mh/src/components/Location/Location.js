import React from 'react';
import './Location.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Location = () => {
  return (
    <div className="location-section" id="location">
      <div className="container">
        <ScrollReveal animation="fade-in">
          <h2 className="main-title">Nous Trouver</h2>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="map-container">
            <iframe 
              title="Localisation Musculation Hayangeoise"
              width="100%" 
              height="450" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?q=13+Rue+du+G%C3%A9n%C3%A9ral+Leclerc+57700+Hayange&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
          <p className="address">
            13 Rue du Général Leclerc, 57700 Hayange, France
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Location;
