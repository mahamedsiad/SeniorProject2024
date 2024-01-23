import React, { useState } from 'react';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = ({onSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       onSignIn(userCredential.user);
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSignup}>
          <h1>Welcome</h1>
          <p>Please Sign up</p>
          <div className="input-group">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              required
              style={{ backgroundColor: 'white' , color:'black'}}
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
              style={{ backgroundColor: 'white' , color:'black'}}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
          <div className="bottom-text">
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
