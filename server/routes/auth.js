const express=require('express');
const{isLogedIn,isNotLogedIn}=require('../middlewares');
const{join,login,logout}=require('../controller/auth');

const router=express.Router();

router.post('/join',isNotLogedIn,join);
router.post('/login',isNotLogedIn,login);
router.post('/logout',isLogedIn,logout);

module.exports=router;