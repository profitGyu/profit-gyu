# 이력서 프로젝트

## 🚀 기술 스택

### Frontend
- React 18.3
- TypeScript 
- Vite
- Styled Components
- TanStack Query (React Query)
- Zustand

### 개발 도구
- ESLint
- Prettier
- StyleLint 
- Husky
- CommitLint

## 🛠 주요 기능

### 이력서 섹션
- 기본 정보 (이름, 직함, 소개)
- 연락처 정보
- 기술 스택
- 경력 사항
- 포트폴리오 프로젝트

### 특징
- 반응형 디자인
- 모달 컴포넌트를 통한 상세 정보 표시
- Portal을 활용한 모달 구현
- 전역 상태 관리 (Zustand)

## 🛠️ 설치 방법
```
  pnpm install

  pnpm dev
```

## 💻 개발 환경 설정

### ESLint 설정
프로젝트는 TypeScript와 React를 위한 엄격한 린팅 규칙을 포함합니다.

### Prettier 설정
일관된 코드 스타일을 위해 Prettier가 구성되어 있습니다.

### StyleLint 설정
CSS/SCSS 코드의 품질을 관리하기 위한 StyleLint 규칙이 적용되어 있습니다.

### Git Hooks
- Husky를 통한 커밋 전 린팅 검사
- CommitLint를 통한 커밋 메시지 컨벤션 강제

## 🔧 커밋 메시지 컨벤션

- feat: 새로운 기능 추가
- fix: 버그 수정
- build: 빌드 관련 변경사항
- chore: 기타 변경사항
- ci: CI/CD 관련 변경사항
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 코드
- hotfix: 긴급 버그 수정

## 🎯 프로젝트 구조
```
src/
├── components/
│   └── common/
│       └── Portal/
├── pages/
│   ├── main/
│   └── resume/
│       └── components/
├── services/
│   └── _axios/
├── store/
├── styles/
└── routes/
```
