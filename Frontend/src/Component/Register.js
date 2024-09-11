import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from './register.module.css'; // Import the CSS module

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Mobile Number Validation
  const validateMobileNumber = (mobileNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobileNumber);
  };

  // Email Validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password Validation
  const validatePassword = (password) => {
    return password.length >= 6; // Example: Password must be at least 6 characters
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, username, mobileNumber, email, password } = formData;
    let validationErrors = {};

    if (!validateMobileNumber(mobileNumber)) {
      validationErrors.mobileNumber = 'Mobile number must be 10 digits';
    }

    if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!validatePassword(password)) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Send POST request to backend
      await axios.post('http://localhost:8989/users/addUser', {
        fullName,
        username,
        mobileNumber,
        email,
        password,
      });
      alert('User registered successfully');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response && error.response.data) {
        setErrors({ server: error.response.data });
      }
    }
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={`${styles.container} shadow-lg rounded`}>
        <h1 className="h3">Registration Form</h1>

        {errors.server && <div className={styles.alert}>{errors.server}</div>}

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.formControl}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.formControl}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className={styles.formControl}
            required
          />
          {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.formControl}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className={styles.inputContainer}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.formControl}
              required
            />
            <button type="button" onClick={handleTogglePassword} className={styles.passwordToggleIcon}>
              {passwordVisible ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
            </button>
          </div>
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        <button type="submit" className={styles.btnSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;