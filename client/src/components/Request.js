import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Request = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    songType: '',
    occasion: '',
    story: '',
    mood: '',
    references: '',
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g. API call
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you! Your song request has been submitted. I will reach out to you shortly.');
  };
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-side">
          <div className="title-group">
            <h1>TELL ME YOUR</h1>
            <div className="blue-text">STORY</div>
          </div>
          <p className="request-description">
            Share your unique story, occasion, or feeling, and I'll transform it into a personalized song.
            I'm here to help you create something truly meaningful.
          </p>

          <form onSubmit={handleSubmit} className="request-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="songType">Type of Song</label>
              <select
                id="songType"
                name="songType"
                value={formData.songType}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Ballad">Ballad</option>
                <option value="Upbeat">Upbeat</option>
                <option value="Folk">Folk/Acoustic</option>
                <option value="R&B">Soul</option>
                <option value="Pop">Pop</option>
                <option value="Other">Other (describe in story)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion (if any)</label>
              <input
                type="text"
                id="occasion"
                name="occasion"
                placeholder="Birthday, Anniversary, Wedding, etc."
                value={formData.occasion}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="story">Your Story</label>
              <textarea
                id="story"
                name="story"
                rows="5"
                placeholder="Tell me about the story, person, or feelings you want to express in this song..."
                value={formData.story}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="mood">Desired Mood/Feeling</label>
              <input
                type="text"
                id="mood"
                name="mood"
                placeholder="Happy, Nostalgic, Romantic, etc."
                value={formData.mood}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="references">Song References (Optional)</label>
              <input
                type="text"
                id="references"
                name="references"
                placeholder="Any songs that inspire the style you want"
                value={formData.references}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="deadline">Desired Completion Date</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="cta-button">
              Submit Song Request

            </button>
          </form>
        </div>

        <div className="image-side">
          <div className="hero-image">
            <img src={`${process.env.PUBLIC_URL}/request.avif`} alt="Musical inspiration" />

          </div>
          <div className="process-overlay">
            <h3>How It Works</h3>
            <p>After receiving your request and details, I’ll craft your custom song within 2 weeks and email you the final recording.</p>
            <button
              className="view-process-button"
              onClick={() => navigate('/process')}
            >
              Learn More
              <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;