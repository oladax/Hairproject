// webpack.config.js

module.exports = {
  // ... other webpack configurations

  resolve: {
    fallback: {
      https: require.resolve('https-browserify'),
      querystring: require.resolve('querystring-es3'),
    },
  },

  module: {
    noParse: /\/node_modules\/(https|querystring)\//,
    rules: [
      // ... other rules
    ],
  },
};
