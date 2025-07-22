import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.primary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <NavbarContainer>
      <div className="container">
        <NavContent>
          <Logo href="#">YP</Logo>
          <NavLinks>
            <NavLink>
              <a href="#home">Home</a>
            </NavLink>
            <NavLink>
              <a href="#about">About</a>
            </NavLink>
            <NavLink>
              <a href="#skills">Skills</a>
            </NavLink>
            <NavLink>
              <a href="#projects">Projects</a>
            </NavLink>
            <NavLink>
              <a href="#resume">Resume</a>
            </NavLink>
            <NavLink>
              <a href="#contact">Contact</a>
            </NavLink>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </NavLinks>
        </NavContent>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;