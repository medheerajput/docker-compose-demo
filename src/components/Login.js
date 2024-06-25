import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication logic (replace with your actual authentication)
    if (username === 'user' && password === 'password') {
    console.log("sdfdsf")
      setLoggedIn(true);
      navigate("/")
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login Page !</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
