import React from 'react';
import './Membership.css';

const Membership = () => {
  return (
    <div className="membership-section" id="adhesion">
      <div className="container">
        <h2 className="main-title">Adhésion</h2>
        
        <div className="membership-grid">
          <div className="membership-card">
            <h3>Offre Découverte</h3>
            <p className="price">1 Semaine d'Essai</p>
            <ul>
              <li>Accès complet à la salle</li>
              <li>Testez nos équipements</li>
              <li>Caution Badge : <strong>10€</strong> (restituée)</li>
            </ul>
          </div>

          <div className="membership-card featured">
            <h3>Abonnements</h3>
            <p className="sub-title">Carte Membre (Annuelle) : <strong>15€</strong></p>
            <div className="pricing-options">
              <div className="price-item">
                <span className="amount">15€</span> / mois
              </div>
              <div className="price-item">
                <span className="amount">40€</span> / 3 mois
              </div>
            </div>
            <p className="note">
              + Caution Badge : <strong>10€</strong> (restituée)
            </p>
            <p className="note">*Sans engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
