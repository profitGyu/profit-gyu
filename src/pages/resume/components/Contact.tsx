import { motion } from 'framer-motion';
import { Section, ListItem, sectionVariants } from './styles';

interface ContactProps {
  email: string;
  phone: string;
  github: string;
  blog?: string;
}

const Contact = ({ email, phone, github, blog }: ContactProps) => (
  <Section
    as={motion.section}
    variants={sectionVariants}
  >
    <h2>연락처</h2>
    <ul>
      <ListItem
        as={motion.li}
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <strong>이메일</strong>: <a href="mailto:profitgyu@gmail.com">{email}</a>
      </ListItem>
      <ListItem
        as={motion.li}
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <strong>전화</strong>: {phone}
      </ListItem>
      <ListItem
        as={motion.li}
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <strong>GitHub</strong>: <a href="https://github.com/profitGyu">{github}</a>
      </ListItem>
      {blog && (
        <ListItem
          as={motion.li}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <strong>Blog</strong>: <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a>
        </ListItem>
      )}
    </ul>
  </Section>
);

export default Contact; 