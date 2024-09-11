import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';  // Importing the CSS module

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { username, password } = formData;
  
    if (!username || !password) {
      alert('Please fill out all fields');
      return;
    }
  
    try {
      const response = await axios.post(`http://localhost:8989/users/login?username=${username}&password=${password}`);
  
      if (response.status === 200) {
        alert("User logged in successfully");
        navigate('/');
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid username or password");
      } else {
        console.error('Error logging in:', error);
        alert('Error logging in: ' + error.message);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={styles.formControl}
            />
          </div>
          <div className={`${styles.inputContainer} mb-3`}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={styles.formControl}
            />
            <button type="button" onClick={handleTogglePassword} className={styles.passwordToggleIcon}>
              {passwordVisible ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
            </button>
          </div>
          <button type="submit" className={styles.btnSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;