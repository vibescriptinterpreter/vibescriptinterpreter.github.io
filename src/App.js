import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scanner from './components/Scanner/Scanner';
import { AuthProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

// pages
import PurchaseHistory from './pages/PurchaseHistory/PurchaseHistory';
import Auth from './pages/Auth/Auth';
import Scan from './pages/Scan/Scan';
import Account from './pages/Account/Account';
import Admin from './pages/Admin';

// global styles
import { GlobalStyle } from './styles';

import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/history" exact element={<PurchaseHistory />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<div>Not Found Page</div>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
