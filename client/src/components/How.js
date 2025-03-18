import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const How = () => {
  return (
    <div className="container">
           
      
      <section className="process">
        <div className="process-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Share Your Story</h3>
            <p>Fill out a simple form telling me about your special moment, the person you're honoring, or the story you want to tell. The more details you provide, the more personalized your song will be. Include important dates, names, and any specific musical preferences you might have.</p>
          </div>
        </div>
        
        <div className="process-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Initial Consultation</h3>
            <p>After receiving your story, I'll reach out to schedule a quick call to discuss your vision further. This helps me understand the emotions and message you want to convey through your song. We'll talk about musical style, tempo, and any specific elements you'd like to include.</p>
          </div>
        </div>
        
        <div className="process-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Songwriting & Composition</h3>
            <p>Once I have all the information I need, I'll begin crafting your personalized song. This process typically takes 1-2 weeks, during which I'll write lyrics that capture your story and compose music that complements the message. I'll ensure every detail is thoughtfully incorporated.</p>
          </div>
        </div>
        
        <div className="process-card">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Review & Revisions</h3>
            <p>When your song is ready, I'll share a draft recording for your review. You'll have the opportunity to request up to two rounds of revisions to ensure the song perfectly captures your vision. This collaborative process ensures you're completely satisfied with the final result.</p>
          </div>
        </div>
        
        <div className="process-card">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Final Recording & Delivery</h3>
            <p>After approving the final version, I'll professionally record your song and deliver it to you as a high-quality digital file. You'll also receive a PDF of the lyrics and, if requested, sheet music. Your personalized song is now ready to be shared, gifted, or treasured forever.</p>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to Create Your Personalized Song?</h2>
        <Link to="/request" className="cta-button">Share Your Story →</Link>
      </section>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-item">
          <div className="faq-question">How long does it take to create a personalized song?</div>
          <div className="faq-answer">The entire process typically takes 2-3 weeks from when you reach out to final delivery. For rush orders, please contact me directly to discuss options.</div>
        </div>
        
        <div className="faq-item">
          <div className="faq-question">What genres of music do you create?</div>
          <div className="faq-answer">I work in a variety of genres including pop, folk, soul, and acoustic. When you reach out, please share what style best suits your story and preferences.</div>
        </div>
        
        <div className="faq-item">
          <div className="faq-question">How much does a personalized song cost?</div>
          <div className="faq-answer">Pricing varies depending on the complexity of the song and specific requirements. Please visit the Pricing page for detailed information or contact me for a custom quote.</div>
        </div>
        
        <div className="faq-item">
          <div className="faq-question">Do you offer instrumental versions?</div>
          <div className="faq-answer">Yes! In addition to the full song with vocals, I can provide an instrumental version for an additional fee. This is perfect for events where you might want to use the music as background.</div>
        </div>
        
        <div className="faq-item">
          <div className="faq-question">What if I'm not satisfied with the song?</div>
          <div className="faq-answer">Your satisfaction is my priority. That's why the process includes up to two rounds of revisions. If you're still not completely happy after these revisions, we'll work together to find a solution.</div>
        </div>
      </section>
    </div>
  );
};

export default How;