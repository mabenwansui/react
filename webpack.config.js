var webpack = require('webpack');
var path = require('path');
var dirfile = require('mb-dirfile');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
    //页面入口文件配置
    entry: getEntry(),
    //入口文件输出配置
    output: {
      path: 'bulid/js/',
      filename: '[name].js'
    },
    module: {
      //加载器配置
      loaders: [
        { test: /\.js$/, loader: 'jsx-loader?harmony' },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a valid name to reference
          query: {
            presets: ['es2015', 'react']
          }
        },
        { test: /\.less$/, loader: "style!css!less"}
      ]
    },
    //其它解决方案配置
    resolve: {
      //查找module的话从这里开始查找
      root: '/Users/maben/work/git/else/erp', //绝对路径
      //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
      extensions: ['', '.js', '.json'],
      //模块别名定义，方便后续直接引用别名，无须多写长长的地址
      alias: {}
    }
};

function getEntry(){
  var obj = {};
  dirfile(path.join(__dirname, 'src'), {
    test: /(\/\.\w*$)/,
    exclude: /node_modules|html|component|view/
  }).done(files => {
    for(let v of files){
      obj[path.basename(v).replace(/\..*$/, '')] = path.relative(__dirname, v);
    }
  });
  return obj;
}