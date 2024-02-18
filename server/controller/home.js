const { Product } = require("../models");

exports.Main=(req,res,next)=>{
    const getTop20User=async(req,res)=>{
        let users=await Product.findAndCountAll({
            offset: 10,
            limit:2
        })
    }
    console.log('req main');
    res.send('req main');
}