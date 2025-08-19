import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
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
  text-decoration: none;
  z-index: 1001;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.cardBg};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;

const NavLink = styled.li`
  a {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
    text-decoration: none;
    font-size: 1.1rem;

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

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <div className="container">
        <NavContent>
          <Logo href="#" onClick={closeMenu}>YP</Logo>
          
          <MobileMenuButton onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>

          <NavLinks isOpen={isOpen}>
            <NavLink>
              <a href="#home" onClick={closeMenu}>Home</a>
            </NavLink>
            <NavLink>
              <a href="#about" onClick={closeMenu}>About</a>
            </NavLink>
            <NavLink>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </NavLink>
            <NavLink>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </NavLink>
            <NavLink>
              <a href="#resume" onClick={closeMenu}>Resume</a>
            </NavLink>
            <NavLink>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </NavLink>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </NavLinks>
        </NavContent>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;