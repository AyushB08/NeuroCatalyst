import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'three': path.resolve(__dirname, 'node_modules/three')
    }
  },
  optimizeDeps: {
    include: ['three']
  },
  server: {
    hmr: {
      overlay: false // to disable the overlay
    }
  }
});
