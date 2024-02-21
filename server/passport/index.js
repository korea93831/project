const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/users');

module.exports=()=>{
    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });

    passport.deserializeUser((id,done)=>{
        User.findOne({where:{id}})
        .then(user=>done(null,user))
        .catch(err=>done(err));
    });

    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
    },(email,password,done)=>{
        const result=User.filter((user)=>user.email===email);
        if(result.length>0){
            const user=result[0];
            if(password===user.password){
                done(null,user);
            }else{
                done(null,false,{message:'비밀번호 틀림'});
            }
        }else{
            done(null,false,{message:'가입되지 않은 회원입니다'});
        }
    }));
};