// BasicDashboard.js
import React, { useState } from 'react';

const BasicDashboard = () => {
  const userLevel = localStorage.getItem('userLevel');
  const userName = localStorage.getItem('userName') || 'Guest';
  const userAvatar = localStorage.getItem('userAvatar') || 'default-avatar.png';

  const [xpPoints] = useState(50);
  const [badges] = useState(['🎯 First Steps']);
  const [completedLevels] = useState(['🌱 Level 1']);

  const resources = [
    { title: 'Python Basics', url: 'https://www.geeksforgeeks.org/python-programming-language/' },
    { title: 'Intro to Algorithms', url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/' },
  ];

  const challenges = [
    { title: 'Basic Python Exercises', url: 'https://www.leetcode.com/problemset/all/' },
    { title: 'Level 1 Challenges', url: 'https://www.codewars.com/kata-search/?q=beginner' },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">👋 Welcome, {userName}!</h1>

      <div className="flex items-center gap-6 mb-8">
        <img src={`./avatars/${userAvatar}`} alt="Avatar" className="w-20 h-20 rounded-full shadow-lg border-2 border-indigo-500" />
        <div>
          <p className="text-lg font-semibold">Level: <span className="text-indigo-300">{userLevel}</span></p>
        </div>
      </div>

      <section className="mb-10 bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">📈 Progress Tracker</h2>
        <ul className="space-y-2">
          <li>💠 XP Points: <span className="text-green-400">{xpPoints}</span></li>
          <li>🏅 Badges: {badges.join(', ')}</li>
          <li>✅ Completed Levels: {completedLevels.join(', ')}</li>
        </ul>
      </section>

      <section className="mb-10 bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">📚 Recommended Resources</h2>
        <ul className="list-disc list-inside space-y-2">
          {resources.map((res, idx) => (
            <li key={idx}>
              <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 underline">
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">⚔️ Recommended Challenges</h2>
        <ul className="list-disc list-inside space-y-2">
          {challenges.map((challenge, idx) => (
            <li key={idx}>
              <a href={challenge.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 underline">
                {challenge.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BasicDashboard;
