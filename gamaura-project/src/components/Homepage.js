import React, { useState } from 'react';
import HomepagePurchaseModal from './HomepagePurchaseModal';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gameImages, setGameImages] = useState({});
  const [browseCarouselIndex, setBrowseCarouselIndex] = useState(0);
  const [categoryCarouselIndex, setCategoryCarouselIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const browseGames = [
    {
      id: 1,
      title: "Farlight 84",
      image: "https://tse2.mm.bing.net/th/id/OIP.nL1ND_HdbwAbmKBFpxqd6wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "₱1024.00",
      offer: "Offer ends in Dec 30, 2025",
      platforms: ["PS", "PC"]
    },
    {
      id: 2,
      title: "Mobile Legends",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=225&fit=crop&crop=center",
      price: "Free",
      offer: "In-app purchases available",
      platforms: ["Mobile", "PC"]
    },
    {
      id: 3,
      title: "Valorant",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop&crop=center",
      price: "Free",
      offer: "Battle Pass available",
      platforms: ["PC", "Mobile"]
    },
    {
      id: 4,
      title: "Super Mario",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=225&fit=crop&crop=center",
      price: "₱2499.00",
      offer: "Classic Nintendo Adventure",
      platforms: ["Nintendo", "PC"]
    },
    {
      id: 5,
      title: "Chuxie",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=225&fit=crop&crop=center",
      price: "₱899.00",
      offer: "Indie Adventure Game",
      platforms: ["PC", "Mobile"]
    },
    {
      id: 6,
      title: "Apex Legends",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=225&fit=crop&crop=center",
      price: "Free",
      offer: "Season Pass Available",
      platforms: ["PC", "PS", "Xbox"]
    }
  ];

  const games = [
    {
      id: 1,
      title: "PUBG",
      subtitle: "Player Unknown's Battlegrounds",
      price: "₱10500",
      discount: "-25%",
      originalPrice: "₱13667",
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
      image: "https://tse3.mm.bing.net/th/id/OIP.yD1FEQxaoLriYhLmlCGtkQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3y",
      screenshots: [
        "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg",
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/call-of-duty-modern-warfare-3-cod-mw3-skidrow-map-team-action-with-game-logo.jpg",
        "https://cdn.wccftech.com/wp-content/uploads/2023/08/WCCFcallofdutymodernwarfare3-HD-scaled.jpg"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
  };

  const gamesPerSlide = 3;
  const totalSlides = Math.ceil(browseGames.length / gamesPerSlide);

  const nextBrowseSlide = () => {
    setBrowseCarouselIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevBrowseSlide = () => {
    setBrowseCarouselIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Category carousel functions
  const categories = [
    { name: 'HORROR', cssClass: 'homepage-category-horror' },
    { name: 'OPEN WORLD', cssClass: 'homepage-category-openworld' },
    { name: 'PUZZLE', cssClass: 'homepage-category-puzzle' },
    { name: 'ACTION', cssClass: 'homepage-category-action' },
    { name: 'STRATEGY', cssClass: 'homepage-category-strategy' },
    { name: 'RACING', cssClass: 'homepage-category-racing' }
  ];

  const categoriesPerSlide = 3;
  const totalCategorySlides = Math.ceil(categories.length / categoriesPerSlide);

  const nextCategorySlide = () => {
    setCategoryCarouselIndex((prev) => (prev + 1) % totalCategorySlides);
  };

  const prevCategorySlide = () => {
    setCategoryCarouselIndex((prev) => (prev - 1 + totalCategorySlides) % totalCategorySlides);
  };

  const swapImages = (screenshotIndex) => {
    const currentGame = games[currentSlide];
    const gameKey = `game-${currentSlide}`;
    

    const currentMainImage = gameImages[gameKey]?.mainImage || currentGame.image;
    const currentScreenshots = gameImages[gameKey]?.screenshots || [...currentGame.screenshots];
    

    const clickedScreenshot = currentScreenshots[screenshotIndex];
    
 
    if (currentMainImage === clickedScreenshot) {
      return;
    }
    

    const newScreenshots = [...currentScreenshots];
    newScreenshots[screenshotIndex] = currentMainImage;
    
    setGameImages(prev => ({
      ...prev,
      [gameKey]: {
        mainImage: clickedScreenshot,
        screenshots: newScreenshots
      }
    }));
  };

 
  const getCurrentMainImage = () => {
    const gameKey = `game-${currentSlide}`;
    return gameImages[gameKey]?.mainImage || games[currentSlide].image;
  };

  const getCurrentScreenshots = () => {
    const gameKey = `game-${currentSlide}`;
    return gameImages[gameKey]?.screenshots || games[currentSlide].screenshots;
  };

  return (
    <div className="homepage-container">

      <header className="homepage-header">
        <div className="homepage-header-content">
   
          <div 
            className="homepage-logo"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
            }}
          >
            <img 
              src="/images/GAMAURA-LOGO.png" 
              alt="Gamaura Logo" 
              className="homepage-logo-image"
            />
            <div className="homepage-logo-text-container">
              <span className="homepage-logo-am">AM</span>
              <span className="homepage-logo-aura">AURA</span>
            </div>
          </div>

          
          <nav className="homepage-nav">
            <a href="#home" className="homepage-nav-link">Home</a>
            <a href="#tutorials" className="homepage-nav-link">Tutorials</a>
            <a href="#about" className="homepage-nav-link">About Us</a>
            <a href="#play-to-gain" className="homepage-nav-link">Play to Gain</a>
            <a href="#news" className="homepage-nav-link">News</a>
            <a href="#feed" className="homepage-nav-link">Feed</a>
          </nav>

    
          <div className="homepage-search">
            <input 
              type="text" 
              placeholder="Search here..." 
              className="homepage-search-input"
            />
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Profile Dropdown */}
          <div className="homepage-profile-container">
            <button 
              className="homepage-profile-btn"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <div className="homepage-profile-avatar">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <svg className={`w-4 h-4 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isProfileDropdownOpen && (
              <div className="homepage-profile-dropdown">
                <a href="#profile" className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </a>
                <a href="#library" className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Library
                </a>
                <a href="#game-credits" className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Game Credits
                </a>
                <hr className="homepage-profile-dropdown-divider" />
                <a href="#login" className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login/Sign Up
                </a>
              </div>
            )}
          </div>


          <button 
            className="homepage-mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="homepage-mobile-nav">
            <a href="#home" className="homepage-mobile-nav-link">Home</a>
            <a href="#tutorials" className="homepage-mobile-nav-link">Tutorials</a>
            <a href="#about" className="homepage-mobile-nav-link">About Us</a>
            <a href="#play-to-gain" className="homepage-mobile-nav-link">Play to Gain</a>
            <a href="#news" className="homepage-mobile-nav-link">News</a>
            <a href="#game-credits" className="homepage-mobile-nav-link">Game Credits</a>
            <a href="#feed" className="homepage-mobile-nav-link">Feed</a>
            <a href="#library" className="homepage-mobile-nav-link">Library</a>
            <a href="#profile" className="homepage-mobile-nav-link">Profile</a>
            <a href="#login" className="homepage-mobile-nav-link">Login/Sign Up</a>
          </div>
        )}
      </header>


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
            <button className="buy-button">
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
                              <button className="browse-game-button">
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

      <footer className="homepage-footer">
        <div className="homepage-footer-content">
          <div className="homepage-footer-controller">
            <img src="/images/GAMAURA-LOGO.png" 
                 alt="Gamaura Logo" 
                 className="rounded-lg" />
          </div>
          
          <div className="homepage-footer-info">
            <p className="homepage-footer-description">
              Gamaura is an all-in-one digital gaming service that 
              brings game purchase, download, social gaming, 
              tutorials, history, news, updates, buy game, credits, 
              loyalty management, and advanced social gaming 
              experiences to our users.
            </p>
            
            <div className="mb-4">
              <h3 className="homepage-footer-contact-title">Contact Us</h3>
              <p className="homepage-footer-contact-info">09917847843</p>
              <p className="homepage-footer-contact-info">Gamaura@Thegmail.com</p>
            </div>

            <div className="homepage-footer-social">
            <a
             href="https://www.facebook.com/achilles.baranda"
             className="homepage-footer-social-link homepage-footer-social-facebook"
             target="_blank"
             rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/>
             </svg>
            </a>

            <a
             href="https://www.youtube.com/@MobileLegends5v5MOBA"
             className="homepage-footer-social-link homepage-footer-social-youtube"
            target="_blank"
            rel="noopener noreferrer"
             >
             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.103C19.582 3.5 12 3.5 12 3.5s-7.582 0-9.408.583a2.97 2.97 0 0 0-2.09 2.103C0 8.03 0 12 0 12s0 3.97.502 5.814a2.97 2.97 0 0 0 2.09 2.103C4.418 20.5 12 20.5 12 20.5s7.582 0 9.408-.583a2.97 2.97 0 0 0 2.09-2.103C24 15.97 24 12 24 12s0-3.97-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
            </svg>
        </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/Akiressuuu"
    className="homepage-footer-social-link homepage-footer-social-x"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
</div>

          </div>

          <div className="homepage-footer-qr">
            <div className="homepage-footer-qr-container">
              <img src="/images/GAMAURA-QR.png" 
                   alt="Gamaura QR Code" 
                   className="homepage-footer-qr-image" />
            </div>
            <p className="homepage-footer-qr-text">
              Download our Mobile App<br />Now!
            </p>
          </div>
        </div>
      </footer>

      <HomepagePurchaseModal 
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        game={selectedGame}
      />
    </div>
  );
};

export default Homepage;