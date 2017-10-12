import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production') // set node in prod mode
};

export default {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: { // For development it will not generate any physical file, instead they are served from memory
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin() // minify JS
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })},
      {test: /\.(jpe?g|png|gif|ico)$/i, use: [{loader: 'file-loader', options: {name: '[name].[ext]'}}]},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
