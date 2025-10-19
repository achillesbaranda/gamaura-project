import React, { useState } from 'react';
import hanniProfPic from '../assets/hanni-prof-pic.png';
import GamaWallet from './GamaWallet';

function Profile() {
  const [aboutText, setAboutText] = useState("Please enter anything about yourself...");
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const maxChars = 250;

  const handleAboutChange = (e) => {
    setAboutText(e.target.value);
  };

  const handleSaveAbout = () => {
    setIsEditingAbout(false);
  };

  const handleEditAbout = () => {
    setIsEditingAbout(true);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Left Section - Profile Info */}
        <div className="profile-left">
          <div className="profile-header">
            <button className="profile-tab active">Profile</button>
          </div>

          <div className="profile-card">
            <img src={hanniProfPic} alt="Profile" className="profile-picture" />
            
            <div className="profile-info-grid">
              <div className="profile-info-item">
                <span className="profile-info-label">Username</span>
                <span className="profile-info-value">Hanni Pham</span>
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Real Name</span>
                <span className="profile-info-value">Pham Ngoc Han</span>
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Location</span>
                <span className="profile-info-value">Philippines</span>
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Friends</span>
                <span className="profile-info-value">200 Friends</span>
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Followers</span>
                <span className="profile-info-value">300 Followers</span>
              </div>
              <div className="profile-info-item">
                <span className="profile-info-label">Following</span>
                <span className="profile-info-value">300 Following</span>
              </div>
            </div>
          </div>

          <div className="profile-wallet" onClick={() => setIsWalletOpen(true)}>
            <div className="wallet-icon">💳</div>
            <span className="wallet-text">Access Gama Wallet</span>
          </div>
        </div>

        {/* Right Section - About & Achievements */}
        <div className="profile-right">
          {/* About Section */}
          <div className="profile-about-section">
            <h3 className="profile-section-title">About</h3>
            <textarea 
              className="profile-about-textarea"
              placeholder="Please enter anything about yourself..."
              value={aboutText}
              onChange={handleAboutChange}
              rows="4"
              maxLength={maxChars}
              disabled={!isEditingAbout}
            />
            <div className="profile-about-footer">
              <span className={`profile-about-chars ${aboutText.length === maxChars ? 'profile-char-limit' : ''}`}>
                {aboutText.length}/{maxChars}
              </span>
              {isEditingAbout ? (
                <button className="profile-about-save" onClick={handleSaveAbout}>
                  SAVE ABOUT
                </button>
              ) : (
                <button className="profile-about-save" onClick={handleEditAbout}>
                  EDIT
                </button>
              )}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="profile-achievements-section">
            <h3 className="profile-section-title">Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <p className="achievement-text">Played Valorant for 3 hours straight</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <p className="achievement-text">Played Valorant for 3 hours straight</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <p className="achievement-text">Played Valorant for 3 hours straight</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <p className="achievement-text">Played Valorant for 3 hours straight</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <p className="achievement-text">Played Valorant for 3 hours straight</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <p className="achievement-text">Played Valorant for 3 hours straight</p>
              </div>
            </div>
          </div>

          {/* Earned Gama Points Section */}
          <div className="profile-points-section">
            <h3 className="profile-section-title">Earned Gama Points</h3>
            
            <div className="points-item">
              <span className="points-label">Daily Playing Games</span>
              <div className="points-bar-container">
                <div className="points-bar" style={{width: '80%'}}></div>
              </div>
              <span className="points-value">4000 Gama Points</span>
            </div>

            <div className="points-item">
              <span className="points-label">Liking Games (Wallet)</span>
              <div className="points-bar-container">
                <div className="points-bar" style={{width: '60%'}}></div>
              </div>
              <span className="points-value">4700 Gama Points</span>
            </div>

            <div className="points-item">
              <span className="points-label">Current Game Points</span>
              <div className="points-bar-container">
                <div className="points-bar" style={{width: '40%'}}></div>
              </div>
              <span className="points-value">8000 Gama Points</span>
            </div>

            <div className="points-item">
              <span className="points-label">Share (Refer) Balance</span>
              <div className="points-bar-container">
                <div className="points-bar" style={{width: '35%'}}></div>
              </div>
              <span className="points-value">7.300000</span>
            </div>
          </div>
        </div>
      </div>

      <GamaWallet 
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
      />
    </div>
  );
}

export default Profile;
