import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomepageContent from './components/HomepageContent';
import Tutorials from './components/Tutorials';
import AboutUs from './components/AboutUs';
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
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;