import React from 'react';
// No CSS import needed as styles will be in the main CSS file

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero-section">
        <div className="hero-content">
          <h2 className="subtitle">IT'S TIME TO</h2>
          <h1 className="title">KNOW ME!</h1>
        </div>
        <div className="hero-image-container">
          <img src={`${process.env.PUBLIC_URL}/About.jpg`} alt="Bali landscape view" className="hero-image" />
          <div className="overlay"></div>
        </div>
      </section>

      <section className="about-info-section">
        <h2 className="info-title">IN LOVE WITH MUSIC</h2>
        <p className="info-text">
        Hi, I’m Phylis, a songwriter with a deep love for turning stories into music. 
        For as long as I can remember, I’ve been fascinated by the power of songs to capture emotions, 
        celebrate moments, and tell unforgettable stories. What started as a personal passion has grown 
        into something I want to share with the world. That’s why I created Songy, a space where I can help you turn your memories, feelings, and ideas into songs that are as unique as you are.
        </p>
      </section>
    </div>
  );
};

export default About;