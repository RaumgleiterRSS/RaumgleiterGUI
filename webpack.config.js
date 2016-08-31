var path = require('path')
var extractTextPlugin = require('extract-text-webpack-plugin')

config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://0.0.0.0:9090',
    path.resolve(__dirname, 'app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'devbuild'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    },{
      test: /\.scss$/,
      loader: extractTextPlugin.extract('style', 'css!sass')
    }]
  },
  plugins: [
   new extractTextPlugin('style.css')
  ]
}

module.exports = config;
