import React, { useState } from 'react';

const HomepagePurchaseModal = ({ isOpen, onClose, game }) => {
  const [paymentMode, setPaymentMode] = useState('Gama Wallet');
  const [acknowledged, setAcknowledged] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('1000 VP');

  if (!isOpen || !game) return null;

  const creditPackages = {
    'Valorant': [
      { credits: '390 VP', price: 200 },
      { credits: '1000 VP', price: 500 },
      { credits: '2000 VP', price: 1000 },
      { credits: '3650 VP', price: 2000 }
    ],
    'default': [
      { credits: '500 Credits', price: 300 },
      { credits: '1000 Credits', price: 600 },
      { credits: '2500 Credits', price: 1500 },
      { credits: '5000 Credits', price: 3000 }
    ]
  };

  const packages = creditPackages[game.title] || creditPackages['default'];
  const selectedCredit = packages.find(pkg => pkg.credits === selectedPackage);
  const finalPrice = selectedCredit ? selectedCredit.price : 0;
  const finalBalance = 8500;

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
            
            <div className="homepage-purchase-package-selection">
              <h4>Select Package:</h4>
              <div className="homepage-purchase-packages">
                {packages.map((pkg, index) => (
                  <button
                    key={index}
                    className={`homepage-package-btn ${selectedPackage === pkg.credits ? 'active' : ''}`}
                    onClick={() => setSelectedPackage(pkg.credits)}
                  >
                    {pkg.credits}
                  </button>
                ))}
              </div>
            </div>

            <div className="homepage-purchase-breakdown">
              <div className="homepage-purchase-breakdown-row">
                <span>Selected Credits:</span>
                <span>{selectedPackage}</span>
              </div>
              <div className="homepage-purchase-breakdown-row total">
                <span>Total Payment:</span>
                <span>₱ {finalPrice.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="homepage-purchase-payment-mode">
              <h4>Mode of Payment</h4>
              <div className="homepage-purchase-payment-display">
                <span className="homepage-payment-method">Gama Wallet</span>
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
