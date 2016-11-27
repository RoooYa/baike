var express = require('express'),
    session = require('express-session'),
    http = require('http');

var app = express();

app.use(express.static('static'));   //设置静态资源目录
app.set('views', './view');        //设置模板目录
app.set('view engine', 'ejs');     //设置模板引擎名称


app.use(session({
    secret: 'daobidao', //为了安全性的考虑设置secret属性
    cookie: {maxAge: 60 * 1000 * 60}, //设置过期时间
    resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized: false, //
}));

// session
app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});

// 引入index模块路由
var index = require('./routes/index');
index(app);

var admin = require('./routes/admin/index');
admin(app);

// // 引入word模块路由
// var word = require('./routes/word');
// word(app);

// // 引入用户模块路由
// var reg = require('./routes/user');
// reg(app);




app.listen(5000, function() {
	console.log("启动成功");
});