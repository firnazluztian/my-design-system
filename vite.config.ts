import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { esbuildDestructuringWorkaround } from './vite.esbuild';

export default defineConfig({
  plugins: [react()],
  esbuild: esbuildDestructuringWorkaround,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KiichanDesignSystem',
      fileName: (format) => {
        if (format === 'es') return 'kiichan-design-system.mjs';
        return `kiichan-design-system.${format}.js`;
      },
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@tanstack/react-query', '@tanstack/react-table', 'framer-motion', 'dayjs'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@tanstack/react-query': 'ReactQuery',
          '@tanstack/react-table': 'ReactTable',
          'framer-motion': 'FramerMotion',
          'dayjs': 'dayjs'
        },
      },
    },
  },
});
