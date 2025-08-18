import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Import your project images
import project1Photo from "../assets/images/project1.png";
import project1_1Photo from "../assets/images/project1-1.png";
import project1_2Photo from "../assets/images/project1-2.png";
import project1_3Photo from "../assets/images/project1-3.png";
import project1_4Photo from "../assets/images/project1-4.png";
import project1_5Photo from "../assets/images/project1-5.png";
import project1_6Photo from "../assets/images/project1-6.png";
import project1_7Photo from "../assets/images/project1-7.png";
import project1_8Photo from "../assets/images/project1-8.png";
import project1_9Photo from "../assets/images/project1-9.png";
import project1_10Photo from "../assets/images/project1-10.png";

import project3Photo from "../assets/images/project3.PNG";
import project3_1Photo from "../assets/images/project3-1.PNG";

import project4Photo from "../assets/images/project4.PNG";
import project4_1Photo from "../assets/images/project4-1.png";

import project5Photo from "../assets/images/project5.png";

import project6Photo from "../assets/images/project6.png";
import project6_1Photo from "../assets/images/project6-1.png";
import project6_2Photo from "../assets/images/project6-2.png";
import project6_3Photo from "../assets/images/project6-3.png";
import project6_4Photo from "../assets/images/project6-4.png";
import project6_5Photo from "../assets/images/project6-5.png";
import project6_6Photo from "../assets/images/project6-6.png";
import project6_7Photo from "../assets/images/project6-7.png";
import project6_8Photo from "../assets/images/project6-8.png";
import project6_9Photo from "../assets/images/project6-9.png";
import project6_10Photo from "../assets/images/project6-10.png";
import project6_11Photo from "../assets/images/project6-11.png";
import project6_12Photo from "../assets/images/project6-12.png";
import project6_13Photo from "../assets/images/project6-13.png";
import project6_14Photo from "../assets/images/project6-14.png";
import project6_15Photo from "../assets/images/project6-15.png";
import project6_16Photo from "../assets/images/project6-16.png";
import project6_17Photo from "../assets/images/project6-17.png";
import project6_18Photo from "../assets/images/project6-18.png";

import project7Photo from "../assets/images/project7.jpg";
import project7_1Photo from "../assets/images/project7-1.jpg";
import project7_2Photo from "../assets/images/project7-2.jpg";
import project7_3Photo from "../assets/images/project7-3.jpg";
import project7_4Photo from "../assets/images/project7-4.jpg";
import project7_5Photo from "../assets/images/project7-5.jpg";
import project7_6Photo from "../assets/images/project7-6.jpg";
import project7_7Photo from "../assets/images/project7-7.jpg";
import project7_8Photo from "../assets/images/project7-8.jpg";
import project7_9Photo from "../assets/images/project7-9.jpg";
import project7_10Photo from "../assets/images/project7-10.jpg";
import project7_11Photo from "../assets/images/project7-11.jpg";

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
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-line;
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
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const SeeMoreButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  align-self: flex-start;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
`;

const ModalContent = styled.div`
  padding: 2rem;
`;

const ModalHeader = styled.div`
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const ModalImage = styled.div`
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 2rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ModalSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 0.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

// Screenshot Gallery Styles
const ScreenshotGallery = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 3px;
  }
`;

const ScreenshotItem = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  scroll-snap-align: start;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 150px;
  }
`;

const FullscreenViewer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }
`;

const CloseFullscreenButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const projects = [
    {
      title: "Asclepius Plastic Surgery Website",
      description:
        "A modern, responsive website for Asclepius plastic surgery practice, showcasing services, before/after gallery, patient testimonials, and practice information.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      frontendLink: "https://github.com/Yuneth/Asclepius-Plastic-Surgeon",
      image: project7Photo,
      screenshots: [
        project7Photo,
        project7_1Photo,
        project7_2Photo,
        project7_3Photo,
        project7_4Photo,
        project7_5Photo,
        project7_6Photo,
        project7_7Photo,
        project7_8Photo,
        project7_9Photo,
        project7_10Photo,
        project7_11Photo,
      ],
      features: [
        "Responsive design for all devices",
        "Interactive before/after gallery",
        "Patient testimonial section",
        "Service descriptions with pricing",
        "Contact form with validation",
      ],
      role: "UI Designer & Frontend Developer",
      challenges:
        "Creating an elegant design that maintains professionalism while being inviting to potential patients",
      solutions:
        "Implemented a clean, modern design with subtle animations to enhance user experience",
    },
    {
      title: "Microfinance Credit Scoring & Lending Portal",
      description:
        "A secure full-stack system for loan scoring, customer onboarding, and admin-controlled credit evaluation using JWT-based access.",
      techStack: ["Spring Boot", "React.js", "MySQL", "JWT", "Material UI"],
      backendLink: "https://github.com/Yuneth/FundFlow-Backend",
      frontendLink: "https://github.com/Yuneth/FundFlow-Frontend",
      image: project1_1Photo,
      screenshots: [
        project1Photo,
        project1_1Photo,
        project1_2Photo,
        project1_3Photo,
        project1_4Photo,
        project1_5Photo,
        project1_6Photo,
        project1_7Photo,
        project1_8Photo,
        project1_9Photo,
        project1_10Photo,
      ],
      features: [
        "Loan application processing",
        "Credit scoring algorithm",
        "Admin dashboard for loan management",
        "JWT authentication",
        "Customer profile management",
      ],
      role: "Full Stack Developer",
      challenges: "Implementing a fair credit scoring algorithm",
      solutions:
        "Developed a weighted scoring system based on multiple financial factors",
    },
    {
      title: "Cleaning Service Management System",
      description: [
        `Booking and operations platform for cleaning services with JWT auth, dashboard metrics, and form validation. 
        Project Architecture: Layered Architecture.`,
      ],
      techStack: [
        "Spring Boot",
        "React.js",
        "MySQL",
        "JWT",
        "Material UI",
        "Formik & Yup",
      ],
      backendLink: "https://github.com/Yuneth/CSMS-Backend",
      frontendLink: "https://github.com/Yuneth/CSMS-Frontend",
      image: project1Photo,
      screenshots: [project1Photo, project1_1Photo, project1_2Photo],
      features: [
        "Secure user registration",
        "Login with JWT authentication",
        "Book and manage cleaning service appointments",
        "Admin panel to view, update, and delete user bookings",
        "Customer profile management",
      ],
      role: "Full Stack Developer",
      challenges: "#",
      solutions: "#",
    },
    {
      title: "Realtime Chatroom Application",
      description:
        "Instant messaging app with WebSocket for real-time bidirectional communication and live updates.",
      techStack: ["React.js", "Spring Boot", "WebSocket"],
      backendLink: "https://github.com/Yuneth/ChatroomApp_Backend",
      frontendLink: "https://github.com/Yuneth/ChatroomApp_Frontend",
      image: project3Photo,
      screenshots: [project3Photo, project3_1Photo],
      features: [
        "Real-time messaging",
        "User presence indicators",
        "Message history",
        "Typing indicators",
        "Multiple chat rooms",
      ],
      role: "Full Stack Developer",
      challenges: "Implementing real-time updates without page refresh",
      solutions: "Utilized WebSocket protocol for bidirectional communication",
    },
    {
      title: "Point of Sale System (POS)",
      description:
        "Implemented secure authentication using Spring Security and JWT. Features include inventory management, category-based item organization, and sales processing.",
      techStack: ["React.js", "Spring Boot", "MySQL", "JWT"],
      backendLink: "https://github.com/Yuneth/POS-Backend",
      frontendLink: "https://github.com/Yuneth/POS-Frontend",
      image: project4Photo,
      screenshots: [project4Photo, project4_1Photo],
      features: [
        "Inventory management",
        "Sales processing",
        "Category-based organization",
        "Secure authentication",
        "Reporting dashboard",
      ],
      role: "Full Stack Developer",
      challenges: "Handling concurrent inventory updates",
      solutions: "Implemented optimistic locking for inventory management",
    },
    {
      title: "React Portfolio - Software Engineer",
      description:
        "A modern, responsive portfolio website built with React.js featuring dark/light mode toggle, animated components, and a clean UI to showcase your skills, projects, and professional journey as a Software Engineering graduate.",
      techStack: ["HTML5", "CSS3", "JavaScript", "React.js"],
      frontendLink: "https://github.com/Yuneth/Modern-React-Portfolio",
      image: project6Photo,
      screenshots: [
        project6Photo,
        project6_2Photo,
        project6_3Photo,
        project6_4Photo,
        project6_5Photo,
        project6_6Photo,
        project6_7Photo,
        project6_8Photo,
        project6_9Photo,
        project6_10Photo,
        project6_11Photo,
        project6_12Photo,
        project6_1Photo,
        project6_13Photo,
        project6_14Photo,
        project6_15Photo,
        project6_16Photo,
        project6_17Photo,
        project6_18Photo,
      ],
      features: [
        "Dark/Light Mode Toggle - User preference theme switching",
        "Animated UI Elements - Framer Motion animations throughout",
        "Responsive Design - Fully mobile-friendly layout",
        "Interactive Components - Hover effects and smooth transitions",
        "Project Showcase - Detailed project cards with tech stack and links",
        "Skills Visualization - Progress bars for technical competencies",
        "Timeline Section - Professional/education journey visualization",
        "Contact Form - Functional contact section",
      ],
      role: "Full Stack Developer",
      challenges: "Creating a visually appealing yet performant portfolio",
      solutions: "Optimized animations and implemented lazy loading",
    },
    {
      title: "Doctor Appointment System",
      description:
        "A web-based application designed to facilitate the scheduling and management of doctor appointments. The system allows patients to book appointments with doctors and manage their schedules efficiently.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "phpMyAdmin"],
      projectLink: "https://github.com/Yuneth/Doctor_Appointment_System",
      image: project5Photo,
      screenshots: [project5Photo],
      features: [
        "Doctor appointment scheduling",
        "Patient registration",
        "Appointment management",
        "Doctor availability calendar",
        "Admin dashboard",
      ],
      role: "Full Stack Developer",
      challenges: "Managing appointment conflicts",
      solutions: "Implemented time slot validation and conflict detection",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.screenshots.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

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
                <SeeMoreButton onClick={() => openModal(project)}>
                  See More
                </SeeMoreButton>
                <ProjectLinks>
                  {project.backendLink && (
                    <ProjectLink
                      href={project.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Backend
                    </ProjectLink>
                  )}
                  {project.frontendLink && (
                    <ProjectLink
                      href={project.frontendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Frontend
                    </ProjectLink>
                  )}
                  {project.demoLink && (
                    <ProjectLink
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </ProjectLink>
                  )}
                  {project.projectLink && (
                    <ProjectLink
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Project
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        {/* Project Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <ModalContainer
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={closeModal}>
                  <FaTimes />
                </CloseButton>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>{selectedProject.title}</ModalTitle>
                  </ModalHeader>

                  <ModalImage>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                    />
                  </ModalImage>

                  {/* Screenshot Gallery */}
                  {selectedProject.screenshots &&
                    selectedProject.screenshots.length > 0 && (
                      <ModalSection>
                        <SectionTitle>Screenshots</SectionTitle>
                        <ScreenshotGallery>
                          {selectedProject.screenshots.map(
                            (screenshot, index) => (
                              <ScreenshotItem
                                key={index}
                                onClick={() => openImageViewer(index)}
                              >
                                <img
                                  src={screenshot}
                                  alt={`${selectedProject.title} screenshot ${
                                    index + 1
                                  }`}
                                />
                              </ScreenshotItem>
                            )
                          )}
                        </ScreenshotGallery>
                      </ModalSection>
                    )}

                  <ModalSection>
                    <SectionTitle>Project Description</SectionTitle>
                    <p>{selectedProject.description}</p>
                  </ModalSection>

                  <ModalSection>
                    <SectionTitle>Key Features</SectionTitle>
                    <FeatureList>
                      {selectedProject.features.map((feature, index) => (
                        <FeatureItem key={index}>{feature}</FeatureItem>
                      ))}
                    </FeatureList>
                  </ModalSection>

                  <ModalSection>
                    <SectionTitle>Technologies Used</SectionTitle>
                    <TechStack>
                      {selectedProject.techStack.map((tech, i) => (
                        <TechItem key={i}>{tech}</TechItem>
                      ))}
                    </TechStack>
                  </ModalSection>

                  <ModalSection>
                    <SectionTitle>My Role</SectionTitle>
                    <p>{selectedProject.role}</p>
                  </ModalSection>

                  {selectedProject.challenges && selectedProject.solutions && (
                    <ModalSection>
                      <SectionTitle>Challenges & Solutions</SectionTitle>
                      <p>
                        <strong>Challenges:</strong>{" "}
                        {selectedProject.challenges}
                      </p>
                      <p>
                        <strong>Solutions:</strong> {selectedProject.solutions}
                      </p>
                    </ModalSection>
                  )}

                  <ModalFooter>
                    {selectedProject.backendLink && (
                      <ProjectLink
                        href={selectedProject.backendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> Backend Code
                      </ProjectLink>
                    )}
                    {selectedProject.frontendLink && (
                      <ProjectLink
                        href={selectedProject.frontendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> Frontend Code
                      </ProjectLink>
                    )}
                    {selectedProject.demoLink && (
                      <ProjectLink
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </ProjectLink>
                    )}
                    {selectedProject.projectLink && (
                      <ProjectLink
                        href={selectedProject.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> Project Code
                      </ProjectLink>
                    )}
                  </ModalFooter>
                </ModalContent>
              </ModalContainer>
            </ModalOverlay>
          )}
        </AnimatePresence>

        {/* Fullscreen Image Viewer */}
        <AnimatePresence>
          {isViewerOpen && selectedProject && (
            <FullscreenViewer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CloseFullscreenButton onClick={closeImageViewer}>
                <FaTimes />
              </CloseFullscreenButton>
              <NavigationButton className="prev" onClick={goToPrevImage}>
                <FaChevronLeft />
              </NavigationButton>
              <FullscreenImage
                src={selectedProject.screenshots[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${
                  currentImageIndex + 1
                }`}
              />
              <NavigationButton className="next" onClick={goToNextImage}>
                <FaChevronRight />
              </NavigationButton>
            </FullscreenViewer>
          )}
        </AnimatePresence>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
