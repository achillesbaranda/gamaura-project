import React from 'react';
import achillesImage from '../assets/achilles-baranda-picture.png';
import gamePurchasesImage from '../assets/gamepurchasesanddownloads.png';
import gamingTutorialsImage from '../assets/gamingtutorials.png';
import gameHistoryImage from '../assets/gamehistoryandnews.png';
import creditsImage from '../assets/creditsandgamapoints.png';
import libraryImage from '../assets/librarymanagement.png';
import communityImage from '../assets/communityandsocialfeatures.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Main Content */}
      <div className="about-us-main">
        {/* Top Section with About Us and Founder */}
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

        {/* What We Offer Section */}
        <section className="about-us-features">
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
      </div>
    </div>
  );
};

export default AboutUs;