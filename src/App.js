import React from 'react';
import { useSelector } from 'react-redux';
import Home from './components/Home/home';
import DarkMode from './components/DarkMode/DarkMode';
import './App.css';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1 style={{ textAlign: 'center' }}>Batman Posters</h1>
      <DarkMode />
      <Home />
    </div>
  );
}

export default App;