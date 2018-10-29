var path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    }
  ]
},
devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  port: 9000,
	  inline:true
	}
};