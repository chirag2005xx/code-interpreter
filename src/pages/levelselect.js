import React from 'react';
import { useNavigate } from 'react-router-dom';

const LevelSelect = () => {
  const navigate = useNavigate();

  const handleLevelSelect = (level) => {
    localStorage.setItem('userLevel', level); // store the selected level
    navigate('/dashboard'); // move to dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Select Your Level</h1>
      <div className="space-y-4">
        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
          <button
            key={level}
            onClick={() => handleLevelSelect(level)}
            className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-700"
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelect;
