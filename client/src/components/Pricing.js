import React from 'react';
import '../styles/main.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <div className="pricing-header">
          <h1>PRICING <span className="highlight">OPTIONS</span></h1>
          <p>Choose the perfect plan for your personalized song needs. Each option includes my full creative attention and a unique song crafted just for you.</p>
        </div>

        <div className="pricing-plans">
          <div className="pricing-plan">
            <h2>Basic Melody</h2>
            <div className="price">100 Kes <div/> </div>
            <ul className="features">
              <li>1-2 minute original song</li>
              <li>Digital delivery</li>
              <li>1 revision included</li>
              <li>Basic production</li>
              <li>Delivery in 7 days</li>
            </ul>
            <button className="cta-button outlined">Select Plan</button>
          </div>

          <div className="pricing-plan featured">
            <div className="featured-tag">Most Popular</div>
            <h2>Signature Song</h2>
            <div className="price">500 Kes</div>
            <ul className="features">
              <li>2-3 minute original song</li>
              <li>Digital delivery</li>
              <li>2 revisions included</li>
              <li>Full production</li>
              <li>Delivery in 5 days</li>
              <li>Personalized lyrics document</li>
            </ul>
            <button className="cta-button">Select Plan</button>
          </div>

          <div className="pricing-plan">
            <h2>Premium Composition</h2>
            <div className="price">2500 Kes <div/> </div>
            <ul className="features">
              <li>3-4 minute original song</li>
              <li>Digital delivery</li>
              <li>3 revisions included</li>
              <li>Premium production</li>
              <li>Delivery in 3 days</li>
              <li>Personalized lyrics document</li>
              <li>Instrumental version included</li>
            </ul>
            <button className="cta-button outlined">Select Plan</button>
          </div>
        </div>

        

      </div>


    </div>
  );
}

export default Pricing;