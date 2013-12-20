/**
 * 将上传的文件放到本地另外一个目录的策略类
 * @author  heroic
 */

/**
 * Module dependencies
 */
var fs = require('fs'),
  path = require('path');
var extend = require('../extend'),
  UploaderStrategy = extend.UploaderStrategy;

/**
 * LocalStrategy constructor
 * @param {Object} options
 *  - uploadPath     文件上传到哪个目录
 */
function LocalStrategy(options) {
  options = options || {};
  UploaderStrategy.call(this);
  this.name = 'local';
  this.uploadPath = options.uploadPath;
}

/** 从 Strategy 继承 */
extend(LocalStrategy, UploaderStrategy);

/**
 * 实现 upload 方法
 * @param  {Object}   file     文件对象
 * @param  {Function} callback 回调函数
 *  - err     Error
 */
LocalStrategy.prototype.upload = function(file, callback) {
  fs.rename(file.path, path.join(this.uploadPath, file.name), callback);
};

/**
 * Module exports
 */
module.exports = exports = LocalStrategy;