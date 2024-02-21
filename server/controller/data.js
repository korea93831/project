const express=require('express');
const Product=require('../models/products');
const Notice=require('../models/notices');

exports.allGetUser=(req,res)=>{
    res.send('allGet');
    console.log('allget');
}
exports.allGetProduct=(req,res)=>{
    res.json({"message":'allGetProduct'});
    console.log('allGetProduct');
}
exports.allGetNotice=async(req,res)=>{
    data= await Notice.findAll({
        attributes:['NoticeTitle','NoticeContext','NoticeTag','goodCount','repleCount'],
        raw:true});
    console.log(data);
    res.json(data);
    console.log('allGetNotice');
}
exports.selectUser=(req,res)=>{
    res.send('selectUser');
    console.log('selectUser');
}
exports.selectProduct=(req,res)=>{
    res.send('selectProduct');
    console.log('selectProduct');
}
exports.selectReply=(req,res)=>{
    res.send('selectReply');
    console.log('selectReply');
}
exports.selectNotice=(req,res)=>{
    res.send('selectNotice');
    console.log('selectNotice');
}
exports.getChatLog=(req,res)=>{
    res.send('getChatLog');
    console.log('getChatLog');
}
exports.Join=(req,res)=>{
    res.send('Join');
    console.log('Join');
}
exports.regProduct=(req,res)=>{
    console.log(req.body);
    res.send('regProduct');
    console.log('regProduct');
}
exports.regNotice=async(req,res)=>{
    console.log(`${req.body.noticeTitle}+${req.body.noticeContext}+${req.body.select}`);
    try{
        const notice= await Notice.create({
            NoticeTitle:req.body.noticeTitle,
            NoticeContext:req.body.noticeContext,
            NoticeTag:req.body.select,

        })
    }catch(err){
        console.error(err);
    }

    res.send('regNotice');
    console.log('regNotice');
}
exports.regReply=(req,res)=>{
    res.send('regReply');
    console.log('regReply');
}
exports.ChatLog=(req,res)=>{
    res.send('ChatLog');
    console.log('ChatLog');
}
exports.updateUser=(req,res)=>{
    res.send('updateUser');
    console.log('updateUser');
}
exports.updateProduct=(req,res)=>{
    res.send('updateProduct');
    console.log('updateProduct');
}
exports.updateNotice=(req,res)=>{
    res.send('updateNotice');
    console.log('updateNotice');
}