// API Configuration
// This file dynamically loads API URLs based on environment

const API_CONFIG = {
  // Development
  development: {
    apiBaseUrl: 'http://localhost:5000/api'
  },
  // Production (Netlify)
  production: {
    apiBaseUrl: process.env.REACT_APP_API_URL || window.__API_URL__ || 'https://iot-projeto-backend.onrender.com/api'
  }
};

// Determine environment
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const environment = isDevelopment ? 'development' : 'production';

// Get configuration
const config = API_CONFIG[environment];

// Export for use in app.js
window.API_BASE = config.apiBaseUrl;
window.API_DATA = `${config.apiBaseUrl}/data`;
window.API_LOGIN = `${config.apiBaseUrl}/login`;
window.API_USERS = `${config.apiBaseUrl}/users`;

console.log(`🔧 Environment: ${environment}`);
console.log(`🌐 API Base URL: ${window.API_BASE}`);
