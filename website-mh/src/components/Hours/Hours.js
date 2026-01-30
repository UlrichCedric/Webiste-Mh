import React from 'react';
import './Hours.css';

const ThirdSection = () => {
  return (
    <div className="third-section" id="hours">
      <div className="container">
          <h2 className="main-title">Les horaires</h2>
          <div className="hours-grid">
          <p>Lundi: 09h-21h</p>
          <p>Mardi: 09h-21h</p>
          <p>Mercredi: 09h-21h</p>
          <p>Jeudi: 09h-21h</p>
          <p>Vendredi: 09h-21h</p>
          <p>Samedi: 09h-17h</p>
          <p>Dimanche: 09h-13h</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;