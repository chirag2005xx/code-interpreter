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
          <li>
            <a href="https://www.geeksforgeeks.org/python-programming-language/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 underline">
              Python Basics
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 underline">
              Intro to Algorithms
            </a>
          </li>
        </ul>
      </section>

      <section className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">⚔️ Recommended Challenges</h2>
        <ul className="list-disc list-inside space-y-2">
          {challenges.length > 0 ? (
            challenges.map((challenge, idx) => (
              <li key={idx}>
                <a href={challenge.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 underline">
                  {challenge.title}
                </a>
              </li>
            ))
          ) : (
            <li>No challenges available for your level.</li>
          )}
        </ul>
      </section>

      {/* Code Compiler Button */}
      <div className="mt-8 text-center">
        <button 
          onClick={goToCodeEditor}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full text-xl shadow-lg"
        >
          Go to Code Compiler
        </button>
      </div>
    </div>
  );
};

export default BasicDashboard;
