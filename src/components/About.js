import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import yourPhoto from '../assets/images/p1.jpg'; // Replace with your photo

const AboutContainer = styled.section`
  background: ${({ theme }) => theme.body};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  position: relative;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.primary};
    border-radius: 10px;
    z-index: -1;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      top: -10px;
      left: -10px;
    }
  }

  &:hover::before {
    top: -10px;
    left: -10px;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const Timeline = styled.div`
  margin-top: 2rem;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.primary};
  }

  &::after {
    content: '';
    position: absolute;
    left: -8px;
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.secondary};
  }
`;

const TimelineDate = styled.span`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <AboutContent>
          <AboutImage>
            <motion.img
              src={yourPhoto}
              alt="Your Name"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AboutImage>
          <AboutText>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Who am I?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm a passionate Software Engineering graduate with expertise in full-stack development. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities.
            </motion.p>
            
            <Timeline>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{ marginBottom: '1.5rem' }}
              >
                My Journey
              </motion.h3>
              
              <TimelineItem>
                <TimelineDate>2023 - 2024</TimelineDate>
                <TimelineTitle>Comprehensive Master Java Developer </TimelineTitle>
                <TimelineDescription>
                  Institute of Software Engineering (IJSE)
                </TimelineDescription>
              </TimelineItem>

              <TimelineItem>
                <TimelineDate>2020 - 2023</TimelineDate>
                <TimelineTitle>BEng (Hons) in Software Engineering</TimelineTitle>
                <TimelineDescription>
                  Graduated with honors from London Metropolitan University, specializing in full-stack development.
                </TimelineDescription>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineDate>2020 - 2022</TimelineDate>
                <TimelineTitle>Pearson BTEC Higher National Diploma</TimelineTitle>
                <TimelineDescription>
                  Completed HND in Computing with distinction, focusing on software development.
                </TimelineDescription>
              </TimelineItem>
              
            </Timeline>
          </AboutText>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;