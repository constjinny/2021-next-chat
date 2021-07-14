const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "",
        aliases: {
          "@public": "./public",
          "@api": "./src/api",
          "@components": "./src/components",
          "@constant": "./constant",
          "@data": "./src/data",
          "@features": "./src/features",
          "@store": "./src/store",
          "@types": "./types",
          "@utils": "./utils",
        },
      },
    },
  ],
};
