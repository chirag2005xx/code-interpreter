import React from 'react';
import './Layout.css'; // You can add specific layout styles here if needed

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Your App</h1>
      </header>
      
      <div className="workspace">
        {children} {/* This is where page content will be rendered */}
      </div>
      
      <footer className="footer">
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export default Layout;
