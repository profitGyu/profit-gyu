import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Experience {
  company: string;
  period: string;
  position: string;
  projects: Project[];
}

interface Project {
  name: string;
  period: string;
  role: string;
  stack: string[];
  achievements: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <Section as={motion.section} variants={sectionVariants}>
      <h2>경력사항</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index}>
          <CompanyInfo>
            <CompanyName>{exp.company}</CompanyName>
            <Period>{exp.period}</Period>
            <Position>{exp.position}</Position>
          </CompanyInfo>
          {exp.projects.map((project, pIndex) => (
            <ProjectWrapper key={pIndex}>
              <ProjectHeader>
                <ProjectName>{project.name}</ProjectName>
                <ProjectPeriod>{project.period}</ProjectPeriod>
              </ProjectHeader>
              <Role>{project.role}</Role>
              <Stack>
                {project.stack.map((tech, tIndex) => (
                  <TechItem key={tIndex}>{tech}</TechItem>
                ))}
              </Stack>
              <Achievements>
                {project.achievements.map((achievement, aIndex) => (
                  <Achievement key={aIndex}>{achievement}</Achievement>
                ))}
              </Achievements>
            </ProjectWrapper>
          ))}
        </ExperienceItem>
      ))}
    </Section>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
`;

const CompanyInfo = styled.div`
  margin-bottom: 1rem;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const Period = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const Position = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const ProjectWrapper = styled.div`
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  border-left: 2px solid #eee;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ProjectName = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: #444;
`;

const ProjectPeriod = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const Role = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #555;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechItem = styled.span`
  padding: 0.2rem 0.5rem;
  font-size: 0.85rem;
  color: #666;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const Achievements = styled.ul`
  padding-left: 1.2rem;
  margin: 0;
`;

const Achievement = styled.li`
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
  color: #444;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default WorkExperience; 