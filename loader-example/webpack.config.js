const path = require('path');

module.exports = {
  entry: './src/index',
  target: 'node', 
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use: 'replace-loader'
      }
    ]
  },
  resolveLoader: {
  	modules: ['./node_modules', './loader']
  }
};