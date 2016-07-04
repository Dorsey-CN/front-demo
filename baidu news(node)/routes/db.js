/***数据库连接***/
var Db = require('mysql-activerecord');
var db = new Db.Adapter({
    server: 'localhost',
    username: 'root',
    password: '',
    database: 'newsdb',
    reconnectTimeout: 2000
});
exports.getdb = db;
