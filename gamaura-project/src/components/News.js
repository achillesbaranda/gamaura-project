import React from 'react';
import trendingPic from '../assets/trending-pic.png';
import newsUpdatePic from '../assets/news-update-pic.png';

function News() {
  return (
    <div className="news-page">
      {/* Hero Section - Trending Now */}
      <section className="news-trending-section">
        <h2 className="news-section-title">Trending Now</h2>
        <div className="news-trending-card">
          <img 
            src={trendingPic} 
            alt="Gamescom event" 
            className="news-trending-image"
          />
          <div className="news-trending-content">
            <h3 className="news-trending-title">
              Gamescom co-organizer details how they react to a volatile games industry
            </h3>
            <p className="news-trending-description">
              Gamescom is the biggest gaming event in the world, attracting millions of visitors annually.
            </p>
            <p className="news-author">Story by Oliver Brandt</p>
            <p className="news-time">3 hours ago</p>
          </div>
        </div>
      </section>

      {/* News Updates Section */}
      <section className="news-updates-section">
        <h2 className="news-section-title">News Updates</h2>
        <div className="news-updates-grid">
          {/* News Card 1 */}
          <div className="news-card">
            <img 
              src={newsUpdatePic} 
              alt="ZXKO League Champion" 
              className="news-card-image"
            />
            <div className="news-card-content">
              <h3 className="news-card-title">
                ZXKO Lead Champion Designer Talks Vi and the Changes Coming in the Closed Beta [Evo 2025
              </h3>
              <p className="news-card-description">Here comes Vi.</p>
              <p className="news-author">Story by Gina Cole</p>
              <p className="news-time">1 day ago</p>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="news-card">
            <img 
              src={newsUpdatePic} 
              alt="ZXKO League Champion" 
              className="news-card-image"
            />
            <div className="news-card-content">
              <h3 className="news-card-title">
                ZXKO Lead Champion Designer Talks Vi and the Changes Coming in the Closed Beta [Evo 2025
              </h3>
              <p className="news-card-description">Here comes Vi.</p>
              <p className="news-author">Story by Gina Cole</p>
              <p className="news-time">1 day ago</p>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="news-card">
            <img 
              src={newsUpdatePic} 
              alt="ZXKO League Champion" 
              className="news-card-image"
            />
            <div className="news-card-content">
              <h3 className="news-card-title">
                ZXKO Lead Champion Designer Talks Vi and the Changes Coming in the Closed Beta [Evo 2025
              </h3>
              <p className="news-card-description">Here comes Vi.</p>
              <p className="news-author">Story by Gina Cole</p>
              <p className="news-time">1 day ago</p>
            </div>
          </div>

          {/* News Card 4 */}
          <div className="news-card">
            <img 
              src={newsUpdatePic} 
              alt="ZXKO League Champion" 
              className="news-card-image"
            />
            <div className="news-card-content">
              <h3 className="news-card-title">
                ZXKO Lead Champion Designer Talks Vi and the Changes Coming in the Closed Beta [Evo 2025
              </h3>
              <p className="news-card-description">Here comes Vi.</p>
              <p className="news-author">Story by Gina Cole</p>
              <p className="news-time">1 day ago</p>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="news-pagination">
          <button className="pagination-arrow">&lt;&lt;</button>
          <button className="pagination-arrow">&lt;</button>
          <button className="pagination-number active">1</button>
          <button className="pagination-number">2</button>
          <button className="pagination-number">3</button>
          <button className="pagination-number">4</button>
          <button className="pagination-number">5</button>
          <button className="pagination-arrow">&gt;</button>
          <button className="pagination-arrow">&gt;&gt;</button>
        </div>
      </section>
    </div>
  );
}

export default News;
