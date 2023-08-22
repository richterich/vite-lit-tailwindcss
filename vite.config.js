import {defineConfig} from 'vite';
import {fileURLToPath, URL} from 'node:url';

const extpattern = /[^.]+$/;

const config = defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.[hash].js',
        assetFileNames: (assetInfo) => {
          const [ext] = extpattern.exec(assetInfo.name);
          if (ext === 'css') return 'styles[extname]';
          return '[name].[hash][extname]';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

export default config;
