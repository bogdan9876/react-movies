import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../themeTogle';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './DarkMode.css';

const DarkMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        checked={darkMode}
        onChange={handleToggle}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun className="sun" />
        <Moon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;