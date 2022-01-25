const cracoAlias = require("craco-alias");

const config = () => ({
  plugins: [
    {
      plugin: require("craco-plugin-scoped-css"),
    },
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.json",
      },
    },
  ],
});

export default config;
