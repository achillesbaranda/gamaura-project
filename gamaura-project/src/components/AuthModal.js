import React, { useState } from 'react';

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateLogin = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const validateSignup = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = isLogin ? validateLogin() : validateSignup();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Success - clear errors and form
    setErrors({});
    if (isLogin) {
      console.log('Login successful:', formData.username);
      alert('Login successful!');
    } else {
      console.log('Signup successful:', formData.username);
      alert('Signup successful!');
    }
    
    // Reset form and close modal
    setFormData({ username: '', password: '', confirmPassword: '' });
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={handleOverlayClick}>
      <div className="auth-modal">
        <button className="auth-modal-close" onClick={onClose}>×</button>
        
        <h2 className="auth-modal-title">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Username */}
          <div className="auth-form-group">
            <label className="auth-form-label">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`auth-form-input ${errors.username ? 'auth-form-input-error' : ''}`}
              placeholder="Enter your username"
            />
            {errors.username && (
              <span className="auth-form-error">{errors.username}</span>
            )}
          </div>

          {/* Password */}
          <div className="auth-form-group">
            <label className="auth-form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`auth-form-input ${errors.password ? 'auth-form-input-error' : ''}`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="auth-form-error">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password (Signup only) */}
          {!isLogin && (
            <div className="auth-form-group">
              <label className="auth-form-label">Re-enter Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`auth-form-input ${errors.confirmPassword ? 'auth-form-input-error' : ''}`}
                placeholder="Re-enter your password"
              />
              {errors.confirmPassword && (
                <span className="auth-form-error">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          {/* Switch Mode Button */}
          <button type="button" onClick={switchMode} className="auth-switch-btn">
            {isLogin 
              ? "Don't have an account? Sign Up" 
              : "Already have an account? Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
