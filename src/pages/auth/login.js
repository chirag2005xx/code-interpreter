import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation (replace this with actual auth later)
    if (username === 'test' && password === '1234') {
      // Navigate to level select after login
      navigate('/levelselect');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back!</h1>
          <p>Please log in to continue</p>
        </div>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            className="input-field" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="button">Login</button>
        </form>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
