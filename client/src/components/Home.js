import React from 'react';
import '../styles/main.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-side">
          <div className="hero-content">
            <div className="title-group">
              <h1>Create Your</h1>
              <h2 className="blue-text">Personalized Song</h2>
              <h1>Today</h1>
            </div>
            <p className="hero-description">
            Hi, I’m Phylis, a songwriter who loves turning stories into music. Let me create a unique song just for you. 
            Be it a special moment, a tribute, or just something fun, I’ll bring it to life 
            through music.

            </p>
            <button className="cta-button">
              <span>Share Your Story with Me</span>
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="image-side">
          <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/homepic.jpg`} alt="Person with notebook" />
          <div className="process-overlay">
              <h3>Learn How it Works</h3>
              <p>Check out how easy it is to create a song that tells your story. See the steps to get started!</p>
              <button className="view-process-button">
                View Process
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;