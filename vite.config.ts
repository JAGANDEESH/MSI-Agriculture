import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 Make sure this matches your subdirectory on the server
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
