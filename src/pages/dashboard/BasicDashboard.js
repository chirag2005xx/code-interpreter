import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BasicDashboard = () => {
  const userLevel = localStorage.getItem('userLevel');
  const userName = localStorage.getItem('userName') || 'Guest';
  const userAvatar = localStorage.getItem('userAvatar') || 'default-avatar.png';

  const [xpPoints] = useState(50);
  const [badges] = useState(['🎯 First Steps']);
  const [completedLevels] = useState(['🌱 Level 1']);
  const [challenges, setChallenges] = useState([]);

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch challenges based on user level
    const fetchChallenges = () => {
      let levelChallenges = [];
      if (userLevel === 'Beginner') {
        levelChallenges = [
          { title: 'Basic Python Exercises', url: 'https://www.leetcode.com/problemset/all/' },
          { title: 'Level 1 Challenges', url: 'https://www.codewars.com/kata-search/?q=beginner' },
        ];
      } else if (userLevel === 'Intermediate') {
        levelChallenges = [
          { title: 'Intermediate Python Problems', url: 'https://www.leetcode.com/problemset/intermediate/' },
          { title: 'Level 2 Challenges', url: 'https://www.codewars.com/kata-search/?q=intermediate' },
        ];
      } else if (userLevel === 'Advanced') {
        levelChallenges = [
          { title: 'Advanced Python Problems', url: 'https://www.leetcode.com/problemset/advanced/' },
          { title: 'Level 3 Challenges', url: 'https://www.codewars.com/kata-search/?q=advanced' },
        ];
      }
      setChallenges(levelChallenges);
    };

    fetchChallenges();
  }, [userLevel]);  // Re-run the effect when the userLevel changes

  // Function to navigate to the Code Editor page
  const goToCodeEditor = () => {
    navigate('/code-editor'); // Navigates to the CodeEditor page
  };

  // Updated layout for modern design
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard</h1>
      <div className="profile-info">
        <img src={userAvatar} alt="User Avatar" className="profile-avatar" />
        <div>
          <h2 className="profile-name">{userName}</h2>
          <p className="profile-level">Level: {userLevel}</p>
        </div>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-box">
          <h3>Your Progress</h3>
          <p>XP Points: {xpPoints}</p>
          <p>Badges: {badges.join(', ')}</p>
          <p>Completed Levels: {completedLevels.join(', ')}</p>
        </div>
        <div className="dashboard-box">
          <h3>Resources</h3>
          <ul>
            {challenges.map((challenge, index) => (
              <li key={index}>
                <a href={challenge.url} target="_blank" rel="noopener noreferrer">
                  {challenge.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={goToCodeEditor} className="button button-primary">Go to Code Compiler</button>
    </div>
  );
};

export default BasicDashboard;
