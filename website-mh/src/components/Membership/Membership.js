import React from 'react';
import './Membership.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Membership = () => {
  return (
    <div className="membership-section" id="adhesion">
      <div className="container">
        <ScrollReveal animation="fade-down">
          <h2 className="main-title">Adhésion</h2>
        </ScrollReveal>
        
        <div className="membership-grid">
          <ScrollReveal animation="slide-right" delay={200}>
            <div className="membership-card">
              <h3>Offre Découverte</h3>
              <p className="price">1 Semaine d'Essai</p>
              <ul>
                <li>Accès complet à la salle</li>
                <li>Testez nos équipements</li>
                <li>Caution Badge : <strong>10€</strong></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={400}>
            <div className="membership-card featured">
              <h3>Abonnements</h3>
              <p className="sub-title">Carte Membre (Annuelle) : <strong>15€</strong></p>
              <div className="pricing-options">
                <div className="price-item">
                  <span className="amount">3€</span> / séance
                </div>
                <div className="price-item">
                  <span className="amount">15€</span> / mois
                </div>
                <div className="price-item">
                  <span className="amount">40€</span> / 3 mois
                </div>
                <div className="price-item">
                  <span className="amount">75€</span> / 6 mois
                </div>
                <div className="price-item">
                  <span className="amount">140€</span> / 12 mois
                </div>
              </div>
              <p className="note">
                + Caution Badge : <strong>10€</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Membership;
