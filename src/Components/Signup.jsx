import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Config/Firebase'; // Firebase config
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            padding: '30px',
            background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 2 }}>
            To keep connected with us, please login with your personal info.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#fff', color: '#ff416c' }}
            onClick={() => navigate('/login')}
          >
            Sign In
          </Button>
        </Box>

        <Container
          sx={{
            padding: '30px',
            backgroundColor: '#fff',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
            sx={{ mb: 2 }}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignUp}
          >
            Sign Up with Google
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Signup;
















