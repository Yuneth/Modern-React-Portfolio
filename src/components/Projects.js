import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1Photo from '../assets/images/project1.png';
import project3Photo from '../assets/images/project3.PNG';

const ProjectsContainer = styled.section`
  background: ${({ theme }) => theme.body};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    ${ProjectCard}:hover & {
      transform: scale(1.1);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Microfinance Credit Scoring & Lending Portal',
      description: 'A secure full-stack system for loan scoring, customer onboarding, and admin-controlled credit evaluation using JWT-based access.',
      techStack: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Material UI'],
      backendLink: 'https://github.com/Yuneth/FundFlow-Backend',
      frontendLink: 'https://github.com/Yuneth/FundFlow-Frontend',
      demoLink: 'https://yourecommerceapp.com',
      image: project1Photo,
    },
    {
      title: 'Cleaning Service Management System',
      description: 'Booking and operations platform for cleaning services with JWT auth, dashboard metrics, and form validation.',
      techStack: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Material UI', 'Formik & Yup'],
      backendLink: 'https://github.com/Yuneth/CSMS-Backend',
      frontendLink: 'https://github.com/Yuneth/CSMS-Frontend',
      demoLink: 'https://yourtaskapp.com',
      image: project1Photo,
    },
    {
      title: 'Realtime Chatroom Application',
      description: 'Instant messaging app with WebSocket for real-time bidirectional communication and live updates.',
      techStack: ['React.js', 'Spring Boot', 'WebSocket'],
      backendLink: 'https://github.com/Yuneth/ChatroomApp_Backend',
      frontendLink: 'https://github.com/Yuneth/ChatroomApp_Frontend',
      demoLink: 'https://yourportfolio.com',
      image: project3Photo,
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, i) => (
                    <TechItem key={i}>{tech}</TechItem>
                  ))}
                </TechStack>
                <ProjectLinks>
                  {project.backendLink && (
                    <ProjectLink href={project.backendLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Backend
                    </ProjectLink>
                  )}
                  {project.frontendLink && (
                    <ProjectLink href={project.frontendLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Frontend
                    </ProjectLink>
                  )}
                  {project.demoLink && (
                    <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;