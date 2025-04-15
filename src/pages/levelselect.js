import React from 'react';
import { useNavigate } from 'react-router-dom';

const LevelSelect = () => {
  const navigate = useNavigate();

  const handleLevelSelect = (level) => {
    localStorage.setItem('userLevel', level); // store the selected level
    console.log("Selected Level:", level);  // Debugging line

    if (level === 'Beginner') {
      navigate('/basic-dashboard');
    } else if (level === 'Intermediate') {
      navigate('/intermediate-dashboard');
    } else if (level === 'Advanced') {
      navigate('/advanced-dashboard');
    }
  };

  return (
    <div className="level-select-container">
      <h1 className="level-select-title">Select Your Level</h1>
      <div className="level-box-container">
        <div className="level-box">
          <h3>Beginner</h3>
          <p>Start your journey with the basics of coding.</p>
          <button className="button button-primary" onClick={() => handleLevelSelect('Beginner')}>Start</button>
        </div>
        <div className="level-box">
          <h3>Intermediate</h3>
          <p>Take your skills to the next level with intermediate challenges.</p>
          <button className="button button-primary" onClick={() => handleLevelSelect('Intermediate')}>Start</button>
        </div>
        <div className="level-box">
          <h3>Advanced</h3>
          <p>Master your skills with advanced-level problems.</p>
          <button className="button button-primary" onClick={() => handleLevelSelect('Advanced')}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;
