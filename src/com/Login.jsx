import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onSignIn(userCredential.user);
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Welcome Back</h1>
          <p>Please login to your account</p>
          <div className="input-group">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="email"
              required
              style={{ backgroundColor: 'white', color:'black' }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              style={{ backgroundColor: 'white' , color:'black' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <div className="bottom-text">
            <p>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
