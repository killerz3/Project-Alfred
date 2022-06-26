import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './pages/About'
import Contact from './pages/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/dashboard/settings';


import Login from './pages/auth/login';
import NotFound from './pages/404';
import Signup from './pages/auth/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Login" element={< Login/>} />
      <Route path="/signup" element={< Signup/>} />
      <Route path="/dashboard/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//FireBase backend config

