import React, { useState } from 'react';
import HomepagePurchaseModal from './HomepagePurchaseModal';
import codwarfare from '../assets/codwarfare.jpg';
import codwarfare3 from '../assets/codwarfare3.jpg';
import codwarfareremastered from '../assets/codwarfareremastered.jpg';

const HomepageContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gameImages, setGameImages] = useState({});
  const [browseCarouselIndex, setBrowseCarouselIndex] = useState(0);
  const [categoryCarouselIndex, setCategoryCarouselIndex] = useState(0);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const browseGames = [
    {
      id: 1,
      title: "Farlight 84",
      image: "https://tse2.mm.bing.net/th/id/OIP.nL1ND_HdbwAbmKBFpxqd6wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "₱1024.00",
      originalPrice: "₱1365.00", 
      discount: "-25%",
      offer: "Offer ends in Dec 30, 2025",
      platforms: ["PS", "PC"],
      subtitle: "Battle Royale shooter game",
      status: "Available"
    },
    {
      id: 2,
      title: "Mobile Legends",
      image: "https://cdn.prod.website-files.com/65956e2711516206d2d1258f/67c597753236d97f8a97978d_cover.webp",
      price: "Free",
      originalPrice: "Free",
      discount: "Free to Play",
      offer: "In-app purchases available",
      platforms: ["Mobile", "PC"],
      subtitle: "5v5 MOBA game",
      status: "Available"
    },
    {
      id: 3,
      title: "Valorant",
      image: "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-892482f9cbec5827c7c4989d7feb2bf1?resize=1&w=480&h=270&quality=medium",
      price: "Free",
      originalPrice: "Free",
      discount: "Free to Play",
      offer: "Battle Pass available",
      platforms: ["PC", "Mobile"],
      subtitle: "Tactical FPS game",
      status: "Available"
    },
    {
      id: 4,
      title: "Super Mario",
      image: "https://www.godisageek.com/wp-content/uploads/Super-Mario-Party-Jamboree-1.jpg",
      price: "₱2499.00",
      originalPrice: "₱2999.00",
      discount: "-17%",
      offer: "Classic Nintendo Adventure",
      platforms: ["Nintendo", "PC"],
      subtitle: "Classic platformer adventure",
      status: "Available"
    },
    {
      id: 5,
      title: "Chuxie",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2969160/header.jpg?t=1728712358",
      price: "₱899.00",
      originalPrice: "₱1199.00",
      discount: "-25%",
      offer: "Indie Adventure Game",
      platforms: ["PC", "Mobile"],
      subtitle: "Indie adventure game",
      status: "Available"
    },
    {
      id: 6,
      title: "Apex Legends",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/f002ac48d98f501231e7d8bd3cc418b65c8d511a/capsule_616x353.jpg?t=1754578148",
      price: "Free",
      originalPrice: "Free",
      discount: "Free to Play",
      offer: "Season Pass Available",
      platforms: ["PC", "PS", "Xbox"],
      subtitle: "Battle Royale with character abilities",
      status: "Available"
    }
  ];

  const games = [
    {
      id: 1,
      title: "PUBG",
      subtitle: "Player Unknown's Battlegrounds",
      price: "₱1050.00",
      discount: "-25%",
      originalPrice: "₱1400.00",
      status: "Now Available",
      image: "https://images.hdqwalls.com/wallpapers/pubg-mobile-z1.jpg",
      screenshots: [
        "https://wallpaperaccess.com/full/825336.jpg",
        "https://www.hdwallpapers.in/download/pubg_playerunknowns_battlegrounds_4-HD.jpg",
        "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg" 
      ]
    },
    {
      id: 2,
      title: "Grand Theft Auto V",
      subtitle: "Experience the award-winning world",
      price: "₱1024.00",
      discount: "-50%",
      originalPrice: "₱2048.00",
      status: "Special Offer",
      image: "https://wallpapers.com/images/featured/grand-theft-auto-v-naej4yiap4gnxh2o.jpg",
      screenshots: [
        "https://th.bing.com/th/id/R.73274f24c297b68d172b1a688f4ba8e9?rik=nMM0DA%2fPg0Ji4Q&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1809626.jpg&ehk=rXNyXCC2bnEsSdbG8QQezRbVMFvUA6JkDV622U00H5M%3d&risl=&pid=ImgRaw&r=0",
        "https://www.hdwallpapers.in/download/grand_theft_auto_v-wide.jpg",
        "https://images.hdqwalls.com/wallpapers/gta-v-poster-4k-m7.jpg"
      ]
    },
    {
      id: 3,
      title: "Call of Duty",
      subtitle: "Modern Warfare III",  
      price: "₱2499.00",
      discount: "-15%",
      originalPrice: "₱2940.00",
      status: "New Release",
      image: codwarfare,
      screenshots: [
        codwarfare,
        codwarfare3,
        codwarfareremastered
      ]
    }
  ];

  const categories = [
    { name: "HORROR", cssClass: "homepage-category-horror" },
    { name: "OPEN WORLD", cssClass: "homepage-category-openworld" },
    { name: "PUZZLE", cssClass: "homepage-category-puzzle" },
    { name: "ACTION", cssClass: "homepage-category-action" },
    { name: "STRATEGY", cssClass: "homepage-category-strategy" },
    { name: "RACING", cssClass: "homepage-category-racing" }
  ];

  const gamesPerSlide = 3;
  const totalSlides = Math.ceil(browseGames.length / gamesPerSlide);
  
  const categoriesPerSlide = 3;
  const totalCategorySlides = Math.ceil(categories.length / categoriesPerSlide);

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? games.length - 1 : prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => prev === games.length - 1 ? 0 : prev + 1);
  };

  const prevBrowseSlide = () => {
    setBrowseCarouselIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1);
  };

  const nextBrowseSlide = () => {
    setBrowseCarouselIndex(prev => prev === totalSlides - 1 ? 0 : prev + 1);
  };

  const prevCategorySlide = () => {
    setCategoryCarouselIndex(prev => prev === 0 ? totalCategorySlides - 1 : prev - 1);
  };

  const nextCategorySlide = () => {
    setCategoryCarouselIndex(prev => prev === totalCategorySlides - 1 ? 0 : prev + 1);
  };

  const getCurrentMainImage = () => {
    const currentGame = games[currentSlide];
    const gameKey = `game_${currentGame.id}`;
    return gameImages[gameKey] || currentGame.image;
  };

  const getCurrentScreenshots = () => {
    const currentGame = games[currentSlide];
    return [currentGame.image, ...currentGame.screenshots];
  };

  const swapImages = (screenshotIndex) => {
    const currentGame = games[currentSlide];
    const gameKey = `game_${currentGame.id}`;
    const allImages = [currentGame.image, ...currentGame.screenshots];
    
    setGameImages(prev => ({
      ...prev,
      [gameKey]: allImages[screenshotIndex]
    }));
  };

  return (
    <>
      <section className="homepage-main-section">
        <div className="homepage-main-content">
          <div className="game-carousel">
            <div className="carousel-container">
              <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="carousel-slide">
                <div className="game-card-large">
                  <img 
                    src={getCurrentMainImage()} 
                    alt={games[currentSlide].title}
                    className="game-card-image"
                  />
                  <div className="game-card-overlay">
                    <div className="game-card-content">
                      <h2 className="game-title">{games[currentSlide].title}</h2>
                      <p className="game-subtitle">{games[currentSlide].subtitle}</p>
                      <div className="game-screenshots">
                        {getCurrentScreenshots().map((screenshot, index) => {
                          const isCurrentMainImage = screenshot === getCurrentMainImage();
                          return (
                            <div 
                              key={index} 
                              className={`screenshot-thumbnail clickable ${isCurrentMainImage ? 'is-main-image' : ''}`}
                              onClick={() => swapImages(index)}
                              title={isCurrentMainImage ? "This is the current main image" : "Click to set as main image"}
                            >
                              <img 
                                src={screenshot} 
                                alt={`${games[currentSlide].title} Screenshot ${index + 1}`}
                                className="screenshot-image"
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="game-status">{games[currentSlide].status}</div>
                      <div className="game-pricing">
                        <span className="discount-badge">{games[currentSlide].discount}</span>
                        <div className="price-container">
                          <span className="original-price">{games[currentSlide].originalPrice}</span>
                          <button 
                            className="current-price-button"
                            onClick={() => {
                              setSelectedGame(games[currentSlide]);
                              setIsPurchaseModalOpen(true);
                            }}
                          >
                            {games[currentSlide].price}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="carousel-indicators">
              {games.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="earbuds-section">
            <div className="earbuds-image-container">
              <img 
                src="/images/earbuds.png" 
                alt="Gaming Earbuds" 
                className="earbuds-image"
              />
            </div>
            <h3 className="earbuds-title">
              Unleash Your Gaming Aura—using our<br />
              logo-inspired gaming earbuds!
            </h3>
            <button 
              className="buy-button"
              onClick={() => {
                const earbudsProduct = {
                  id: 'earbuds-001',
                  title: 'Gamaura Gaming Earbuds',
                  subtitle: 'Logo-inspired gaming earbuds',
                  price: '₱10500',
                  originalPrice: '₱15000',
                  discount: '30% OFF',
                  image: '/images/earbuds.png',
                  status: 'Available'
                };
                setSelectedGame(earbudsProduct);
                setIsPurchaseModalOpen(true);
              }}
            >
              🛒 Buy
            </button>
          </div>
        </div>
      </section>

      <section className="ad-section">
        <div className="homepage-section-content">
          <div className="sk-ad">
            <img src="https://www.allkpop.com/upload/2024/09/content/141459/1726340344-1-capture-your-vibe-iphone-16-pro-youtube-0-0-29.jpeg" 
                 alt="Gaming Technology Advertisement" 
                 className="ad-image" />
            <p className="ad-disclaimer">This is an advertisement ⚠️</p>
          </div>
        </div>
      </section>

      <section className="homepage-section">
        <div className="homepage-section-content">
          <div className="homepage-browse-header">
            <h2 className="homepage-browse-title">BROWSE MORE</h2>
            <h2 className="homepage-browse-title">DISCOUNTED GAMES</h2>
          </div>
          
          <div className="browse-carousel-container">
            <button className="browse-carousel-btn browse-carousel-btn-prev" onClick={prevBrowseSlide}>
              &#8249;
            </button>
            
            <div className="browse-carousel-wrapper">
              <div className="browse-carousel-track" style={{
                transform: `translateX(-${browseCarouselIndex * 100}%)`
              }}>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="browse-slide">
                    <div className="browse-games-grid">
                      {browseGames
                        .slice(slideIndex * gamesPerSlide, (slideIndex + 1) * gamesPerSlide)
                        .map((game) => (
                          <div key={game.id} className="browse-game-card">
                            <img src={game.image} 
                                 alt={game.title} 
                                 className="browse-game-image" />
                            <div className="browse-game-content">
                              <h3 className="browse-game-title">{game.title}</h3>
                              <p className="browse-game-offer">{game.offer}</p>
                              <div className="browse-game-info">
                                <div className="browse-game-platforms">
                                  {game.platforms.map((platform, index) => (
                                    <span key={index} className={`browse-platform-badge browse-platform-${platform.toLowerCase()}`}>
                                      {platform}
                                    </span>
                                  ))}
                                </div>
                                <span className="browse-game-price">{game.price}</span>
                              </div>
                              <button 
                                className="browse-game-button"
                                onClick={() => {
                                  if (game.price !== "Free") {
                                    setSelectedGame(game);
                                    setIsPurchaseModalOpen(true);
                                  }
                                }}
                              >
                                {game.price === "Free" ? "Play Now" : game.price}
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="browse-carousel-btn browse-carousel-btn-next" onClick={nextBrowseSlide}>
              &#8250;
            </button>
          </div>
          
          <div className="browse-carousel-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`browse-carousel-indicator ${index === browseCarouselIndex ? 'active' : ''}`}
                onClick={() => setBrowseCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-section">
        <div className="homepage-section-content">
          <h2 className="homepage-browse-title mb-6">BROWSE CATEGORY</h2>
          
          <div className="category-carousel-container">
            <button className="category-carousel-btn category-carousel-btn-prev" onClick={prevCategorySlide}>
              &#8249;
            </button>
            
            <div className="category-carousel-wrapper">
              <div className="category-carousel-track" style={{
                transform: `translateX(-${categoryCarouselIndex * 100}%)`
              }}>
                {Array.from({ length: totalCategorySlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="category-slide">
                    <div className="homepage-category-grid">
                      {categories
                        .slice(slideIndex * categoriesPerSlide, (slideIndex + 1) * categoriesPerSlide)
                        .map((category) => (
                          <div key={category.name} 
                               className={`homepage-category-card ${category.cssClass}`}>
                            <h3 className="homepage-category-title">{category.name}</h3>
                            <div className="homepage-category-overlay"></div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="category-carousel-btn category-carousel-btn-next" onClick={nextCategorySlide}>
              &#8250;
            </button>
          </div>
          
          <div className="category-carousel-indicators">
            {Array.from({ length: totalCategorySlides }).map((_, index) => (
              <button
                key={index}
                className={`category-carousel-indicator ${index === categoryCarouselIndex ? 'active' : ''}`}
                onClick={() => setCategoryCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4">
        <div className="homepage-section-content">
          <div className="homepage-cola-ad">
            <img src="https://i.redd.it/efmp8kr2btqa1.jpg" 
                 alt="Gaming Accessories Advertisement" 
                 className="homepage-cola-image" />
          </div>
          <p className="homepage-ad-text text-center mt-2">This is an advertisement ⚠️</p>
        </div>
      </section>

      <HomepagePurchaseModal 
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        game={selectedGame}
      />
    </>
  );
};

export default HomepageContent;