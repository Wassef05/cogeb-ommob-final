import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';


export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'brotliCompress' }) ,
    compression({ algorithm: 'gzip' }) 

  ],

  server: {
    host: true,
    port: process.env.PORT || 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true, 
    },
  },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
