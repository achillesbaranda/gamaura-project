import React, { useState } from 'react';

const HomepagePurchaseModal = ({ isOpen, onClose, game }) => {
  const [paymentMode, setPaymentMode] = useState('Gama Wallet');
  const [acknowledged, setAcknowledged] = useState(false);

  if (!isOpen || !game) return null;

  // Calculate prices based on discount
  const originalPrice = parseFloat(game.originalPrice.replace('₱', '').replace(',', ''));
  const finalPrice = parseFloat(game.price.replace('₱', '').replace(',', ''));
  const discountAmount = originalPrice - finalPrice;
  const valueAddedTax = 0; // No tax added to this platform
  const finalBalance = 5600;

  const handleConfirmPurchase = () => {
    if (!acknowledged) {
      alert('Please acknowledge that you are buying using Gama Wallet');
      return;
    }
    console.log('Purchase confirmed:', game);
    alert(`Successfully purchased ${game.title}!`);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'homepage-purchase-overlay') {
      onClose();
    }
  };

  return (
    <div className="homepage-purchase-overlay" onClick={handleOverlayClick}>
      <div className="homepage-purchase-modal">
        <button className="homepage-purchase-close" onClick={onClose}>×</button>
        
        <h2 className="homepage-purchase-title">CONFIRM PURCHASE</h2>
        
        <div className="homepage-purchase-content">
          <div className="homepage-purchase-left">
            <img 
              src={game.image} 
              alt={game.title}
              className="homepage-purchase-image"
            />
          </div>
          
          <div className="homepage-purchase-right">
            <h3 className="homepage-purchase-game-name">{game.title}</h3>
            
            <div className="homepage-purchase-breakdown">
              <h4>Payment Breakdown</h4>
              <div className="homepage-purchase-breakdown-row">
                <span>Digital Price:</span>
                <span>₱ {originalPrice.toLocaleString()}</span>
              </div>
              <div className="homepage-purchase-breakdown-row">
                <span>Discount Applied:</span>
                <span>- {game.discount} Discount</span>
              </div>
              <div className="homepage-purchase-breakdown-row">
                <span>Value Added Tax:</span>
                <span>No Tax added to this platform</span>
              </div>
              <div className="homepage-purchase-breakdown-row total">
                <span>Total Payment:</span>
                <span>₱ {finalPrice.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="homepage-purchase-payment-mode">
              <h4>Mode of Payment</h4>
              <div className="homepage-purchase-payment-select">
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
            
            <div className="homepage-purchase-acknowledgment">
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
              className="homepage-purchase-confirm-btn"
              onClick={handleConfirmPurchase}
            >
              ₱ {finalPrice.toLocaleString()}
            </button>
            
            <div className="homepage-purchase-final-balance">
              FINAL BALANCE: ₱ {finalBalance.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepagePurchaseModal;
