// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from '@storybook/react-vite';
import { resolve, dirname } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { esbuildDestructuringWorkaround } from '../vite.esbuild.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ["@storybook/addon-onboarding", "@storybook/addon-docs"],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    config.esbuild = {
      ...config.esbuild,
      ...esbuildDestructuringWorkaround,
    };
    config.optimizeDeps = {
      ...config.optimizeDeps,
      esbuildOptions: {
        ...config.optimizeDeps?.esbuildOptions,
        ...esbuildDestructuringWorkaround,
      },
    };
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(__dirname, '../src'),
      };
    }
    config.plugins = [...(config.plugins || []), tsconfigPaths()];
    return config;
  },
  staticDirs: [{ from: '../public', to: '/' }],
  managerHead: (head) => `
    ${head}
    <style>
      .sidebar-header img {
        display: block !important;
        width: auto !important;
        max-width: 140px !important;
        height: auto !important;
        max-height: 40px !important;
        object-fit: contain !important;
        object-position: left center !important;
        margin: 4px 0 !important;
      }
      .sidebar-header a {
        width: auto !important;
        display: inline-flex !important;
        align-items: center !important;
      }
    </style>
  `,
};

export default config;