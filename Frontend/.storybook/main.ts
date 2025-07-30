import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    // Basic CORS configuration
    config.server = {
      ...config.server,
      cors: true,
      fs: {
        allow: ['..'],
      },
    };
    
    // Ensure CSS is properly processed
    if (!config.css) {
      config.css = {};
    }
    
    // Add CSS preprocessing
    config.css.preprocessorOptions = {
      ...config.css.preprocessorOptions,
    };
    
    return config;
  }
};
export default config;