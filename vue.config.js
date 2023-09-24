const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // Use Vue 3 compatibility build in place of regular build
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");
    config.module
        .rule("vue")
        .use("vue-loader")
        .tap((options) => {
          return {
            ...options,
            compilerOptions: {
              compatConfig: {
                MODE: 2,
              },
            },
          };
        });
  },
})
