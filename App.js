import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/index';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/index" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
