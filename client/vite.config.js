import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // ou '0.0.0.0'
    port: process.env.PORT || 5173, 
    strictPort: true, // Important pour forcer Vite à utiliser ce port
    proxy: {
      '/api': {
        // target: 'https://cogeb-immobiliere-api.onrender.com',
        // target: 'http://localhost:4000',
        target: 'http://localhost:4000',


        changeOrigin: true, 
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
       // Séparation des dépendances principales en un chunk séparé
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Créer un chunk 'vendor' pour les modules externes
          }
        },
      },
    },
  },
});
