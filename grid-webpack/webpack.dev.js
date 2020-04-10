const webpack = require('webpack');
 module.exports = {

    mode: 'development',
    devtool: 'source-map',
    output: {
  
      filename: 'name.js',
  
    },
     plugins: [

        new webpack.HotModuleReplacementPlugin()
    
    ]
  };