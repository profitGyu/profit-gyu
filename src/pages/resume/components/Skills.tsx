import { motion } from 'framer-motion';
import styled from 'styled-components';

interface SkillsProps {
  frontend: string[];
  backend: string[];
  devops: string[];
  database: string[];
  collaboration: string[];
}

const Skills = ({ frontend, backend, devops, database, collaboration }: SkillsProps) => (
  <Section as={motion.section} variants={sectionVariants}>
    <h2>기술 스택</h2>
    <SkillsGrid>
      <SkillCategory>
        <h3>Frontend</h3>
        <SkillList>
          {frontend.map((skill, index) => (
            <SkillItem
              key={index}
              as={motion.li}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </SkillItem>
          ))}
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <h3>Backend</h3>
        <SkillList>
          {backend.map((skill, index) => (
            <SkillItem
              key={index}
              as={motion.li}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </SkillItem>
          ))}
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <h3>DevOps</h3>
        <SkillList>
          {devops.map((skill, index) => (
            <SkillItem
              key={index}
              as={motion.li}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </SkillItem>
          ))}
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <h3>Database</h3>
        <SkillList>
          {database.map((skill, index) => (
            <SkillItem
              key={index}
              as={motion.li}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </SkillItem>
          ))}
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <h3>Collaboration</h3>
        <SkillList>
          {collaboration.map((skill, index) => (
            <SkillItem
              key={index}
              as={motion.li}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </SkillItem>
          ))}
        </SkillList>
      </SkillCategory>
    </SkillsGrid>
  </Section>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (width >= 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCategory = styled.div`
  h3 {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    color: #333;
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SkillItem = styled.li`
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  color: #444;
  background-color: #f5f5f5;
  border: 1px solid #eee;
  border-radius: 20px;
  
  &:hover {
    background-color: #e9e9e9;
  }
`;

export default Skills; 