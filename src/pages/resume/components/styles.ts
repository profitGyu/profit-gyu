import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 960px;
  padding: 4rem 2rem;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  letter-spacing: -0.5px;
`;

export const Section = styled.section`
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    letter-spacing: -0.7px;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  a {
    font-weight: 500;
    color: #06c;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ListItem = styled.li`
  padding: 0.5rem 0;
  font-size: 1.1rem;
  color: #444;
  letter-spacing: -0.5px;
  transition: all 0.2s ease;

  strong {
    font-weight: 600;
    color: #222;
  }
`;

export const SubSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #222;
    letter-spacing: -0.5px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
