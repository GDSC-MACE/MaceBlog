import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Dash from './Components/Dash.jsx';
import SignUp from './Components/SignUp.jsx';
import TopBlogs from './Components/TopBlogs.jsx';

const root = createRoot(document.getElementById('root')); // Create root element

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nav" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/admin" element={<Dash />} />
        <Route path="/top" element={<TopBlogs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
