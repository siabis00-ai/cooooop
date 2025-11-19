import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Polyfill for process.env to support the library requirements safely
      'process.env': {
        API_KEY: env.API_KEY,
        NODE_ENV: mode
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});