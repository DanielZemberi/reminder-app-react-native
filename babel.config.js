module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "macros",
      [
        "babel-plugin-module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@icons": "./src/icons",
            "@illustrations": "./src/illustrations",
            "@flags": "./src/flags",
            "@ui": "./src/components/ui",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@lib": "./src/lib",
            "@locales": "./src/locales",
            "@navigators": "./src/navigators",
            "@services": "./src/services",
            "@custom-types": "./src/types",
            "@utils": "./src/utils",
            "@screens": "./src/screens",
            "@store": "./src/store",
          },
        },
      ],
    ],
  };
};
