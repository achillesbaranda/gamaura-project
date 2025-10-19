import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import achillesImage from '../assets/achilles-baranda-picture.png';
import gamePurchasesImage from '../assets/gamepurchasesanddownloads.png';
import gamingTutorialsImage from '../assets/gamingtutorials.png';
import gameHistoryImage from '../assets/gamehistoryandnews.png';
import creditsImage from '../assets/creditsandgamapoints.png';
import libraryImage from '../assets/librarymanagement.png';
import communityImage from '../assets/communityandsocialfeatures.png';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const serviceID = 'service_ezdhfdj';
      const templateID = 'template_pfmm81j';  
      const publicKey = 'kIM0ZbMhrQqYUqoLO';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'gamaura.official.acc@gmail.com'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="about-us-container">
      <main className="about-us-main">
        <section className="about-us-top-section">
          <div className="about-us-left-content">
            <div className="about-us-title-box">
              <h1 className="about-us-title">About Us</h1>
            </div>
            
            <div className="about-us-text-box">
              <p>
                At Gamaura, we believe gaming is more than just entertainment—it's a lifestyle, a community, and a gateway to skill-building and connection. That's why we built an all-in-one digital gaming service designed to give players everything they need in one hub.
              </p>
            </div>
            
            <div className="about-us-text-box">
              <p>
                From game purchases and downloads to tutorials, history, news, updates, credits, and library management, Gamaura makes your gaming journey seamless and engaging. Whether you're a casual player or a competitive gamer, our platform empowers you to explore, learn, and connect in meaningful ways.
              </p>
            </div>
          </div>
          
          <div className="about-us-founder">
            <img 
              src={achillesImage} 
              alt="Achilles Zeppelin B. Baranda" 
              className="about-us-founder-image"
            />
            <div className="about-us-founder-info">
              <h3>Achilles Zeppelin B. Baranda</h3>
              <p>- The CEO and Founder of Gamaura</p>
            </div>
          </div>
        </section>

        <section className="about-us-what-we-offer">
          <div className="about-us-section-title-box">
            <h2 className="about-us-section-title">What We Offer</h2>
          </div>
          
          <div className="about-us-features-grid">
            {/* Row 1 */}
            <div className="about-us-feature-card">
              <img 
                src={gamePurchasesImage} 
                alt="Game Purchases & Downloads" 
                className="about-us-feature-image"
              />
              <div className="about-us-feature-content">
                <h3>Game Purchases & Downloads</h3>
                <p>Access your favorite games quickly and securely.</p>
              </div>
            </div>

            <div className="about-us-feature-card">
              <img 
                src={gamingTutorialsImage} 
                alt="Gaming Tutorials" 
                className="about-us-feature-image"
              />
              <div className="about-us-feature-content">
                <h3>Gaming Tutorials</h3>
                <p>Learn strategies, level up your skills, and stay sharp.</p>
              </div>
            </div>

            <div className="about-us-feature-card">
              <img 
                src={gameHistoryImage} 
                alt="Game History & News" 
                className="about-us-feature-image"
              />
              <div className="about-us-feature-content">
                <h3>Game History & News</h3>
                <p>Stay updated with industry trends, releases, and stories.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="about-us-feature-card">
              <img 
                src={creditsImage} 
                alt="Credits & Game Points" 
                className="about-us-feature-image"
              />
              <div className="about-us-feature-content">
                <h3>Credits & Game Points</h3>
                <p>Buy game credits or earn Gama Points to redeem for games, wallet top-ups, and more.</p>
              </div>
            </div>

            <div className="about-us-feature-card">
              <img 
                src={libraryImage} 
                alt="Library Management" 
                className="about-us-feature-image"
              />
              <div className="about-us-feature-content">
                <h3>Library Management</h3>
                <p>Keep your games organized and track your progress.</p>
              </div>
            </div>

            <div className="about-us-feature-card">
              <img 
                src={communityImage} 
                alt="Community & Social Features" 
                className="about-us-feature-image"
              />
              <div className="about-us-feature-content">
                <h3>Community & Social Features</h3>
                <p>Join moderated chats, discussions, and connect with fellow gamers worldwide in a safe and engaging environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="about-us-contact-section">
          <div className="about-us-section-title-box">
            <h2 className="about-us-section-title">Contact Us</h2>
          </div>
          
          <div className="about-us-contact-content">
            <div className="about-us-contact-info">
              <h3>Get in Touch</h3>
              <p>Have concerns, suggestions, or feedback about Gamaura? We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.</p>
              
              <div className="about-us-contact-details">
                <div className="contact-detail">
                  <span className="contact-label">📧 Email:</span>
                  <span>gamaura.official.acc@gmail.com</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-label">📞 Phone:</span>
                  <span>09917847843</span>
                </div>
              </div>
            </div>

            <form className="about-us-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Suggestion">Feature Suggestion</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Please describe your concern, suggestion, or feedback in detail..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-status success">
                  ✅ Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-status error">
                  ❌ There was an error sending your message. Please try again or contact us directly at gamaura.official.acc@gmail.com
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;