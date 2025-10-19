import React, { useState } from 'react';
import newjeansPubg from '../assets/newjeans-pubg.png';
import hanniFeedPic from '../assets/hanni-feed-pic.png';

function Feed() {
  const [postText, setPostText] = useState('');
  const maxChars = 500;

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  return (
    <div className="feed-page">
      {/* What's Happening Input */}
      <div className="feed-post-creator">
        <img src={hanniFeedPic} alt="User profile" className="feed-profile-pic" />
        <div className="feed-post-input-container">
          <textarea 
            className="feed-post-input" 
            placeholder="What's Happening?"
            rows="3"
            maxLength={maxChars}
            value={postText}
            onChange={handleTextChange}
          />
          <div className="feed-post-actions">
            <div className="feed-post-icons">
              <button className="feed-icon-btn" title="Image">📷</button>
              <button className="feed-icon-btn" title="GIF">GIF</button>
              <button className="feed-icon-btn" title="Poll">📊</button>
              <button className="feed-icon-btn" title="Emoji">😊</button>
              <button className="feed-icon-btn" title="Schedule">📅</button>
            </div>
            <div className="feed-post-right">
              <span className={`feed-char-counter ${postText.length === maxChars ? 'feed-char-limit' : ''}`}>
                {postText.length}/{maxChars}
              </span>
              <button className="feed-post-btn">Post</button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed Posts */}
      <div className="feed-posts">
        {/* Post 1 - With Image */}
        <div className="feed-post">
          <img src={hanniFeedPic} alt="Hanni Pham" className="feed-post-profile-pic" />
          <div className="feed-post-content">
            <div className="feed-post-header">
              <div className="feed-post-user-info">
                <span className="feed-post-name">Hanni Pham</span>
                <span className="feed-post-handle">@HanniMyLoveSoSweet</span>
                <span className="feed-post-time">1h</span>
              </div>
              <button className="feed-post-menu">⋯</button>
            </div>
            <p className="feed-post-text">Newjeans x PUBG: Battlegrounds Collaboration!</p>
            <img src={newjeansPubg} alt="Newjeans PUBG Collaboration" className="feed-post-image" />
            <div className="feed-post-stats">
              <button className="feed-stat-btn">
                <span className="feed-icon">💬</span>
                <span>19</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">🔁</span>
                <span>15</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">❤️</span>
                <span>205</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">📤</span>
                <span>53</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">🔖</span>
              </button>
            </div>
          </div>
        </div>

        {/* Post 2 - Without Image */}
        <div className="feed-post">
          <img src={hanniFeedPic} alt="Hanni Pham" className="feed-post-profile-pic" />
          <div className="feed-post-content">
            <div className="feed-post-header">
              <div className="feed-post-user-info">
                <span className="feed-post-name">Hanni Pham</span>
                <span className="feed-post-handle">@HanniMyLoveSoSweet</span>
                <span className="feed-post-time">1h</span>
              </div>
              <button className="feed-post-menu">⋯</button>
            </div>
            <p className="feed-post-text">Newjeans x PUBG: Battlegrounds Collaboration!</p>
            <div className="feed-post-stats">
              <button className="feed-stat-btn">
                <span className="feed-icon">💬</span>
                <span>19</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">🔁</span>
                <span>15</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">❤️</span>
                <span>205</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">📤</span>
                <span>53</span>
              </button>
              <button className="feed-stat-btn">
                <span className="feed-icon">🔖</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <button className="feed-see-more">
        <span>See More</span>
      </button>
    </div>
  );
}

export default Feed;
