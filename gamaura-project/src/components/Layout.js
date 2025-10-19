import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
            <Link to="/" className="homepage-nav-link">Home</Link>
            <Link to="/tutorials" className="homepage-nav-link">Tutorials</Link>
            <Link to="/about" className="homepage-nav-link">About Us</Link>
            <Link to="/play-to-gain" className="homepage-nav-link">Play to Gain</Link>
            <Link to="/news" className="homepage-nav-link">News</Link>
            <Link to="/feed" className="homepage-nav-link">Feed</Link>
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
                <Link to="/profile" className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </Link>
                <Link to="/library" className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Library
                </Link>
                <Link to="/game-credits" className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Game Credits
                </Link>
                <hr className="homepage-profile-dropdown-divider" />
                <button onClick={() => setIsAuthModalOpen(true)} className="homepage-profile-dropdown-link">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login/Sign Up
                </button>
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
            <Link to="/" className="homepage-mobile-nav-link">Home</Link>
            <Link to="/tutorials" className="homepage-mobile-nav-link">Tutorials</Link>
            <Link to="/about" className="homepage-mobile-nav-link">About Us</Link>
            <Link to="/play-to-gain" className="homepage-mobile-nav-link">Play to Gain</Link>
            <Link to="/news" className="homepage-mobile-nav-link">News</Link>
            <Link to="/feed" className="homepage-mobile-nav-link">Feed</Link>
            <Link to="/game-credits" className="homepage-mobile-nav-link">Game Credits</Link>
            <Link to="/library" className="homepage-mobile-nav-link">Library</Link>
            <Link to="/profile" className="homepage-mobile-nav-link">Profile</Link>
            <button onClick={() => setIsAuthModalOpen(true)} className="homepage-mobile-nav-link">Login/Sign Up</button>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
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
              <p className="homepage-footer-contact-info">gamaura.official.acc@gmail.com</p>
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
    </div>
  );
};

export default Layout;