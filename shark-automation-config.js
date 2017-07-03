'use strict'
module.exports = {
    comment: 'shark-pure-css',
    version: '1.0.0',
    product: 'shark-pure-css', //项目名称
    contextPath: '/', //请求的根路径
    protocol: 'http', //项目使用的协议
    browserPort: 9309, //给browser sync使用的端口
    port: 9200, //express 起的端口
    hostname: 'localhost', //模拟域名
    openurl: 'http://localhost:9309/index.html', //自动打开的url
    rootPath: __dirname, //项目的根目录
    webapp: '', //前端代码的根目录
    mock: '', //mock文件的根目录
    scssPath: 'scss', //scss文件的目录，相对于webapp
    cssPath: 'css', //scss编译成css文件的存放目录，
    imgPath: 'tests/assets/img', //img目录，相对于webapp
    videoPath: '', //video目录
    jsSrcPath: 'tests', //js源码目录
    fontPath: '', //fonts目录
    htmlPath: 'tests', //html目录
    ajaxPrefix: '/xhr', //ajax请求的根路径,
    templatePath: 'tests'
};
