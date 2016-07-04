/***控制端mvc***/
var db = require('./db.js').getdb;
var xss = require('xss');

/***渲染后台登录页面***/
exports.login = function(req, res) {
    res.render('login.ejs', {
        title: '新闻后台管理系统登录'
    });
};

/***后台登录验证***/
exports.loginCheck = function(req, res) {
    var userEmail = req.query.email,
        password = req.query.pwd;
    db.where({ email: userEmail }).get('user', function(err, results, fields) {
        var pwd = '';

        if (results[0]) {
            pwd = results[0].password;
        }

        if (err) {
            return;
        } else {
            if (password == pwd) {
                res.send('success');
            } else {
                res.send('error');
            }
        }
    });
};


/***后台查询***/
exports.queryBack = function(req, res) {
    var newstype = req.query.newsType || '推荐';
    db.where({ type: newstype }).get('news', function(err, results, fields) {
        if (err) {
            res.send(err);
        }
        res.render('back.ejs', {
            title: '新闻后台管理系统',
            newsCon: results
        });
    });
};

/***添加***/
exports.add = function(req, res) {
    var newsType = req.query.newsType;
    var newsTitle = xss(req.query.newsTitle);
    var newsAddress = req.query.imgAddress;
    var newsAddtime = req.query.addTime;
    var data = {
        type: newsType,
        title: newsTitle,
        imgsrc: newsAddress,
        addtime: newsAddtime
    }

    if (data.title.indexOf("'") >= 0 || data.imgsrc.indexOf("'") >= 0) {
        console.log('输入信息有误！');
        res.send('输入信息有误！');
    } else if (data.title == '' || data.imgsrc == '') {
        console.log('标题和图片地址不能为空，请重新输入！');
        res.send('标题和图片地址不能为空，请重新输入！');
    } else {
        db.insert('news', data, function(err, info) {
            if (err) {
                res.send(err);
            } else {
                res.send('添加成功!');
            }
        });
    }
}

/***删除***/
exports.delete = function(req, res) {
    var newsTitle = req.query.title;
    var title = newsTitle.split('amp;');

    newsTitle = '';
    for (var i = 0; i < title.length; i++) {
        newsTitle = newsTitle.concat(title[i]);
    }
    db.where({ title: newsTitle }).delete('news', function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send('删除成功!');
        }
    });
}

/***修改***/
exports.update = function(req, res) {
    var newsType = req.query.newsType;
    var newsTitle = req.query.newsTitle;
    var newsAddress = req.query.imgAddress;
    var newsAddtime = req.query.addTime;
    var oldTitle = req.query.oldTitle;

    // if (newsTitle.indexOf('gt;') >= 0 && newsTitle.indexOf('lt;') >= 0) {
    //     newsTitle = '';
    //     titles = newsTitle.split('amp;')
    // }
    // if (oldTitle.indexOf('gt;') >= 0 && oldTitle.indexOf('lt;') >= 0) {
    //     oldTitle = '';
    //     titles = oldTitle.split('amp;')
    // }
    // for (var i = 0; i < titles.length; i++) {
    //     if (oldTitle == '') {
    //         oldTitle = oldTitle.concat(titles[i]);
    //     }
    //     if (newsTitle == '') {
    //         newsTitle = newsTitle.concat(titles[i]);
    //     }
    // }

    var data = {
        type: newsType,
        title: newsTitle,
        imgsrc: newsAddress,
        addtime: newsAddtime
    }

    if (data.title.indexOf("'") >= 0 || data.imgsrc.indexOf("'") >= 0) {
        console.log('输入信息有误！');
        res.send('输入信息有误！');
    } else if (data.title == '' || data.imgsrc == '') {
        console.log('标题和图片地址不能为空，请重新输入！');
        res.send('标题和图片地址不能为空，请重新输入！');
    } else {
        db.where({ title: oldTitle }).update('news', data, function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send('修改成功!');
            }

        });
    }
}

/***切换新闻类别***/
exports.changeType = function(req, res) {
    var newstype = req.query.newstype;
    db.where({ type: newstype }).get('news', function(err, results, fields) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
}

/***前台查询***/
exports.queryFront = function(req, res) {
    var newstype = req.query.newsType || '推荐';
    db.where({ type: newstype }).get('news', function(err, results, fields) {
        if (err) {
            res.send(err);
        }
        res.render('front.ejs', {
            title: '百度新闻',
            newsCon: results
        });
    });
};
