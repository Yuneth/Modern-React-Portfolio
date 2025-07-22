import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }

  h1, h2, h3, h4 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  section {
    padding: 5rem 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.primary};

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.secondary};
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }

    .section-title {
      font-size: 2rem;
    }
  }
`;