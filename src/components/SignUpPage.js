import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUpWithEmailPassword = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      setError('Error signing up with email and password');
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      setError('Error signing up with Google');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error !== null && <div>{error}</div>}
      <form onSubmit={handleSignUpWithEmailPassword}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign Up with Email and Password</button>
      </form>
      <button onClick={handleSignUpWithGoogle}>Sign Up with Google</button>
    </div>
  );
}

export default SignUpPage;
