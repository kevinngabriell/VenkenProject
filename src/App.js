// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import Dashboard from './Dashboard.js';
import PurchasingIndex from './Purchasing/PurchasingIndex.js';
import PurchasingImportForm from './Purchasing/PurchasingImportForm.js';
import PurchasingLocalForm from './Purchasing/PurchasingLocalForm.js';
import AllItemsInPort from './Purchasing/AllItemsInPort.js';
import AllItemsLocal from './Purchasing/AllItemsLocal.js';
import AllPurchaseRecord from './Purchasing/AllPurchaseRecord.js';

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
      <Route path="/purchasing/allItemsInPort" element={<AllItemsInPort />} />
      <Route path="/purchasing/allItemsLocal" element={<AllItemsLocal />} />
      <Route path="/purchasing/allPORecord" element={<AllPurchaseRecord />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
