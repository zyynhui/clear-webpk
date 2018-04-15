const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

const htmlPluginObj = new HtmlPlugin({
  template: path.join(__dirname, './src/index.html'), 
  filename: 'index.html' 
})


module.exports = {
  entry: path.join(__dirname, './src/main.js'), 
  output: {
    path: path.join(__dirname, './dist'), 
    filename: 'bundle.js'
  }, 
  plugins: [
    htmlPluginObj
  ],
  module: {

    
  }
}
