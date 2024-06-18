import React from 'react';
import { useSelector } from 'react-redux';
import Home from './components/Home/home';
import DarkMode from './components/DarkMode/DarkMode';
import './App.css';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1 style={{ textAlign: 'center' , margin: '0rem', paddingTop: '1.5rem'}}>Batman Posters</h1>
      <DarkMode />
      <Home />
    </div>
  );
}

export default App;