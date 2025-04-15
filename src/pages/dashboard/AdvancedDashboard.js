import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

const AdvancedDashboard = () => {
  const userLevel = localStorage.getItem('userLevel');
  const userName = localStorage.getItem('userName') || 'Guest';
  const userAvatar = localStorage.getItem('userAvatar') || 'default-avatar.png';

  const [xpPoints] = useState(200);
  const [badges] = useState(['🔥 Expert Coder', '🧠 Algorithm Ace']);
  const [completedLevels] = useState(['🌱 Level 1', '🌿 Level 2', '🌳 Level 3']);

  const navigate = useNavigate(); // ✅ Initialize navigation

  const goToCodeEditor = () => {
    navigate('/code-editor'); // ✅ Navigate to code editor
  };

  const resources = [
    { title: 'Advanced Algorithms', url: 'https://www.geeksforgeeks.org/advanced-algorithms/' },
    { title: 'Machine Learning Basics', url: 'https://www.geeksforgeeks.org/machine-learning/' },
    { title: 'Data Structures Mastery', url: 'https://www.geeksforgeeks.org/data-structures/' },
  ];

  const challenges = [
    { title: 'Advanced Python Problems', url: 'https://www.leetcode.com/problemset/advanced/' },
    { title: 'Level 3 Challenges', url: 'https://www.codewars.com/kata-search/?q=advanced' },
    { title: 'Machine Learning Projects', url: 'https://www.kaggle.com/' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">🚀 Welcome, {userName}!</h1>

      <div className="flex items-center gap-6 mb-8">
        <img src={`./avatars/${userAvatar}`} alt="Avatar" className="w-20 h-20 rounded-full shadow-lg border-2 border-red-500" />
        <div>
          <p className="text-lg font-semibold">Level: <span className="text-red-300">{userLevel}</span></p>
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
        <h2 className="text-2xl font-bold mb-4">📚 Elite Resources</h2>
        <ul className="list-disc list-inside space-y-2">
          {resources.map((res, idx) => (
            <li key={idx}>
              <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-200 underline">
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🏆 Ultimate Challenges</h2>
        <ul className="list-disc list-inside space-y-2">
          {challenges.map((challenge, idx) => (
            <li key={idx}>
              <a href={challenge.url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-200 underline">
                {challenge.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ✅ Code Compiler Button */}
      <div className="mt-8 text-center">
        <button 
          onClick={goToCodeEditor}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-xl shadow-lg"
        >
          Go to Code Compiler
        </button>
      </div>
    </div>
  );
};

export default AdvancedDashboard;
