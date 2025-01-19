import type { StorybookConfig } from "@storybook/react-vite";
import dotenv from "dotenv";
dotenv.config();

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.define = {
      ...config.define,
      "process.env.BUSINESS_UNIT_ID": JSON.stringify(
        process.env.BUSINESS_UNIT_ID
      ),
      "process.env.WIDGET_URL": JSON.stringify(process.env.WIDGET_URL),
    };

    return config;
  },
};
export default config;
