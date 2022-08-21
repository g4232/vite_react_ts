import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import alias from '@rollup/plugin-alias';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        react({
            // Exclude storybook stories
            exclude: /\.stories\.(t|j)sx?$/,
            // Only .tsx files
            include: '**/*.tsx'
        }),
        eslintPlugin(),
        alias({
            entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
        })
    ],
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
});
