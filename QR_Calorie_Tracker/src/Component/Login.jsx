import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup(!isSignup);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <h1>{isSignup ? "Sign Up" : "Log In"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        {isSignup && <input type="email" placeholder="Email" required />}
        <button type="submit">{isSignup ? "Sign Up" : "Log In"}</button>
      </form>
      <button onClick={toggleForm}>
        {isSignup ? "Already have an account? Log In" : "Create an account"}
      </button>
    </div>
  );
};

export default LoginPage;
