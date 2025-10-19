import React, { useState } from 'react';
import GameCreditsPurchaseModal from './GameCreditsPurchaseModal';

function GameCredits() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const minecraftImage = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/minecraft-game.jpg";

  const games = [
    { id: 1, name: 'Minecraft', image: minecraftImage, price: 950 },
    { id: 2, name: 'Minecraft', image: minecraftImage, price: 950 },
    { id: 3, name: 'Minecraft', image: minecraftImage, price: 950 },
    { id: 4, name: 'Minecraft', image: minecraftImage, price: 950 },
    { id: 5, name: 'Minecraft', image: minecraftImage, price: 950 },
    { id: 6, name: 'Minecraft', image: minecraftImage, price: 950 },
  ];

  const handleCardClick = (game) => {
    setSelectedItem(game);
    setIsPurchaseModalOpen(true);
  };

  return (
    <div className="game-credits-page">
      <div className="game-credits-container">
        <div className="game-credits-header">
          <button className="game-credits-tab active">Buy Game Credits</button>
        </div>

        <div className="game-credits-grid">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="game-credit-card"
              onClick={() => handleCardClick(game)}
            >
              <div className="game-credit-image-container">
                <img src={game.image} alt={game.name} className="game-credit-image" />
              </div>
              <div className="game-credit-info">
                <h3 className="game-credit-title">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GameCreditsPurchaseModal 
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        item={selectedItem}
      />
    </div>
  );
}

export default GameCredits;
