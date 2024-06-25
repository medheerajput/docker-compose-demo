import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div>
    <h1>Login Required</h1>
    <p>You need to log in first to access this page.</p>
    <Link to="/login">Login</Link>
  </div>
);

export default Error;
