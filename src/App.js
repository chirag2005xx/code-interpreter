import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import the pages and layout
import Login from './pages/auth/login';
import LevelSelect from './pages/levelselect'; // Import LevelSelect page
import CodeEditorPage from './pages/codeeditor';
import Layout from './components/layout'; // Layout component
import BasicDashboard from './pages/dashboard/BasicDashboard'; // Basic dashboard
import IntermediateDashboard from './pages/dashboard/IntermediateDashboard'; // Intermediate dashboard
import AdvancedDashboard from './pages/dashboard/AdvancedDashboard'; // Advanced dashboard
console.log("Login:", Login);
console.log("LevelSelect:", LevelSelect);
console.log("CodeEditorPage:", CodeEditorPage);
console.log("BasicDashboard:", BasicDashboard);
console.log("IntermediateDashboard:", IntermediateDashboard);
console.log("AdvancedDashboard:", AdvancedDashboard);
console.log("Layout:", Layout);


function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Layout><Login /></Layout>} 
        />
        <Route 
          path="/levelselect" 
          element={<Layout><LevelSelect /></Layout>} 
        />
        <Route 
          path="/editor" 
          element={<Layout><CodeEditorPage /></Layout>} 
        />
        <Route 
          path="/basic-dashboard" 
          element={<Layout><BasicDashboard /></Layout>} 
        />
        <Route 
          path="/intermediate-dashboard" 
          element={<Layout><IntermediateDashboard /></Layout>} 
        />
        <Route 
          path="/advanced-dashboard" 
          element={<Layout><AdvancedDashboard /></Layout>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
