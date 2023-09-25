const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  chromeWebSecurity: false, // Disabled to prevent errors with iframes. Would need to reenable if checking for CORS errors in the future.
  component: {
    specPattern: "src/**/*spec.{js,jsx,ts,tsx}",
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
