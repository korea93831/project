const passport=require('passport');
const bcrypt=require('bcrypt');
const User=require('../models/users');


exports.join=async(req,res,next)=>{
        const{email,nickname,password,localMain,localSub,profile}=req.body;
        console.log(`email:${email},nickname:${nickname},password:${password},localMain:${localMain},localSub:${localSub}`)
        try{
            const userExist= await User.findOne({where:{email}});
            if(userExist){
                return res.redirect('/join?error=exist');
            }
            const hashPw=await bcrypt.hash(password,12);
            await User.create({
                email,
                nickname,
                password:hashPw,
                localMain,
                localSub,
                profile
            });
            return res.redirect('/');
        }catch(err){
            console.error(err);
            return next(err)
        }

}
exports.login=async(req,res,next)=>{
    passport.authenticate('local',(authError,user,info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }

        return req.login(user,loginError=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            
            return res.json({"login":true,"userEmail":user.email,"userNickname":user.nickname});
            // return res.redirect('/');
            // return res.json(user)
        });
    })(req,res,next);
}

exports.logout=async(req,res,next)=>{
    req.logout(()=>{
        res.redirect('/')
    })
}


