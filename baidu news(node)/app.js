// 指定包和依赖
var express = require('express');
var Db = require('mysql-activerecord');
var control = require('./routes/controler.js');
var path = require('path');

// 实例化Express
var app = express();

// 视图
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static(__dirname));

// 把public目录下的静态文件作为顶层目录的文件来托管
app.use(express.static(path.join(__dirname, 'public')));

// 错误检查
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// 路由设置
app.get('/',control.login);
app.get('/loginCheck',control.loginCheck);
app.get('/back',control.queryBack);
app.get('/back/add',control.add);
app.get('/back/delete',control.delete);
app.get('/back/update',control.update);
app.get('/back/changeType',control.changeType);

app.get('/front',control.queryFront);

//模块接口
module.exports = app;
