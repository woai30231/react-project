import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './Contact';
import Phone from './Phone';
import Email from './Email';
import Help from './Help';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Contact />}/>
      <Route path="/contact" element={<Contact />} >
        <Route index element={<Email />} />
        <Route path="phone" element={<Phone />} />
        <Route path="email" element={<Email />} />
      </Route>
      <Route path="/help" element={<Help />} />
      </Route>
      
    </Routes>
  </Router>
);

export default AppRoutes;