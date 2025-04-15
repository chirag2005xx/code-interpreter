import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IntermediateDashboard = () => {
  const navigate = useNavigate();
  const goToCodeEditor = () => navigate('/code-editor');

  const userLevel = localStorage.getItem('userLevel');
  const userName = localStorage.getItem('userName') || 'Guest';
  const userAvatar = localStorage.getItem('userAvatar') || 'default.jpg';

  const [xpPoints, setXpPoints] = useState(100);
  const [badges, setBadges] = useState(['Pro Coder']);
  const [completedLevels, setCompletedLevels] = useState(['Level 1', 'Level 2']);

  const resources = [
    { title: 'Intermediate Algorithms', url: 'https://www.geeksforgeeks.org/intermediate-algorithms/' },
    { title: 'Object-Oriented Programming', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
    { title: 'Data Structures in Depth', url: 'https://www.geeksforgeeks.org/data-structures/' },
  ];

  const challenges = [
    { title: 'Intermediate Python Problems', url: 'https://www.leetcode.com/problemset/intermediate/' },
    { title: 'Level 2 Challenges', url: 'https://www.codewars.com/kata-search/?q=intermediate' },
    { title: 'Algorithm Challenges', url: 'https://www.kaggle.com/learn/algorithms' },
  ];

  return (
    <div className="dashboard-container bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome, {userName}!</h1>

      <div className="profile-info mb-6 flex items-center space-x-4">
        
        <div>
          <h2 className="text-xl">{userName}</h2>
          <p>Level: {userLevel}</p>
        </div>
      </div>

      <div className="progress-tracker mb-6">
        <h3 className="text-2xl font-semibold mb-4">Progress Tracker</h3>
        <p>XP Points: {xpPoints}</p>
        <p>Badges: {badges.join(', ')}</p>
        <p>Completed Levels: {completedLevels.join(', ')}</p>
      </div>

      <div className="resources mb-6">
        <h3 className="text-2xl font-semibold mb-4">Recommended Resources</h3>
        <ul>
          {resources.map((resource, index) => (
            <li key={index} className="mb-2">
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="challenges mb-6">
        <h3 className="text-2xl font-semibold mb-4">Recommended Challenges</h3>
        <ul>
          {challenges.map((challenge, index) => (
            <li key={index} className="mb-2">
              <a href={challenge.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {challenge.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 💻 Button to Go to Code Compiler */}
      <div className="text-center mt-10">
        <button
          onClick={goToCodeEditor}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl shadow-md"
        >
          Go to Code Compiler
        </button>
      </div>
    </div>
  );
};

export default IntermediateDashboard;
