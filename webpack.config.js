const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')


const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  // If in the future the creator of the postcss-hexrgba package
  // releases an update (it is version 2.0.1 as I'm writing this)
  // then it will likely work with PostCSS V8 so you can uncomment
  // the line below and also install the package with npm.
  //require('postcss-hexrgba'),
  require('autoprefixer'),
  require('postcss-pxtorem'),
  require('rucksack-css')({fallbacks: true})
]

// copy images from './app/assets/images' to './dist/assets/images' -- PLEASE NOTE THAT './dist/assets/images' IS CHANGED TO './docs/assets/images' BECAUSE GITHUB PAGES IS BEING USED TO DEPLOY THE SITE ONLINE
// copy fonts from './app/assets/fonts' to './dist/assets/fonts' -- PLEASE NOTE THAT './dist/assets/fonts' IS CHANGED TO './docs/assets/fonts' BECAUSE GITHUB PAGES IS BEING USED TO DEPLOY THE SITE ONLINE
class RunAfterCompile {
  apply(compiler){
    compiler.hooks.done.tap('Copy images', function() {
      fse.copySync('./app/assets/images', './docs/assets/images')
      fse.copySync('./app/assets/fonts', './docs/assets/fonts')
    })
  }
}

let cssConfig = {
  // tells webpack to apply the values in the array 'use' to any file that ends with .css
  test: /\.css$/i,
  use: ['css-loader?url=false', {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}} ]
}

// returns an array of all the files that end with .html
let pages = fse.readdirSync('./app').filter(function(file) {
  return file.endsWith('.html')
}).map(function(page) {
  return new HtmlWebpackPlugin({
    filename: page,
    template: `./app/${page}`
  })
})

// scripts that both 'currentTask == dev' and 'currentTask == build' share
let config = {

  // tells webpack to bundle the 'App.js' file
  entry: './app/assets/scripts/App.js',
  //output html files to the dist folder
  plugins: pages,
  // module for different file types such as css
  module: {
    rules: [
      cssConfig
    ]
  }

}


// this if statement relates to the creating the project
if (currentTask == 'dev') {

  cssConfig.use.unshift('style-loader')

  config.output = {
    // changes the output file name to 'bundled.js'
    filename: 'bundled.js',
    // the absoulte path the 'bundled.js' file will be placed once webpack has finished bundling the file.
    // tells webpack to place the 'bundle.js' file in the 'app' folder
    path: path.resolve(__dirname, 'app')
  }

  config.devServer = {
    // tells webpack-dev-server to watch any html file for changes.
    before: function(app, server) {
      server._watch('./app/**/*.html')
    },
    // tells webpack-dev-server the folder you want to serve up
    contentBase: path.join(__dirname, 'app'),
    // allows webpack to inject the css and js into the browser memory on the fly without needing to reload or refresh the webpage
    hot: true,
    port: 3000,
    // allows any device (phone or tablet) on the network to access the webpack-dev-server
    host: '0.0.0.0'
  }

  config.mode = 'development'


}


// this if statement relates to the final build of the project that the public will see
if (currentTask == 'build') {

  // allows new JS to be backward compatiable for older browsers
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  })

  // extracts the css file from bundle.js
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)

  config.output = {
    // provides cache busting for web browser whenever a change has been made to a JS file
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    // the absoulte path the 'bundled.js' file will be placed once webpack has finished bundling the file.
    // tells webpack to place the 'bundle.js' file in the 'dist' folder -- PLEASE NOTE THAT 'dist' IS CHANGED TO 'docs' BECAUSE  GITHUB PAGES IS BEING USED TO DEPLOY THE SITE ONLINE
    path: path.resolve(__dirname, 'docs')
  }

  config.mode = 'production'

  // output vendor js files
  config.optimization = {
    splitChunks : {chunks: 'all'},
    //ensure css files are minified
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  }

  //output css, html & images files
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
    new RunAfterCompile()
  )

}


module.exports = config
