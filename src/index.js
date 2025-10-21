import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import MovieRecommendationApp from './app';  // make sure your component name matches the one in App.js
import './index.css'; // Optional: global CSS if you have

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieRecommendationApp />
  </React.StrictMode>
);
