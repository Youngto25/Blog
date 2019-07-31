const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'imgs/[name].[hash].[ext]',
                publicPath: '/dist/'
              }
            }
          ]
        }
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};