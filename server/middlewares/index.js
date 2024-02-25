exports.isLogedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    } else{
        res.status(403).sned('로그인이 필요합니다');
    }
};


exports.isNotLogedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        const message=encodeURIComponent('로그인한 상태입니다');
        res.redirect(`/?error=${message}`);
    }
};