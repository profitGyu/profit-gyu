import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const NPStyles = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1031;
    width: 100%;
    height: 10px !important;
    background: #06c;
  }

  #nprogress .peg {
    position: absolute;
    right: 0;
    display: block;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #06c, 0 0 5px #06c;
    opacity: 1.0;
    transform: rotate(3deg) translate(0, -4px);
  }

  /* 스피너 제거 */
  #nprogress .spinner {
    display: none;
  }
`;

const ScrollProgress = () => {
  useEffect(() => {
    // 디바운스 함수
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(window.scrollY / totalHeight, 1);
        NProgress.set(progress);
      }, 10);
    };

    // NProgress 초기 설정
    NProgress.configure({
      showSpinner: false,
      trickle: false,
      minimum: 0.08,
      easing: 'ease',
      speed: 200
    });

    // 초기 progress 설정
    handleScroll();

    // 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 클린업
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      NProgress.done();
    };
  }, []);

  return <NPStyles />;
};

export default ScrollProgress;