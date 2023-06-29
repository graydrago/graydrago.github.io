import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { metaListPlugin } from './configs/utils';

const PUBLIC_DIR = './public';

function root(...args: string[]) {
  return resolve(__dirname, ...args);
}

export default defineConfig({
  plugins: [
    react(),
    metaListPlugin({ publicDir: PUBLIC_DIR }),
  ],
  assetsInclude: ['**/*.glb'],
  publicDir: root('public'),
  build: {
    outDir: root('dist')
  },
  resolve: {
    alias: {
      components: root('src/components'),
      types: root('src/types'),
      utils: root('src/utils'),
    },
  },
});
