import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './index.css';

import HomePage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='tech-task-twitts'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/tweets' element={<TweetsPage />}/>
        <Route path="*" element={<Navigate to="/" replace={true}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);