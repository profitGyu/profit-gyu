import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSWC from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import path from 'path';

export default defineConfig(({ command }) => {
  const defineOptions =
    command === 'build' ? { _global: {} } : { global: 'window' };
  const pluginOptions =
    command === 'build' ? [reactSWC()] : [react(), reactRefresh()];

  return {
    plugins: [
      ...pluginOptions,
      svgr(),
      tsconfigPaths(),
      envCompatible({ prefix: 'REACT_APP' }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        './runtimeConfig': './runtimeConfig.browser',
      },
    },

    server: { port: 3000 },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: true,
    },

    define: {
      ...defineOptions,
    },
  };
});
