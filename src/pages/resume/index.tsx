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
              projects: [
                {
                  name: "달고양이 파즈 앱웹",
                  period: "2024.12 ~ 현재",
                  role: "프론트엔드 개발자",
                  stack: ["React", "TypeScript", "Vite", "React-query", "Flutter-webview", "Styled-components", "react-i18next", 'Framer-motion'],
                  achievements: [
                    "도메인별 컴포넌트 분리를 통한 효율적인 코드 구조화",
                    "아이디어, 화면 디자인 기획, 프로토 타입 제작",
                    "아키택처, react-query query-key 개선",
                    "다국어 처리 react-i18next 적용"
                  ]
                },
                {
                  name: "내담자 타로 페이지",
                  period: "2024.12 ~ 현재",
                  role: "프론트엔드 개발자",
                  stack: ["React", "TypeScript", "Vite", "React-query", "Styled-components"],
                  achievements: [
                    "개인화된 OTP 기반 일회성 링크 시스템 구현",
                    "Cypress를 활용한 E2E 테스트 구현"
                  ]
                },
                {
                  name: "내편 웹앱",
                  period: "2024.07 ~ 2024.12",
                  role: "프론트엔드 개발자",
                  stack: ["React", "Next.js 14", "TypeScript", "SCSS", "React-query", "Flutter-webview", "Styled-components"],
                  achievements: [
                    "Next.js 13에서 14로 업그레이드",
                    "TanStack Query v5 마이그레이션",
                    "상태관리 라이브러리 Recoil에서 Zustand로 전환",
                    "Nginx + PM2 기반 웹 서버 구축",
                    "Flutter-webview 기반 안드로이드 앱 배포"
                  ]
                },
                {
                  name: "내편 어드민",
                  period: "2024.07 ~ 2024.12",
                  role: "프론트엔드 개발자",
                  stack: ["React", "TypeScript", "MUI"],
                  achievements: [
                    "사용자 데이터 분석 대시보드 구현",
                    "제품 승인/관리 시스템 구현",
                    "서비스 상품 관리 기능 및 미리보기 구현",
                    "운영 효율을 높이기 위한 배치 처리 기능 개발"
                  ]
                }
              ]
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
            },
            {
              company: "인아웃",
              period: "2022.08 - 2022.11",
              position: "프론트엔드 개발자",
              projects: [
                {
                  name: "인아웃 앱 개선",
                  period: "2022.08 - 2022.11",
                  role: "프론트엔드 개발자",
                  stack: ["React", "TypeScript", "React-Native WebView", "React-query", "SQLite"],
                  achievements: [
                    "생산성을 높이기 위한 아키텍처 설계 및 리팩토링, 컨벤션 정립",
                    "디자인 일관성과 생산성을 높이기 위한 디자인 시스템 개선",
                    "react-query, SQLite를 활용한 데이터 처리 개선",
                    "사용자 편의성 개선을 위한 메인, 소통 리뉴얼, 운동, 캘린더, 모아보기 기능 추가"
                  ]
                }
              ]
            },
            {
              company: "모빌리티인사이트",
              period: "2020.11 - 2022.02",
              position: "풀스택 개발자",
              projects: [
                {
                  name: "모빌리티 인사이트 NOW",
                  period: "2020.11 - 2022.02",
                  role: "풀스택 개발자",
                  stack: ["JavaScript", "D3.js", "Python", "Django", "AWS", "Docker"],
                  achievements: [
                    "모빌리티 동향, 기업 분석 대시보드 구축",
                    "데이터 시각화 구현 (D3.js)",
                    "AWS 기반 인프라 구축 및 운영"
                  ]
                }
              ]
            },
            {
              company: "스타트업인사이트",
              period: "2020.04 - 2021.11",
              position: "풀스택 개발자",
              projects: [
                {
                  name: "스타트업 인사이트 플랫폼",
                  period: "2020.04 - 2021.11",
                  role: "풀스택 개발자",
                  stack: ["JavaScript", "Python", "Django", "Flask", "AWS", "Docker", "MariaDB", "Neo4j", "vis.js", "D3.js"],
                  achievements: [
                    "Redash를 활용한 전사 데이터 인프라 구축",
                    "Django/Flask 기반 REST API 설계 및 개발",
                    "JWT 기반 인증 시스템 구현",
                    "vis.js, D3.js를 활용한 데이터 시각화",
                    "AWS EC2, Docker, Nginx 기반 인프라 구축",
                    "MariaDB, Neo4j 데이터베이스 설계 및 운영",
                    "AWS S3 기반 DB 백업 프로세스 구축",
                    "Python 기반 데이터 크롤링 시스템 개발"
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
              period: "2022.05.03 ~ 2020.06.30",
              description: "- react, typescript ESLint, pritter 활용하는 방법 학습 및 여러 기업 과제 경험"
            },
            {
              name: "빅데이터 분석 및 시각화 실무 프로젝트 과정",
              period: "2019.11.25 ~ 2020.06.16",
              description: "- java, spring, oracle, mariaDB, html, css, jquery\n- python, django, pandas, SKLearn"
            },
            {
              name: "학점은행제",
              period: "진행중",
              description: "- 컴퓨터 과학 102점"
            },
            {
              name: "서인천 고등학교",
              period: "2013년 2월",
              description: "- 인문계 졸업"
            }
          ]}
        />
      </Container>
    </>
  );
};

export default Resume; 