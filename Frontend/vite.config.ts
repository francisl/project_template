/// <reference types="vitest/config" />
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Check if we're running in Storybook context
const isStorybook = process.env.STORYBOOK === 'true' || process.argv.includes('storybook');

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: isStorybook 
    ? [tailwindcss(), tsconfigPaths()] // Don't include reactRouter for Storybook
    : [tailwindcss(), reactRouter(), tsconfigPaths()],

  test: {
    projects: [
      {
        extends: true,
        plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      },
      {
        extends: true,
        plugins: [tailwindcss(), tsconfigPaths()], // Don't include reactRouter for unit tests
        test: {
          name: 'unit',
          environment: 'jsdom',
          setupFiles: [],
          include: ['test/**/*.test.{ts,tsx}'],
          exclude: ['**/*.stories.{ts,tsx}', 'node_modules/**']
        }
      }
    ]
  }
});