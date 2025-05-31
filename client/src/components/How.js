import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const How = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "How long does it take to create a personalized song?",
      answer: "The entire process typically takes 2-3 weeks from when you reach out to final delivery. For rush orders, please contact me directly to discuss options."
    },
    {
      question: "What genres of music do you create?",
      answer: "I work in a variety of genres including pop, folk, soul, and acoustic. When you reach out, please share what style best suits your story and preferences."
    },
    {
      question: "How much does a personalized song cost?",
      answer: "Pricing varies depending on the complexity of the song and specific requirements. Please visit the Pricing page for detailed information or contact me for a custom quote."
    },
    {
      question: "Do you offer instrumental versions?",
      answer: "Yes! In addition to the full song with vocals, I can provide an instrumental version for an additional fee. This is perfect for events where you might want to use the music as background."
    },
    {
      question: "What if I'm not satisfied with the song?",
      answer: "Your satisfaction is my priority. That's why the process includes up to two rounds of revisions. If you're still not completely happy after these revisions, we'll work together to find a solution."
    }
  ];

  return (
    <div className="how-container">
      {/* Hero Section */}
      <section className="how-hero">
        <div className="how-hero-content">
          <h1>How I Create Your <span className="accent">Perfect Song</span></h1>
          <p>A simple 5-step process to transform your story into music</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Share Your Story</h3>
            <p>Fill out a simple form with details about your special moment, story, or the person you're honoring. Include dates, names, and musical preferences.</p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Initial Consultation</h3>
            <p>I'll schedule a quick call to discuss your vision, understand the emotions you want to convey, and talk about musical style and tempo.</p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Songwriting & Composition</h3>
            <p>I'll craft your personalized song over 1-2 weeks, writing lyrics that capture your story and composing music that complements your message.</p>
          </div>

          <div className="step">
            <div className="step-number">04</div>
            <h3>Review & Revisions</h3>
            <p>You'll receive a draft recording for review with up to two rounds of revisions to ensure the song perfectly captures your vision.</p>
          </div>

          <div className="step">
            <div className="step-number">05</div>
            <h3>Final Recording & Delivery</h3>
            <p>After approval, I'll professionally record your song and deliver it as a high-quality digital file with lyrics and optional sheet music.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span className={`faq-icon ${openFaq === index ? 'rotate' : ''}`}>+</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'show' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Create Your Song?</h2>
          <p>Let's transform your story into a unique musical creation</p>
          <Link to="/request" className="cta-button">Share Your Story</Link>
        </div>
      </section>
    </div>
  );
};

export default How;