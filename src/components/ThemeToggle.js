import React from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import Switch from 'react-switch';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme === 'dark'}
      offColor="#767577"
      onColor="#8a85ff"
      checkedIcon={
        <FaMoon
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            paddingLeft: '5px',
            color: 'orange',
          }}
        />
      }
      uncheckedIcon={
        <FaSun
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            paddingLeft: '7px',
            color: 'yellow',
          }}
        />
      }
    />
  );
};

export default ThemeToggle;