import React, { useState } from 'react';

function Library() {
  const [activeTab, setActiveTab] = useState('owned');

  const fortniteImage = "https://storage.googleapis.com/zenn-user-upload/c400f4761479-20230911.jpg";
  const gtaImage = "https://th.bing.com/th/id/OIP.gpt2fz-ptiOj-U7vAJ6lPQHaLH?rs=1&pid=ImgDetMain";

  const ownedGames = [
    { id: 1, name: 'Grand Theft Auto V', image: gtaImage, status: 'Owned' },
    { id: 2, name: 'Grand Theft Auto V', image: gtaImage, status: 'Owned' },
    { id: 3, name: 'Grand Theft Auto V', image: gtaImage, status: 'Owned' },
    { id: 4, name: 'Grand Theft Auto V', image: gtaImage, status: 'Owned' },
    { id: 5, name: 'Grand Theft Auto V', image: gtaImage, status: 'Owned' },
    { id: 6, name: 'Grand Theft Auto V', image: gtaImage, status: 'Owned' },
  ];

  const favoriteGames = [
    { id: 7, name: 'Fortnite', image: fortniteImage, status: 'Owned' },
    { id: 8, name: 'Fortnite', image: fortniteImage, status: 'Owned' },
    { id: 9, name: 'Fortnite', image: fortniteImage, status: 'Owned' },
    { id: 10, name: 'Fortnite', image: fortniteImage, status: 'Owned' },
    { id: 11, name: 'Fortnite', image: fortniteImage, status: 'Owned' },
    { id: 12, name: 'Fortnite', image: fortniteImage, status: 'Owned' },
  ];

  const displayedGames = activeTab === 'owned' ? ownedGames : favoriteGames;

  return (
    <div className="library-page">
      <div className="library-container">
        <div className="library-header">
          <button 
            className={`library-tab ${activeTab === 'owned' ? 'active' : ''}`}
            onClick={() => setActiveTab('owned')}
          >
            Owned
          </button>
          <button 
            className={`library-tab ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
        </div>

        <div className="library-grid">
          {displayedGames.map((game) => (
            <div key={game.id} className="library-card">
              <div className="library-image-container">
                <img src={game.image} alt={game.name} className="library-image" />
                <div className="library-status-badge">{game.status}</div>
              </div>
              <div className="library-info">
                <h3 className="library-title">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
