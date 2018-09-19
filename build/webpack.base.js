'use strict'

const options = require('./options')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    modules: [
      options.paths.root,
      options.paths.resolve('node_modules')
    ],

    alias: {
      src: 'src',
      // vue$: 'vue/dist/vue.common.js'
    },

    extensions: ['.js', '.json']
  },
  externals: {
    "react": 'react',
    'react-dom': 'ReactDOM'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract("css-loader"),
      },
      {
        test: /\.(js|jsx|mjs)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("../examples/app.css"),
  ],

  // Stats is used to customize Webpack's console output
  // https://webpack.js.org/configuration/stats/
  stats: {
    hash: false,
    colors: true,
    chunks: false,
    version: false,
    children: false,
    timings: true
  }
}
