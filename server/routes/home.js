const express=require('express');
const {Main,Join,}=require('../controller/home');
const router=express.Router();

router.get('/',Main);

module.exports=router;