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
import ReadOnlyImport from './Purchasing/ReadOnlyImport.js';
import ReadOnlyLocal from './Purchasing/ReadOnlyLocal.js';
import SalesIndex from './Sales/SalesIndex.js';
import SalesNewSO from './Sales/SalesNewSO.js';
import SalesNewSPPB from './Sales/SalesNewSPPB.js';
import SalesNewProfit from './Sales/SalesNewProfit.js';
import SettingIndex from './Setting/SettingIndex.js';

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
      <Route path="/purchasing/readOnlyImport" element={<ReadOnlyImport />} />
      <Route path="/purchasing/readOnlyLocal" element={<ReadOnlyLocal />} />
      <Route path="/sales/salesIndex" element={<SalesIndex />} />
      <Route path="/sales/salesNewSO" element={<SalesNewSO />} />
      <Route path="/sales/salesNewSPPB" element={<SalesNewSPPB />} />
      <Route path="/sales/salesNewProfit" element={<SalesNewProfit />} />
      <Route path="/sales/settingIndex" element={<SettingIndex />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
