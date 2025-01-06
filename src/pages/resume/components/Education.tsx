import { motion } from 'framer-motion';
import styled from 'styled-components';

interface EducationItem {
  name: string;
  period: string;
  description: string;
}

interface EducationProps {
  items: EducationItem[];
}

const Education = ({ items }: EducationProps) => {
  return (
    <Section as={motion.section} variants={sectionVariants}>
      <h2>Education</h2>
      <List>
        {items.map((item, index) => (
          <Item key={index}>
            <Period>{item.period}</Period>
            <Content>
              <Name>{item.name}</Name>
              <Description>
                {item.description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </Description>
            </Content>
          </Item>
        ))}
      </List>
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

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  margin-bottom: 1.5rem;
`;

const Period = styled.span`
  flex: 0 0 200px;
  color: #666;
`;

const Content = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.6;
  color: #444;
`;

export default Education; 