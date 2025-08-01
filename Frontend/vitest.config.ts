import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: [],
    include: ['test/**/*.test.{ts,tsx}'],
    exclude: ['**/*.stories.{ts,tsx}', 'node_modules/**']
  }
}); 