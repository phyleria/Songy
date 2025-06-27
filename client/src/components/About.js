import React from 'react';
import '../styles/main.css';

const About = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-side">
          <div className="hero-content">
            <div className="title-group">
              <h1>IT'S TIME TO</h1>
              <h2 className="blue-text">KNOW ME!</h2>
            </div>
            <p className="hero-description">
              Hi, I'm Phylis, a songwriter with a deep love for turning stories into music.
              For as long as I can remember, I've been fascinated by the power of songs to capture emotions,
              celebrate moments, and tell unforgettable stories.
            </p>
            <button className="cta-button" onClick={() => window.location.href = '/request'}>
              <span>Request a Song</span>
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24">
                <path d="M10 17h14M17 10l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="image-side">
          <div className="hero-image">
            <img
              src={`${process.env.PUBLIC_URL}/About.jpg`}
              alt="Phylis with flowers"
              style={{
                height: '500px',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
            <div className="process-overlay">
              <h3>IN LOVE WITH MUSIC</h3>
              <p>What started as a personal passion has grown into something I want to share with the world. That's why I created Songy, a space where I can help you turn your memories, feelings, and ideas into songs that are as unique as you are.</p>
              <button className="view-process-button" onClick={() => window.location.href = '/contact'}>
                Contact Me
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;