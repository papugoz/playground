const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist' 
        }) }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project',
      minify: {
        //collapseWhitespace: true
      },
      hash: true,
      template: 'src/index.ejs',
    }),
    new ExtractTextPlugin({
      filename: "app.css"
    })
  ]
}

module.exports = config;