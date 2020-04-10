const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require('webpack-merge')

const devConfig = require('./webpack.dev.js')

const prodConfig = require('./webpack.prod.js')


const commonConfig = {

  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
           title: 'Output Management',
           filename:'grid.html',
            template:'./dist/grid.html'
         })
      ],
  output: {

    path: path.resolve(__dirname, 'dist'),

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
      ]
      },
      {
                test: /\.(png|svg|jpg|gif)$/,
               use: [
                  'file-loader'
                ]
              }
    ]
 },
  devServer: {

    contentBase: './dist',    

    port: 8080,       
    hot: true, 

    open: true, 

},
}


module.exports = env => {

  if (env && env.production) {

    return merge(commonConfig, prodConfig)

  } else {

    return merge(commonConfig, devConfig)

  }

}
