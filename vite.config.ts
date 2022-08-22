import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import alias from '@rollup/plugin-alias';

export default defineConfig({
    plugins: [
        react({
            // Exclude storybook stories
            exclude: /\.stories\.(t|j)sx?$/,
            // Only .tsx files
            include: '**/*.tsx'
        }),

        alias({
            entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
        })
    ],
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
