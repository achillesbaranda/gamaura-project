import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomepageContent from './components/HomepageContent';
import Tutorials from './components/Tutorials';
import AboutUs from './components/AboutUs';
import PlayToGain from './components/PlayToGain';
import News from './components/News';
import Feed from './components/Feed';
import Profile from './components/Profile';
import GameCredits from './components/GameCredits';
import Library from './components/Library';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomepageContent />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/play-to-gain" element={<PlayToGain />} />
            <Route path="/news" element={<News />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/game-credits" element={<GameCredits />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;