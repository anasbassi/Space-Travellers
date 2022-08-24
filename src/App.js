import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
