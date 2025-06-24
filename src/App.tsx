import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Frens from './pages/Frens';
import './App.css';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/frens" element={<Frens />} />
        </Routes>
      </BrowserRouter>
    </TonConnectUIProvider>
  );
}

export default App;
