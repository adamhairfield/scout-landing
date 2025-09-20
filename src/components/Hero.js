import React from 'react';
import './Hero.css';
import heroImage from './hero-football.jpg';

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" style={{'--hero-bg': `url(${heroImage})`}}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Custom Team Gear<br />
            <span className="hero-subtitle">Made Simple</span>
          </h1>
          <p className="hero-description">
            Order personalized merchandise for your high school football team. 
            Upload your designs, choose your gear, and we'll handle the rest.
          </p>
          <button className="hero-cta" onClick={scrollToForm}>
            Place your order
          </button>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Teams Served</div>
            </div>
            <div className="stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Orders Fulfilled</div>
            </div>
            <div className="stat">
              <div className="stat-number">24hr</div>
              <div className="stat-label">Turnaround</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
