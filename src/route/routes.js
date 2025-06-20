import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = React.lazy(() => import('../App'));
const Contact = React.lazy(() => import('../views/Contact'));
const Phone = React.lazy(() => import('../views/Phone'));
const Email = React.lazy(() => import('../views/Email'));
const Help = React.lazy(() => import('../views/Help'));
const Sketest = React.lazy(() => import('../views/Sketest'));

const AppRoutes = () => (
  <Router>
    <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Contact />}/>
          
            <Route path="/sketest" element={<Sketest />} />
            <Route path="/contact" element={<Contact />} >
              <Route index element={<Email />} />
              <Route path="phone" element={<Phone />} />
              <Route path="email" element={<Email />} />
            
            </Route>

            <Route path="/help" element={<Help />} />
          </Route>
      
        </Routes>
    </React.Suspense>
  </Router>
);

export default AppRoutes;