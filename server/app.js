const express=require('express');
const path=require('path');
const morgan=require('morgan');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const dotenv=require('dotenv');
const passport=require('passport');
const { sequelize } = require('./models');

dotenv.config();

const app=express();

app.set('port',process.env.PORT||3000);
app.set('view engine','html');

sequelize.sync({force:false})
.then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
    console.error(err);
})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false
    }
}));

const homeRouter=require('./routes/home.js');
app.use('/',homeRouter);


app.use((req,res,next)=>{
    const error=new Error(`${req,method} ${req.method} 라우터가 없습니다.`);
    error.status=404;
    next(error);
});

app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    res.locals.error=process.env.NODE_ENV !=='production'? err:{};
    res.status(err.status||500);
    res.render('error');
    next();
});

const port=app.get('port');
app.listen(port,()=>{
    console.log(port,"포트 서버 대기");
})