import React, { useState } from 'react';

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState('All');

  // Sample tutorial data based on the image
  const tutorials = [
    {
      id: 1,
      title: "Valorant Ultimate Beginner's Guide 2025",
      author: "Valorant PH",
      views: "1.2M views",
      timeAgo: "2 months ago",
      thumbnail: "https://i.ytimg.com/vi/-nO-bWsxLG0/maxresdefault.jpg",
      category: "Action",
      game: "Valorant"
    },
    {
      id: 2,
      title: "Valorant Ultimate Beginner's Guide 2024",
      author: "Valorant PH",
      views: "950K views",
      timeAgo: "3 months ago",
      thumbnail: "https://i.ytimg.com/vi/fybbn3mclOs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1Nfzz_0ZK5VE2yu2Fyz-uBlAnzQ",
      category: "Action",
      game: "Valorant"
    },
    {
      id: 3,
      title: "Valorant Ultimate Beginner's Guide 2023",
      author: "Valorant PH",
      views: "800K views",
      timeAgo: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/_3nzm4GoHqA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBXlWDXCOYgGjtXaGsg041kGXkQHg",
      category: "Action",
      game: "Valorant"
    },
    {
      id: 4,
      title: "Valorant Ultimate Beginner's Guide 2022",
      author: "Valorant PH",
      views: "1.1M views",
      timeAgo: "2 months ago",
      thumbnail: "https://valo2asia.com/wp-content/uploads/2025/10/5d209c9d4c3621c667b8c15d69853ede88477ce1-1920x1080-1-1170x658.jpg",
      category: "Action",
      game: "Valorant"
    },
    {
      id: 5,
      title: "PUBG Battlegrounds Ultimate Guide",
      author: "PUBG Pro",
      views: "750K views",
      timeAgo: "1 month ago",
      thumbnail: "https://www.hollywoodreporter.com/wp-content/uploads/2019/10/pubg_mobile.jpg?w=1296&h=730&crop=1",
      category: "Action",
      game: "PUBG Battlegrounds"
    },
    {
      id: 6,
      title: "GTA V Complete Walkthrough",
      author: "GTA Master",
      views: "2.1M views",
      timeAgo: "3 months ago",
      thumbnail: "https://portforward.com/games/walkthroughs/Grand-Theft-Auto-V/grand-theft-auto-v-223-small.webp",
      category: "Open-World",
      game: "GTA V"
    },
    {
      id: 7,
      title: "PUBG Battlegrounds Advanced Tips",
      author: "Pro Gaming",
      views: "650K views",
      timeAgo: "2 weeks ago",
      thumbnail: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2018/11/16/53c293b7-3a90-4930-9139-b8d1e69443c6/pubg",
      category: "Action",
      game: "PUBG Battlegrounds"
    },
    {
      id: 8,
      title: "GTA V Money Making Guide",
      author: "Gaming Tips",
      views: "1.5M views",
      timeAgo: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/xv3wFGGeIsI/maxresdefault.jpg",
      category: "Open-World",
      game: "GTA V"
    }
  ];

  const categories = ['All', 'Horror', 'Open-World', 'Action', 'Drama'];
  const games = ['All', 'PUBG Battlegrounds', 'GTA V', 'Valorant'];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const matchesGame = selectedGame === 'All' || tutorial.game === selectedGame;
    
    return matchesSearch && matchesCategory && matchesGame;
  });

  return (
    <div className="tutorials-container">
      {/* Search and Filter Bar */}
      <div className="tutorials-top-bar">
        <div className="tutorials-search-bar">
          <input
            type="text"
            placeholder="Search tutorial here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tutorials-search-input"
          />
          <button className="tutorials-search-btn">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="tutorials-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                if (category === 'All') {
                  setSelectedGame('All');
                }
              }}
              className={`tutorials-filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <button className="tutorials-filter-icon">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>

      {/* Sidebar and Content */}
      <div className="tutorials-main-content">
        {/* Sidebar */}
        <div className="tutorials-sidebar">
          <h3 className="tutorials-sidebar-title">By Category</h3>
          <div className="tutorials-sidebar-categories">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedGame('All');
              }}
              className={`tutorials-sidebar-category ${selectedCategory === 'All' ? 'active' : ''}`}
            >
              All
            </button>
            {categories.slice(1).map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`tutorials-sidebar-category ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          <h3 className="tutorials-sidebar-title">By Game</h3>
          <div className="tutorials-sidebar-games">
            <button
              onClick={() => setSelectedGame('All')}
              className={`tutorials-sidebar-game ${selectedGame === 'All' ? 'active' : ''}`}
            >
              All
            </button>
            {games.slice(1).map(game => (
              <button
                key={game}
                onClick={() => setSelectedGame(game)}
                className={`tutorials-sidebar-game ${selectedGame === game ? 'active' : ''}`}
              >
                {game}
              </button>
            ))}
          </div>
        </div>

        {/* Tutorial Grid */}
        <div className="tutorials-grid">
          {filteredTutorials.map(tutorial => (
            <div key={tutorial.id} className="tutorial-card">
              <div className="tutorial-thumbnail">
                <img src={tutorial.thumbnail} alt={tutorial.title} />
                <div className="tutorial-play-button">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="tutorial-info">
                <h3 className="tutorial-title">{tutorial.title}</h3>
                <div className="tutorial-meta">
                  <span className="tutorial-author">{tutorial.author}</span>
                  <div className="tutorial-stats">
                    <span className="tutorial-views">{tutorial.views}</span>
                    <span className="tutorial-separator">•</span>
                    <span className="tutorial-time">{tutorial.timeAgo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;