import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue, or other framework plugin
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // or your framework plugin
    tailwindcss(),
  ],
});