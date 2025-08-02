import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.section`
  background: ${({ theme }) => theme.body};
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  margin-top: 0.3rem;
`;

const ContactText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  p, a {
    color: ${({ theme }) => theme.text};
    opacity: 0.9;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <ContactContent>
          <ContactInfo>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Information
            </motion.h3>
            
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <a href="mailto:youremail@example.com">yunethmail@example.com</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <h4>Phone</h4>
                <a href="tel:+1234567890">+94 (234) 567-890</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <h4>Location</h4>
                <p>Panadura, Sri Lanka</p>
              </ContactText>
            </ContactItem>
          </ContactInfo>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm>
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput type="text" id="name" name="name" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Your Email</FormLabel>
                <FormInput type="email" id="email" name="email" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput type="text" id="subject" name="subject" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea id="message" name="message" required />
              </FormGroup>
              
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;