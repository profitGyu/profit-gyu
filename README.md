# 나편 (NAEPYEON) - 프라이빗 타로 서비스

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

## 🔧 환경 변수

환경 변수는 `REACT_APP_` 접두사를 사용합니다.

## 📝 커밋 메시지 컨벤션

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
