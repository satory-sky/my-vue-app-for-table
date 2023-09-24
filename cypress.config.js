const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    specPattern: "src/**/*spec.{js,jsx,ts,tsx}",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
