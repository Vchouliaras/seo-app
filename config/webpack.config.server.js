const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require( 'nodemon-webpack-plugin' )
const path = require('path')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, '..', 'server/create.js'),
  output: {
      path: path.resolve(__dirname, '..', 'server'),
      filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides'
          ),
        },
      },
      {
        test: /\.(ttf|eot|otf|svg|png|jpg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          emitFile: false
        },
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?emitFile=false'
      }
    ]
  },
  plugins: [
    new NodemonPlugin(), // Dong
  ],
}