var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  './src',
  output: {
    path:     'dist',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
        {
            test: /\.jsx?$/,
            loader: 'eslint',
        }
    ],
    loaders: [
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'url-loader',
        query: {
          limit: 100000
        },
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader'),
      },
      {
        test:   /\.jsx?$/,
        excluse: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: require.resolve("react"),
        loader: "expose?React"
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
  ],
};
