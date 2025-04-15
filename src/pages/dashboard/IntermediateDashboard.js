import React, { useEffect, useState } from 'react';

const IntermediateDashboard = () => {
  // Retrieve data from localStorage (assuming the user level and name are stored)
  const userLevel = localStorage.getItem('userLevel');
  const userName = localStorage.getItem('userName') || 'Guest';  // Default to 'Guest' if no name
  const userAvatar = localStorage.getItem('userAvatar') || 'default-avatar.png';  // Default avatar

  // Dummy data for progress
  const [xpPoints, setXpPoints] = useState(100); // Example XP points for intermediate
  const [badges, setBadges] = useState(['Pro Coder']); // Example badges
  const [completedLevels, setCompletedLevels] = useState(['Level 1', 'Level 2']); // Example completed levels

  // Dummy resources and challenges for Intermediate level
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
        <img src={`./avatars/${userAvatar}`} alt="Avatar" className="w-16 h-16 rounded-full" />
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

      <div className="challenges">
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
    </div>
  );
};

export default IntermediateDashboard;
