import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.cardBg};
  padding: 3rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <div className="container">
        <FooterContent>
          <SocialLinks>
            <SocialLink href="https://github.com/Yuneth" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/yunethperera" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
          
          <ContactInfo>
            <ContactItem href="mailto:yunethperera987@gmail.com">
              <HiOutlineMail /> yunethperera987@gmail.com
            </ContactItem>
            <ContactItem href="tel:+94767866584">
              <BsFillTelephoneFill /> +94 (76) 7 866 584
            </ContactItem>
          </ContactInfo>
          
          <Copyright>
            &copy; {new Date().getFullYear()} YunethPerera. All rights reserved.
          </Copyright>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;