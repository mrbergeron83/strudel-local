import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4321,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
