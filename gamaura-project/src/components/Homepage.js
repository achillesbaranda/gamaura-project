import React, { useState } from 'react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gameImages, setGameImages] = useState({});
  

  const games = [
    {
      id: 1,
      title: "PUBG",
      subtitle: "Player Unknown's Battlegrounds",
      price: "₱102500",
      discount: "-25%",
      originalPrice: "₱136667",
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
   
          <div className="homepage-logo">
            <div className="homepage-logo-icon">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="homepage-logo-text">GAMAURA</span>
          </div>

          
          <nav className="homepage-nav">
            <a href="#home" className="homepage-nav-link">Home</a>
            <a href="#tutorials" className="homepage-nav-link">Tutorials</a>
            <a href="#about" className="homepage-nav-link">About Us</a>
            <a href="#play-to-gain" className="homepage-nav-link">Play to Gain</a>
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


          <button className="homepage-mobile-menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
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
                          <span className="current-price">{games[currentSlide].price}</span>
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
                src="https://via.placeholder.com/300x200/333/fff?text=Gaming+Earbuds+with+Dragons" 
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
            <div className="sk-ad-content">
              <span className="sk-logo">SK telecom</span>
              <div className="sk-text">SK 텔레콤</div>
            </div>
            <p className="ad-disclaimer">This is an advertisement 😊</p>
          </div>
        </div>
      </section>

      <section className="homepage-section">
        <div className="homepage-section-content">
          <div className="homepage-browse-header">
            <h2 className="homepage-browse-title">BROWSE MORE</h2>
            <h2 className="homepage-browse-title">DISCOUNTED GAMES</h2>
          </div>
          
          <div className="homepage-games-scroll">
            {[1, 2, 3].map((item) => (
              <div key={item} className="homepage-game-card">
                <img src="https://via.placeholder.com/240x135/333/fff?text=GTA+V" 
                     alt="Grand Theft Auto V" 
                     className="homepage-game-image" />
                <h3 className="homepage-game-title">Grand Theft Auto V</h3>
                <p className="homepage-game-offer">Offer ends in Aug 30, 2024</p>
                <div className="flex justify-between items-center mb-3">
                  <div className="homepage-game-platforms">
                    <span className="homepage-platform-badge homepage-platform-ps">PS</span>
                    <span className="homepage-platform-badge homepage-platform-pc">PC</span>
                  </div>
                  <span className="homepage-game-price">₱1024.00</span>
                </div>
                <button className="homepage-game-button">
                  ₱1024.00
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-section">
        <div className="homepage-section-content">
          <h2 className="homepage-browse-title mb-6">BROWSE CATEGORY</h2>
          <div className="homepage-category-grid">
            {[
              { name: 'ACTION', cssClass: 'homepage-category-action' },
              { name: 'OPEN WORLD', cssClass: 'homepage-category-openworld' },
              { name: 'PUZZLE', cssClass: 'homepage-category-puzzle' }
            ].map((category) => (
              <div key={category.name} 
                   className={`homepage-category-card ${category.cssClass}`}>
                <h3 className="homepage-category-title">{category.name}</h3>
                <div className="homepage-category-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4">
        <div className="homepage-section-content">
          <div className="homepage-cola-ad">
            <img src="https://via.placeholder.com/200x100/dc2626/fff?text=Coca+Cola" 
                 alt="Coca Cola" 
                 className="homepage-cola-image" />
          </div>
          <p className="homepage-ad-text text-center mt-2">This is an advertisement 😊</p>
        </div>
      </section>

      <footer className="homepage-footer">
        <div className="homepage-footer-content">
          <div className="homepage-footer-controller">
            <img src="https://via.placeholder.com/150x100/333/fff?text=Controller" 
                 alt="Gaming Controller" 
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
              <a href="https://twitter.com/gamaura" className="homepage-footer-social-link homepage-footer-social-twitter" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://pinterest.com/gamaura" className="homepage-footer-social-link homepage-footer-social-pinterest" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                </svg>
              </a>
              <a href="https://x.com/gamaura" className="homepage-footer-social-link homepage-footer-social-x" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="homepage-footer-qr">
            <div className="homepage-footer-qr-container">
              <img src="https://via.placeholder.com/100x100/000/fff?text=QR" 
                   alt="QR Code" 
                   className="homepage-footer-qr-image" />
            </div>
            <p className="homepage-footer-qr-text">
              Download our Mobile App<br />Now!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;