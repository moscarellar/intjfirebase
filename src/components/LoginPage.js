import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLoginWithEmailPassword = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      setError('Error logging in with email and password');
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      setError('Error logging in with Google');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error !== null && <div>{error}</div>}
      <form onSubmit={handleLoginWithEmailPassword}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login with Email and Password</button>
      </form>
      <button onClick={handleLoginWithGoogle}>Login with Google</button>
    </div>
  );
}

export default LoginPage;

