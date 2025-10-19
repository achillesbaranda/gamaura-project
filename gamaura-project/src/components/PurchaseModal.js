import React, { useState } from 'react';

const PurchaseModal = ({ isOpen, onClose, item }) => {
  const [paymentMode, setPaymentMode] = useState('Gama Wallet');
  const [acknowledged, setAcknowledged] = useState(false);

  if (!isOpen || !item) return null;

  const digitalPrice = item.price;
  const platformFee = 0; // No platform fee
  const valueAddedTax = 0; // No tax added to this platform
  const totalPayment = digitalPrice;
  const finalBalance = 5600; // This should come from user's actual balance

  const handleConfirmPurchase = () => {
    if (!acknowledged) {
      alert('Please acknowledge that you are buying using Gama Wallet');
      return;
    }
    console.log('Purchase confirmed:', item);
    alert(`Successfully purchased ${item.name}!`);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'purchase-modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="purchase-modal-overlay" onClick={handleOverlayClick}>
      <div className="purchase-modal">
        <button className="purchase-modal-close" onClick={onClose}>×</button>
        
        <h2 className="purchase-modal-title">CONFIRM PURCHASE</h2>
        
        <div className="purchase-modal-content">
          <div className="purchase-modal-left">
            <img 
              src={item.image} 
              alt={item.name}
              className="purchase-modal-image"
            />
          </div>
          
          <div className="purchase-modal-right">
            <h3 className="purchase-item-name">{item.name}</h3>
            
            <div className="purchase-breakdown">
              <h4>Payment Breakdown</h4>
              <div className="purchase-breakdown-row">
                <span>Digital Price:</span>
                <span>₱ {digitalPrice.toLocaleString()}</span>
              </div>
              <div className="purchase-breakdown-row">
                <span>Platform Fee:</span>
                <span>+ 0 (Direct)</span>
              </div>
              <div className="purchase-breakdown-row">
                <span>Value Added Tax:</span>
                <span>No Tax added to this platform</span>
              </div>
              <div className="purchase-breakdown-row total">
                <span>Total Payment:</span>
                <span>₱ {totalPayment.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="purchase-payment-mode">
              <h4>Mode of Payment</h4>
              <div className="purchase-payment-select">
                <select 
                  value={paymentMode} 
                  onChange={(e) => setPaymentMode(e.target.value)}
                >
                  <option value="Gama Wallet">Gama Wallet</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </div>
            </div>
            
            <div className="purchase-acknowledgment">
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
              className="purchase-confirm-btn"
              onClick={handleConfirmPurchase}
            >
              ₱ {totalPayment.toLocaleString()}
            </button>
            
            <div className="purchase-final-balance">
              FINAL BALANCE: ₱ {finalBalance.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
