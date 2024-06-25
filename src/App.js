import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Error from './components/Error';
import TodoList from './components/TodoList';
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      <Route path="/" element={loggedIn?<HomePage loggedIn={loggedIn}/>:<Error/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
