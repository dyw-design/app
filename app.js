var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let multer = require('multer');
let cookieSession = require('cookie-session');
let cors = require('cors');

//服务器搭建
var app = express();

//资源托管
app.use(express.static(path.join(__dirname,'public','template')));
app.use('/admin',express.static(path.join(__dirname,'public','admin')));
app.use(express.static(path.join(__dirname,'public')));
//中间件配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cookieSession({
  name:'nodejs_session',
  keys: ['aa', 'bb'],
  maxAge: 1000 * 60 * 60 
}))

// app.use(cors({
//   "origin": ['http://localhost:3001'],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders:['Content-Type', 'Authorization']
// }));
//上传文件的存储路径
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('user')!==-1 || req.url.indexOf('reg')!==-1){
      cb(null, path.join(__dirname, 'public','upload','user'))
    }else if(req.url.indexOf('banner')!==-1){
      cb(null, path.join(__dirname, 'public','upload','banner'))
    }else{
      cb(null, path.join(__dirname, 'public','upload','product'))
    }
  }
})

let multerObj = multer({storage});

app.use(multerObj.any());

//接口，包括分发路由，交给下一级人员编写

app.all('/api/*',require('./routes/api/params'));
app.use('/api/user',require('./routes/api/user'));
app.use('/api/login',require('./routes/api/login'));
app.use('/api/reg',require('./routes/api/reg'));
app.use('/api/logout',require('./routes/api/logout'));
app.use('/api/imageNav',require('./routes/api/imageNav'));
app.use('/api/:product',require('./routes/api/product'));
app.use('/api/banner',require('./routes/api/banner'));
app.use('/api/getGoods',require('./routes/api/getGoods'));
app.use('/api/getCartGoods',require('./routes/api/getCartGoods'));

app.use(function(req, res, next){
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send({err:1,msg:'错误的接口'})
});

module.exports = app;
