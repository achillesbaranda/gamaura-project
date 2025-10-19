import React, { useState } from 'react';
import newjeansMcdo from '../assets/newjeans-mcdo.png';
import spinToWin from '../assets/spin-to-win.png';
import SpinWheel from './SpinWheel';

const PlayToGain = () => {
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);

  // Sample wheel game cards - all using the same spin-to-win image
  const wheelGames = Array(1).fill({
    title: "Spin the Wheel and Win!",
    image: spinToWin
  });

  const handleSpinWheelClick = () => {
    setIsSpinWheelOpen(true);
  };

  return (
    <div className="play-to-gain-container">
      {/* Hero Banner Section */}
      <section className="play-to-gain-hero">
        <div className="play-to-gain-hero-wrapper">
          <div className="sk-ad">
            <img 
              src={newjeansMcdo} 
              alt="Play to Gain Advertisement" 
              className="ad-image"
            />
            <p className="ad-disclaimer">This is an advertisement ⚠️</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="play-to-gain-content">
        {/* Title Section */}
        <div className="play-to-gain-title-section">
          <h1 className="play-to-gain-title">
            Play to Win Paid Games or Gain More Gama Points!
          </h1>
        </div>

        {/* Wheel Games Grid */}
        <div className="play-to-gain-games-grid">
          {wheelGames.map((game, index) => (
            <div 
              key={index} 
              className="play-to-gain-game-card"
              onClick={handleSpinWheelClick}
              style={{ cursor: 'pointer' }}
            >
              <div className="play-to-gain-game-image-wrapper">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="play-to-gain-game-image"
                />
              </div>
              <h3 className="play-to-gain-game-title">{game.title}</h3>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <section className="play-to-gain-bottom-banner">
          <div className="sk-ad">
            <img 
              src={newjeansMcdo} 
              alt="Play to Gain Advertisement" 
              className="ad-image"
            />
            <p className="ad-disclaimer">This is an advertisement ⚠️</p>
          </div>
        </section>
      </div>

      {/* Spin Wheel Modal */}
      <SpinWheel 
        isOpen={isSpinWheelOpen}
        onClose={() => setIsSpinWheelOpen(false)}
      />
    </div>
  );
};

export default PlayToGain;
