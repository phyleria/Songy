import React from 'react';

const About = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-side">
          <div className="title-group">
            <h1>IT'S TIME TO</h1>
            <div className="blue-text">KNOW ME!</div>
          </div>
          <p className="hero-description">
            Hi, I'm Phylis, a songwriter with a deep love for turning stories into music.
            For as long as I can remember, I've been fascinated by the power of songs to capture emotions,
            celebrate moments, and tell unforgettable stories.
          </p>
          <button className="cta-button">
            Learn More About My Journey
            <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="image-side">
          <div className="hero-image">
            <img src={`${process.env.PUBLIC_URL}/About.jpg`} alt="Phylis with flowers" />
          </div>
          <div className="process-overlay">
            <h3>IN LOVE WITH MUSIC</h3>
            <p>What started as a personal passion has grown into something I want to share with the world. That's why I created Songy, a space where I can help you turn your memories, feelings, and ideas into songs that are as unique as you are.</p>
            {/* <button className="view-process-button">
              My Story
              <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;