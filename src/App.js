import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import the pages and layout




import Login from './pages/auth/login';


import CodeEditorPage from './pages/codeeditor';
import Layout from './components/layout'; // Layout component

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Layout><Login /></Layout>} 
        />
        <Route 
          path="/editor" 
          element={<Layout><CodeEditorPage /></Layout>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
