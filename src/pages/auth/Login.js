import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/authSlice'; 
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');  
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  
  const { loading, error, user } = useSelector((state) => state.auth);  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); 
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <Box className="login-box">
        <Typography variant="h4" className="login-title">
          DirectAdmin
        </Typography>
        <Typography variant="subtitle1" className="login-subtitle">
          web control panel
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />

          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            className="login-button"
            disabled={loading}  
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        {error && (
          <Typography variant="body2" color="error" className="error-message">
            {error.message || 'Login failed. Please try again.'}
          </Typography>
        )}

        <Typography variant="caption" className="login-footer">
          2021-08-13 16:20:02
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
