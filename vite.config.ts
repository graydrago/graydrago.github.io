import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function root(...args: string[]) {
  return resolve(__dirname, ...args);
}

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  publicDir: root('public'),
  build: {
    outDir: root('dist')
  },
  resolve: {
    alias: {
      dto: root('src/dto'),
      utils: root('src/utils'),
    },
  },
});
