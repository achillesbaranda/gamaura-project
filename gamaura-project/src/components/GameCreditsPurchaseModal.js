import React, { useState } from 'react';

const GameCreditsPurchaseModal = ({ isOpen, onClose, item }) => {
  const [paymentMode, setPaymentMode] = useState('Gama Wallet');
  const [acknowledged, setAcknowledged] = useState(false);

  if (!isOpen || !item) return null;

  const digitalPrice = item.price;
  const valueAddedTax = 0; // No tax
  const totalPayment = digitalPrice;
  const finalBalance = 5943;

  const handleConfirmPurchase = () => {
    if (!acknowledged) {
      alert('Please acknowledge that you are buying using Gama Wallet');
      return;
    }
    console.log('Purchase confirmed:', item);
    alert(`Successfully purchased ${item.name} credits!`);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'game-credits-purchase-overlay') {
      onClose();
    }
  };

  return (
    <div className="game-credits-purchase-overlay" onClick={handleOverlayClick}>
      <div className="game-credits-purchase-modal">
        <button className="game-credits-purchase-close" onClick={onClose}>×</button>
        
        <h2 className="game-credits-purchase-title">CONFIRM PURCHASE</h2>
        
        <div className="game-credits-purchase-content">
          <div className="game-credits-purchase-left">
            <img 
              src={item.image} 
              alt={item.name}
              className="game-credits-purchase-image"
            />
          </div>
          
          <div className="game-credits-purchase-right">
            <h3 className="game-credits-item-name">{item.name}</h3>
            
            <div className="game-credits-breakdown">
              <h4>Payment Breakdown</h4>
              <div className="game-credits-breakdown-row">
                <span>Digital Price:</span>
                <span>₱ {digitalPrice}</span>
              </div>
              <div className="game-credits-breakdown-row">
                <span>Value Added Tax:</span>
                <span>₱ {valueAddedTax}</span>
              </div>
            </div>
            
            <div className="game-credits-payment-mode">
              <h4>Mode of Payment</h4>
              <div className="game-credits-payment-select">
                <select 
                  value={paymentMode} 
                  onChange={(e) => setPaymentMode(e.target.value)}
                >
                  <option value="Gama Wallet">Gama Wallet</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="GCash">GCash</option>
                  <option value="PayMaya">PayMaya</option>
                </select>
              </div>
            </div>
            
            <div className="game-credits-acknowledgment">
              <label>
                <input 
                  type="checkbox" 
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                />
                <span>I acknowledge that I am buying using Gama Wallet.</span>
              </label>
            </div>
            
            <button 
              className="game-credits-confirm-btn"
              onClick={handleConfirmPurchase}
            >
              ₱ {totalPayment.toLocaleString()}
            </button>
            
            <div className="game-credits-final-balance">
              FINAL BALANCE: ₱ {finalBalance}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCreditsPurchaseModal;
