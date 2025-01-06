import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sectionVariants } from './styles';
import { HeaderProps } from '../types';

const HeaderWrapper = styled.header`
  margin-bottom: 4rem;
  
  h1 {
    margin-bottom: 1.5rem;
    font-size: 2.8rem;
    font-weight: 700;
    color: #000;
    letter-spacing: -1.5px;
  }

  p {
    max-width: 800px;
    font-size: 1.2rem;
    line-height: 1.7;
    color: #666;
    letter-spacing: -0.7px;
  }
`;

const Header = ({ name, title, summary }: HeaderProps) => (
  <HeaderWrapper
    as={motion.header}
    variants={sectionVariants}
  >
    <h1>프론트엔드 개발자 이득규</h1>
    <p>
      4년차 개발자로서 사용자 친화적이고 성능 최적화된 웹 애플리케이션을 개발하도록 노력하고 있습니다.
      주어진 요구 사항에 따라 유연하게 대응할 수 있는 능력을 보유하고 협업 환경에서의 커뮤니케이션과 문제 해결 능력을 바탕으로 팀의 목표 달성에 기여할 수 있습니다.
    </p>
  </HeaderWrapper>
);

export default Header; 