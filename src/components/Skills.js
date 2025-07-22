import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.section`
  background: ${({ theme }) => theme.cardBg};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SkillName = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div`
  height: 5px;
  background: ${({ theme }) => theme.body};
  border-radius: 5px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const SkillLevelBar = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 5px;
`;

const Skills = () => {
  const skills = [
    { 
      name: 'Java', 
      icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', 
      level: 90 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', 
      level: 85 
    },
    { 
      name: 'C#', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', 
      level: 80 
    },
    { 
      name: 'PHP', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', 
      level: 75 
    },
    { 
      name: 'Python', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', 
      level: 75 
    },
    { 
      name: 'jQuery', 
      icon: 'https://www.vectorlogo.zone/logos/jquery/jquery-ar21.svg', 
      level: 70 
    },
    { 
      name: 'HTML5', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', 
      level: 90 
    },
    { 
      name: 'CSS3', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', 
      level: 85 
    },
    { 
      name: 'React', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', 
      level: 80 
    },
    { 
      name: 'Spring Boot', 
      icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg', 
      level: 85 
    },
    { 
      name: 'Hibernate', 
      icon: 'https://hibernate.org/images/hibernate-logo.svg', 
      level: 75 
    },
    { 
      name: 'MySQL', 
      icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', 
      level: 80 
    },
    { 
      name: 'Visual Studio', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', 
      level: 70 
    },
    { 
      name: 'VS Code', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', 
      level: 90 
    },
    { 
      name: 'IntelliJ IDEA', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', 
      level: 85 
    },
    { 
      name: 'NetBeans', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg', 
      level: 70 
    },
    { 
      name: 'GitHub', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', 
      level: 80 
    },
  ];

  return (
    <SkillsContainer id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillIcon>
                <img src={skill.icon} alt={skill.name} />
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillLevel>
                <SkillLevelBar style={{ width: `${skill.level}%` }} />
              </SkillLevel>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </SkillsContainer>
  );
};

export default Skills;