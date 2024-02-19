const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const bcrypt=require('bcrypt');

const User=require('../models/users');

module.exports=()=>{
    passport.use(
        new LocalStrategy(
            {
                usernameField:'email',
                passwordField:'password'
            },
            async(email,password,done)=>{
                try{
                    const UserExist=await User.findOne({where:{email}});

                    if(UserExist){
                        const result=await bcrypt.compare(password,UserExist.password);
                        if(result){
                            done(null,UserExist);
                        }else{
                            done(null,false,{message:'비밀번호가 일치하지 않습니다'});
                        }
                    }
                    else{
                        done(null,false,{message:'가입되지 않은 회원입니다.'});
                    }
                }catch(err){
                    console.error(err);
                    done(error);
                }
            }
        )
    )
}