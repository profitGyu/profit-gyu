import { motion } from 'framer-motion';
import { Container } from './components/styles';
import Header from './components/Header';
import Contact from './components/Contact';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

import ScrollProgress from '@components/common/NProgress';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Resume = () => {
  return (
    <>
      <ScrollProgress />
      <Container as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <Header
          name="이득규"
          title="프론트엔드 개발자"
          summary="4년차 개발자로서 사용자 친화적이고 성능 최적화된 웹 애플리케이션을 개발하도록 노력하고 있습니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 팀과의 협업을 통해 더 나은 제품을 만들어내는 것을 목표로 합니다."
        />
        <Contact
          email="profitgyu@gmail.com"
          phone="010-2674-9825"
          github="github.com/profitGyu"
          blog="https://velog.io/@profitgyu"
        />
        <Skills
          frontend={["JavaScript", "TypeScript", "React", "Next.js", "Recoil", "zustand", "React-query", "Styled-components", "SCSS", "MUI"]}
          backend={["Python", "Django", "Flask"]}
          devops={["Docker", "AWS", "Firebase"]}
          database={["MariaDB", "Neo4j"]}
          collaboration={["Git", "GitHub", "Bitbucket", "Figma", "Insomnia", "Slack", "JIRA"]}
        />
        <WorkExperience
          experiences={[
            {
              company: "럽디",
              period: "2024.06 ~ ",
              position: "프론트엔드 개발자",
              projects: []
            },
            {
              company: "보드에프엔씨",
              period: "2023.02 - 2024.04",
              position: "프론트엔드 개발자",
              projects: [
                {
                  name: "원패브릭(OneFabric)",
                  period: "2023.03 - 2024.04",
                  role: "프론트엔드 개발자",
                  stack: ["TypeScript", "React", "SCSS", "react-query"],
                  achievements: [
                    "제품 목록 뷰 및 검색/필터 기능 구현",
                    "회원가입/인증 시스템 개발",
                    "결제 시스템 통합",
                    "Analytics 기능 구현",
                    "EC2/NGINX 기반 배포 환경 구축",
                    "성능 최적화를 통한 페이지 로딩 시간 40% 개선"
                  ]
                },
                {
                  name: "올패브릭(allFabric)",
                  period: "2023.10 - 2024.04",
                  role: "프론트엔드 개발자",
                  stack: ["Next.js 14", "React", "TypeScript", "React-query", "zustand", "styled-components"],
                  achievements: [
                    "SSR 기반 웹 쇼핑몰 구축",
                    "Atomic 디자인 시스템 도입으로 컴포넌트 재사용성 향상",
                    "react-query를 활용한 데이터 캐싱 및 상태 관리 최적화",
                    "반응형 디자인 구현으로 모바일 사용성 개선",
                    "JIRA를 활용한 애자일 프로젝트 관리 및 팀 협업 강화"
                  ]
                }
              ]
            }
          ]}
        />
        <Education
          items={[
            {
              name: "원티드 프론트엔드 프리온보딩 코스",
              period: "2022.05 - 2022.06",
              description: "React, TypeScript 기반의 실무 프로젝트 수행 및 코드 리뷰 진행"
            },
          ]}
        />
      </Container>
    </>
  );
};

export default Resume; 