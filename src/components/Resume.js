import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

const ResumeContainer = styled.section`
  background: ${({ theme }) => theme.cardBg};
  text-align: center;
`;

const ResumeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ResumeText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Resume = () => {
  return (
    <ResumeContainer id="resume">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <ResumeContent>
          <ResumeText>
            Here's a summary of my education, skills, and professional experience. Feel free to download
            my full resume for more details.
          </ResumeText>
          <DownloadButton
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download="Yuneth Perera_CV.pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload /> Download Resume
          </DownloadButton>
        </ResumeContent>
      </div>
    </ResumeContainer>
  );
};

export default Resume;