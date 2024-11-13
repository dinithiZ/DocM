import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Assuming validation and authentication are successful
    navigate('/dashboard'); // Navigate to the dashboard
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Sign in to <span>DocManager</span></h2>
          <p><Link to="/register">Or create a new account</Link></p>
        </div>
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <FiUser className="input-icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <FiLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <p><Link to="/forgot-password">Forgot your password?</Link></p>
          <button type="submit" className="primary-button">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
