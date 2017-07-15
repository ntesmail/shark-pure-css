var webpack = require('webpack');
var webpackDevConfig = require('./webpack.dev.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var SharkConfig = require('./shark-deploy-conf');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var openurl = require('openurl');
var IP = require('ip');

var app = express();
var compiler = webpack(webpackDevConfig);
var devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: false,
    stats: {
        colors: true
    }
})
app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler, {
    reload: true
}));

//ajax
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//ajax mock
app.use(SharkConfig.contextPath + '/xhr', function (req, res) {
    console.log('request url:' + req.url);
    var data = path.join(__dirname, 'test/mock/xhr', req.path);
    if (fs.existsSync(data)) {
        res.send(fs.readFileSync(data));
    } else {
        res.status(404).send('file not exist !');
    }
});

//font
app.use(SharkConfig.contextPath + '/fonts', express.static(path.join(__dirname, 'docs/asset/fonts')));

//start server & listen 
devMiddleware.waitUntilValid(() => {
    // when env is testing, don't need open it
    if (SharkConfig.openurl) {
        let url = SharkConfig.openurl
            .replace('${0}', IP.address())
            .replace('${1}', SharkConfig.port)
            .replace('${2}', SharkConfig.contextPath);
        openurl.open(url);
    }
})
app.listen(SharkConfig.port)
