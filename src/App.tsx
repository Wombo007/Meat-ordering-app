import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GetStarted } from './pages/GetStarted';
import { YourBox } from './pages/YourBox';
import { DeliveryFrequency } from './pages/DeliveryFrequency';
import { YourItems } from './pages/YourItems';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/your-box" element={<YourBox />} />
        <Route path="/delivery-frequency" element={<DeliveryFrequency />} />
        <Route path="/your-items" element={<YourItems />} />
      </Routes>
    </Router>
  );
}

export default App;