import React from 'react';
import './Hours.css';

const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="container">
          <h2 className="main-title">Les horaires</h2>
          <div className="text-block">
          <p>Lundi: 9h-12h / 17h-21h</p>
          <p>Mardi: 17h-21h</p>
          <p>Mercredi: 15h-21h</p>
          <p>Jeudi: 9h-12h / 17h-21h</p>
          <p>Vendredi: 17h-21h</p>
          <p>Samedi: 9h-12h / 14h-18h</p>
          <p>Dimanche: 9h30-12h</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;