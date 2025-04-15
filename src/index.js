import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Handle ResizeObserver errors
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('ResizeObserver loop')) {
    return;
  }
  originalConsoleError(...args);
};

if (typeof ResizeObserver !== 'undefined') {
  // Create a safer version of ResizeObserver
  const originalResizeObserver = window.ResizeObserver;
  window.ResizeObserver = class SafeResizeObserver extends originalResizeObserver {
    constructor(callback) {
      super((entries, observer) => {
        try {
          callback(entries, observer);
        } catch (e) {
          if (!e.message.includes('ResizeObserver loop')) {
            throw e;
          }
        }
      });
    }
  };
}

// Add this to the top of your index.js file
const origErrorFunc = window.console.error;
window.console.error = function(...args) {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('ResizeObserver loop')) {
    // Don't log these errors
    return;
  }
  origErrorFunc.apply(this, args);
};

// Also add this as a safety net
if (window.ResizeObserver) {
  const resizeObserverPrototype = ResizeObserver.prototype;
  const originalObserve = resizeObserverPrototype.observe;
  resizeObserverPrototype.observe = function(target, options) {
    try {
      return originalObserve.apply(this, [target, options]);
    } catch (e) {
      if (e.message.includes('ResizeObserver loop')) {
        // Ignore the error
        return;
      }
      throw e;
    }
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Silence ResizeObserver error in development
const observerError = console.error;
console.error = (...args) => {
  if (
    args[0] &&
    typeof args[0] === 'string' &&
    args[0].includes('ResizeObserver loop completed')
  ) return;
  observerError(...args);
};



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
