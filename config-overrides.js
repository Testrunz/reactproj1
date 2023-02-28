const webpack = require("webpack");
require('dotenv').config({ path: './.env' }); 
//console.log(process.env);
module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  fallback.fs = false;
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });
  config.ignoreWarnings = [/Failed to parse source map/];
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
   new webpack.DefinePlugin({
    "process.env.REACT_APP_FIREBASE_CONFIG": JSON.stringify(process.env.FIREBASE_CONFIG)
}),
  ]);
  return config;
};
