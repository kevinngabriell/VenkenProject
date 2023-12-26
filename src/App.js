// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import Dashboard from './Dashboard.js';

function Home() {
  return <div>Home Page</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
