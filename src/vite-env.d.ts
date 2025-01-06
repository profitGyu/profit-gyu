/// <reference types="vite/client" />

declare module '*.svg?react' {
  import type React from 'react';
  const content: React.FunctionComponent<React.SVGProps<SVGElement>>;
  export default content;
}
