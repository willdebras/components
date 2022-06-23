module.exports = {
  "stories": [
    '../src/docs/Intro/intro.stories.mdx', // default page
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-controls'
  ]
}
