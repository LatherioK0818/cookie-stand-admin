
import { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import CookieStandAdmin from '../components/CookieStandAdmin';
import jwt from 'jsonwebtoken';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // On component mount, check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Decode token to check if it's still valid
      const user = jwt.decode(token);
      // If user is decoded successfully, consider them logged in
      if (user) setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      // Attempt to log in
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // On successful login, set token and update login state
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setMessage(''); // Clear any logout messages
      } else {
        setMessage('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred during login.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Log out by removing token
    setIsLoggedIn(false); // Update state to reflect logged-out status
    setMessage('Successfully logged out.'); // Optionally, show a logout message
  };

  const handleRegister = async (username, password, email) => {
    try {
      // Attempt to register
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful, please log in.');
        setIsRegistering(false); // Switch to login form after successful registration
      } else {
        setMessage('Registration failed: ' + data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('An error occurred during registration.');
    }
  };

  const toggleShowRegistration = () => setIsRegistering(!isRegistering);

  return (
    <div className="container mx-auto my-8">
      {!isLoggedIn ? (
        <>
          {message && <p className="my-4 text-center">{message}</p>}
          {isRegistering ? (
            <>
              <RegistrationForm onRegister={handleRegister} />
              <p className="mt-4 text-center">
                Already have an account?{' '}
                <button
                  onClick={() => setIsRegistering(false)}
                  className="text-blue-600 transition duration-300 ease-in-out hover:text-blue-800"
                >
                  Log in
                </button>
              </p>
            </>
          ) : (
            <>
              <LoginForm onLogin={handleLogin} />
              <p className="mt-4 text-center">
                Don't have an account?{' '}
                <button
                  onClick={toggleShowRegistration}
                  className="text-blue-600 transition duration-300 ease-in-out hover:text-blue-800"
                >
                  Register
                </button>
              </p>
            </>
          )}
        </>
      ) : (
        <CookieStandAdmin onLogout={handleLogout} />
      )}
    </div>
  );
}
