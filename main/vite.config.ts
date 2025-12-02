import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  return {
    root: 'src/app',
    plugins: [vue(), tailwindcss()],
    css: {
      devSourcemap: isDev,
    },
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
    },
    publicDir: resolve(__dirname, 'public'),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});
