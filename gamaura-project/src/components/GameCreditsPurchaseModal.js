import React, { useState } from 'react';

const GameCreditsPurchaseModal = ({ isOpen, onClose, item }) => {
  const [paymentMode, setPaymentMode] = useState('Gama Wallet');
  const [acknowledged, setAcknowledged] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('1000 Credits');

  if (!isOpen || !item) return null;

  const creditPackages = {
    'PUBG': [
      { credits: '500 Credits', price: 300 },
      { credits: '1000 Credits', price: 500 },
      { credits: '2500 Credits', price: 1200 },
      { credits: '5000 Credits', price: 2400 }
    ],
    'Valorant': [
      { credits: '390 VP', price: 200 },
      { credits: '1000 VP', price: 500 },
      { credits: '2000 VP', price: 1000 },
      { credits: '3650 VP', price: 2000 }
    ],
    'default': [
      { credits: '500 Credits', price: 300 },
      { credits: '1000 Credits', price: 500 },
      { credits: '2500 Credits', price: 1200 },
      { credits: '5000 Credits', price: 2400 }
    ]
  };

  const packages = creditPackages[item.name] || creditPackages['default'];
  const selectedCredit = packages.find(pkg => pkg.credits === selectedPackage);
  const totalPayment = selectedCredit ? selectedCredit.price : 0;
  const finalBalance = 8500;

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
            
            <div className="game-credits-package-selection">
              <h4>Select Package:</h4>
              <div className="game-credits-packages">
                {packages.map((pkg, index) => (
                  <button
                    key={index}
                    className={`game-credits-package-btn ${selectedPackage === pkg.credits ? 'active' : ''}`}
                    onClick={() => setSelectedPackage(pkg.credits)}
                  >
                    {pkg.credits}
                  </button>
                ))}
              </div>
            </div>

            <div className="game-credits-breakdown">
              <div className="game-credits-breakdown-row">
                <span>Selected Credits:</span>
                <span>{selectedPackage}</span>
              </div>
              <div className="game-credits-breakdown-row total">
                <span>Total Payment:</span>
                <span>₱ {totalPayment.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="game-credits-payment-mode">
              <h4>Mode of Payment</h4>
              <div className="game-credits-payment-display">
                <span className="game-credits-payment-method">Gama Wallet</span>
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
