import React, { useState, useRef } from 'react';

const SpinWheel = ({ isOpen, onClose }) => {
  const [gamaPoints, setGamaPoints] = useState(1000); // Starting points
  const [betAmount, setBetAmount] = useState(25);
  const [rollCount, setRollCount] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWin, setLastWin] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [currentRoll, setCurrentRoll] = useState(1);
  const [totalRolls, setTotalRolls] = useState(1);
  const [currentRollCount, setCurrentRollCount] = useState(0);
  const [allResults, setAllResults] = useState([]);
  const wheelRef = useRef(null);

  const wheelSegments = [
    { id: 1, label: "PUBG", type: "game", color: "#ff6b9d", probability: 0.05 },
    { id: 2, label: "100 GP", type: "points", value: 100, color: "#4ecdc4", probability: 0.15 },
    { id: 3, label: "Better Luck Next Time", type: "nothing", color: "#95a5a6", probability: 0.25 },
    { id: 4, label: "GTA V", type: "game", color: "#ff6b9d", probability: 0.03 },
    { id: 5, label: "50 GP", type: "points", value: 50, color: "#4ecdc4", probability: 0.20 },
    { id: 6, label: "Better Luck Next Time", type: "nothing", color: "#95a5a6", probability: 0.25 },
    { id: 7, label: "500 GP", type: "points", value: 500, color: "#f39c12", probability: 0.05 },
    { id: 8, label: "Better Luck Next Time", type: "nothing", color: "#95a5a6", probability: 0.02 }
  ];

  const handleSpin = () => {
    if (gamaPoints < betAmount) {
      alert("Not enough Gama Points to bet!");
      return;
    }

    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);
    setGamaPoints(prev => prev - betAmount);
    setAllResults([]);
    setCurrentRoll(1);
    setCurrentRollCount(0);

    performSingleSpin();
  };

  const performSingleSpin = () => {
    setCurrentRollCount(prev => {
      const newCount = prev + 1;
      
      if (newCount > totalRolls) {
        setIsSpinning(false);
        setShowResult(true);
        return prev; // Don't increment further
      }

      setCurrentRoll(newCount);

      const random = Math.random();
      let cumulativeProbability = 0;
      let winningSegment = wheelSegments[wheelSegments.length - 1]; // fallback

      for (const segment of wheelSegments) {
        cumulativeProbability += segment.probability;
        if (random <= cumulativeProbability) {
          winningSegment = segment;
          break;
        }
      }

      const segmentAngle = 360 / wheelSegments.length;
      const winningAngle = (winningSegment.id - 1) * segmentAngle;
      const randomSpins = 5 + Math.random() * 5; // 5-10 full rotations
      const totalRotation = randomSpins * 360 + (360 - winningAngle);

      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
      }

      setTimeout(() => {
        setLastWin(winningSegment);
        
        setAllResults(prev => [...prev, winningSegment]);

        if (winningSegment.type === "points") {
          setGamaPoints(prev => prev + winningSegment.value);
        } else if (winningSegment.type === "game") {
          alert(`🎉 Congratulations! You won ${winningSegment.label}!`);
        }

        if (newCount < totalRolls) {
          setTimeout(() => {
            performSingleSpin();
          }, 1000);
        } else {
          setIsSpinning(false);
          setShowResult(true);
        }
      }, 3000);

      return newCount;
    });
  };

  const handleBetChange = (amount) => {
    setBetAmount(amount);
    if (amount === 25) {
      setRollCount(1);
      setTotalRolls(1);
    } else if (amount === 50) {
      setRollCount(2);
      setTotalRolls(2);
    } else if (amount === 75) {
      setRollCount(3);
      setTotalRolls(3);
    } else if (amount === 100) {
      setRollCount(4);
      setTotalRolls(4);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="spin-wheel-overlay" onClick={(e) => e.target.className === 'spin-wheel-overlay' && onClose()}>
      <div className="spin-wheel-modal">
        <button className="spin-wheel-close" onClick={onClose}>×</button>
        
        <h2 className="spin-wheel-title">🎰 SPIN THE WHEEL</h2>
        
        <div className="spin-wheel-content">
          <div className="spin-wheel-stats">
            <div className="gama-points-display">
              <span className="points-label">Gama Points:</span>
              <span className="points-value">{gamaPoints.toLocaleString()}</span>
            </div>
          </div>

          <div className="spin-wheel-container">
            <div className="wheel-pointer">▼</div>
            <div 
              ref={wheelRef}
              className={`wheel-simple ${isSpinning ? 'spinning' : ''}`}
            >
              {wheelSegments.map((segment, index) => (
                <div
                  key={segment.id}
                  className="wheel-segment-simple"
                  style={{
                    backgroundColor: segment.color,
                    transform: `rotate(${(360 / wheelSegments.length) * index}deg)`
                  }}
                >
                  <div className="segment-text-simple">
                    {segment.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="betting-controls">
            <h3>Place Your Bet</h3>
            <div className="bet-buttons">
              <button 
                className={`bet-btn ${betAmount === 25 ? 'active' : ''}`}
                onClick={() => handleBetChange(25)}
              >
                25 GP<br/><span className="roll-count">1 Roll</span>
              </button>
              <button 
                className={`bet-btn ${betAmount === 50 ? 'active' : ''}`}
                onClick={() => handleBetChange(50)}
              >
                50 GP<br/><span className="roll-count">2 Rolls</span>
              </button>
              <button 
                className={`bet-btn ${betAmount === 75 ? 'active' : ''}`}
                onClick={() => handleBetChange(75)}
              >
                75 GP<br/><span className="roll-count">3 Rolls</span>
              </button>
              <button 
                className={`bet-btn ${betAmount === 100 ? 'active' : ''}`}
                onClick={() => handleBetChange(100)}
              >
                100 GP<br/><span className="roll-count">4 Rolls</span>
              </button>
            </div>
            
            <div className="current-bet">
              Current Bet: <span className="bet-amount">{betAmount} GP</span>
              <br/>
              <span className="roll-info">({rollCount} automatic roll{rollCount > 1 ? 's' : ''})</span>
            </div>

            {isSpinning && (
              <div className="spin-progress">
                Roll {currentRoll} of {totalRolls}
              </div>
            )}

            <button 
              className="spin-button"
              onClick={handleSpin}
              disabled={isSpinning || gamaPoints < betAmount}
            >
              {isSpinning ? `SPINNING... (${currentRoll}/${totalRolls})` : `SPIN ${rollCount} TIME${rollCount > 1 ? 'S' : ''}!`}
            </button>
          </div>

          {showResult && allResults.length > 0 && (
            <div className="result-display">
              <h3>🎉 Results ({allResults.length} roll{allResults.length > 1 ? 's' : ''}):</h3>
              <div className="results-grid">
                {allResults.map((result, index) => (
                  <div key={index} className={`result-item ${result.type}`}>
                    <span className="roll-number">Roll {index + 1}:</span>
                    {result.type === 'game' && `🎮 ${result.label}!`}
                    {result.type === 'points' && `💰 ${result.value} GP`}
                    {result.type === 'nothing' && `😔 ${result.label}`}
                  </div>
                ))}
              </div>
              <div className="total-winnings">
                <strong>
                  Total Won: {allResults.reduce((total, result) => {
                    return total + (result.type === 'points' ? result.value : 0);
                  }, 0)} GP
                </strong>
              </div>
            </div>
          )}

          <div className="game-rules">
            <h4>How to Play:</h4>
            <ul>
              <li><strong>25 GP:</strong> 1 roll</li>
              <li><strong>50 GP:</strong> 2 automatic rolls</li>
              <li><strong>75 GP:</strong> 3 automatic rolls</li>
              <li><strong>100 GP:</strong> 4 automatic rolls</li>
              <li>Win games, Gama Points, or better luck next time!</li>
              <li>More rolls = more chances to win!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;