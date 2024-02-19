const express=require('express');
const {Main}=require('../controller/page');

const router=express.Router();

router.get('/',Main);

module.exports=router;