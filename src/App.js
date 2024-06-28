import React from 'react';
import './App.css';
import PhotoGallery from './PhotoGallery';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/photo/:id" element={<PhotoGallery />} />
        <Route path="/" element={<PhotoGallery />} />
      </Routes>
    </div>
  );
}

export default App;
