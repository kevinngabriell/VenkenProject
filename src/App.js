// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import Dashboard from './Dashboard.js';
import PurchasingIndex from './Purchasing/PurchasingIndex.js';
import PurchasingImportForm from './Purchasing/PurchasingImportForm.js';
import PurchasingLocalForm from './Purchasing/PurchasingLocalForm.js';

function Home() {
  return <div>Home Page</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/purchasing/purchasingIndex" element={<PurchasingIndex />} />
      <Route path="/purchasing/purchasingImportForm" element={<PurchasingImportForm />} />
      <Route path="/purchasing/purchasingLocalForm" element={<PurchasingLocalForm />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
