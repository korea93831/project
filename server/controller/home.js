const model=require('../models')

exports.Main=(req,res,next)=>{
   
        let info={
            email:'1111@gmail.com',
            nickname:'admin',
            password:'0000',
        };
        model.User.create(info)
        .then((result)=>{
            res.send({email:result.email})
        })
    
    // const getTop20User=async(req,res)=>{
    //     let users=await Product.findAndCountAll({
    //         offset: 10,
    //         limit:2
    //     })
    // }
    // res.send(getTop20User);
    console.log('req main');
    res.send('req main');
}