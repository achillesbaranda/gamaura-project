import React, { useState } from 'react';

const GamaWallet = ({ isOpen, onClose }) => {
  const [topUpAmount, setTopUpAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('GCash');
  const [balance, setBalance] = useState(40000.00);

  const gamaPointsPackages = [
    { gp: 400, price: 300 },
    { gp: 600, price: 500 },
    { gp: 800, price: 700 },
    { gp: 1000, price: 900 },
  ];

  const handleBuyGamaPoints = (pkg) => {
    if (balance < pkg.price) {
      alert(`Insufficient balance! You need ₱${pkg.price} but only have ₱${balance.toFixed(2)}`);
      return;
    }
    
    setBalance(prevBalance => prevBalance - pkg.price);
    console.log(`Buying ${pkg.gp} GP for ₱${pkg.price}`);
    alert(`Successfully purchased ${pkg.gp} Gama Points for ₱${pkg.price}!\nNew Balance: ₱${(balance - pkg.price).toFixed(2)}`);
  };

  const handleConfirmPayment = () => {
    const amount = parseFloat(topUpAmount);
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    setBalance(prevBalance => prevBalance + amount);
    console.log(`Top up ₱${amount} using ${paymentMode}`);
    alert(`Successfully topped up ₱${amount.toFixed(2)}!\nNew Balance: ₱${(balance + amount).toFixed(2)}`);
    setTopUpAmount('');
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'gama-wallet-overlay') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="gama-wallet-overlay" onClick={handleOverlayClick}>
      <div className="gama-wallet-modal">
        <button className="gama-wallet-close" onClick={onClose}>×</button>
        
        <div className="gama-wallet-header">
          <div className="gama-wallet-logo">
            <span className="gama-wallet-logo-text">GAMA WALLET</span>
          </div>
        </div>

        <div className="gama-wallet-content">
          {/* Left Section - Gama Points */}
          <div className="gama-wallet-left">
            <div className="gama-wallet-balance-card">
              <div className="gama-wallet-balance-label">Balance:</div>
              <div className="gama-wallet-balance-amount">₱{balance.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>

            <div className="gama-wallet-points-section">
              <h3 className="gama-wallet-section-title">Buy Gama Points</h3>
              <div className="gama-wallet-points-grid">
                {gamaPointsPackages.map((pkg, index) => (
                  <button 
                    key={index}
                    className="gama-wallet-point-card"
                    onClick={() => handleBuyGamaPoints(pkg)}
                  >
                    <div className="gama-wallet-point-gp">{pkg.gp} GP</div>
                    <div className="gama-wallet-point-price">₱ {pkg.price}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Top Up */}
          <div className="gama-wallet-right">
            <div className="gama-wallet-topup-card">
              <h3 className="gama-wallet-topup-title">Top Up Wallet</h3>
              
              <div className="gama-wallet-input-group">
                <label>Enter your price here</label>
                <input 
                  type="number"
                  value={topUpAmount}
                  onChange={(e) => setTopUpAmount(e.target.value)}
                  placeholder="₱ 0.00"
                  className="gama-wallet-input"
                />
              </div>

              <div className="gama-wallet-input-group">
                <label>Mode of Payment</label>
                <select 
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                  className="gama-wallet-select"
                >
                  <option value="GCash">GCash</option>
                  <option value="PayMaya">PayMaya</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>

              <div className="gama-wallet-paying-using">
                <span>You are paying using</span>
                <input 
                  type="text"
                  value={paymentMode}
                  readOnly
                  className="gama-wallet-paying-input"
                />
              </div>

              <div className="gama-wallet-currency-note">
                *we only accept Philippine peso currency
              </div>

              <button 
                className="gama-wallet-confirm-btn"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamaWallet;
