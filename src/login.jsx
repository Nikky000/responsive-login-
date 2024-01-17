import React, { useState } from 'react';
import './Login.css'; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user123' && password === 'pass123') {
      onLogin();
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };
  
  return (
    <div className='main'>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>  
          <div className="input-container">
            <label>Email:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="forgot-password">
            <span className="forgot-password-text">Forgot Password?</span>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
