const express=require('express');

const {allGetUser,selectUser,allGetProduct,selectProduct,allGetNotice,selectNotice,regNotice,selectReply,regReply,Join,regProduct,updateUser,updateProduct,updateNotice,getChatLog,ChatLog}=require('../controller/data');

const router=express.Router();

router.post('/alluser',allGetUser);
router.post('/allproduct',allGetProduct);
router.post('/allnotice',allGetNotice);


router.post('/getchatlog',getChatLog);
router.post('/selectuser',selectUser);
router.post('/selectnotice',selectNotice);
router.post('/selectproduct',selectProduct);
router.post('/selectreply',selectReply);


router.post('/join',Join);
router.post('/regproduct',regProduct);
router.post('/regnotice',regNotice);
router.post('/regreply',regReply);
router.post('/chatlog',ChatLog)


router.post('/updateuser',updateUser);
router.post('/updateproduct',updateProduct);
router.post('/updatenotice',updateNotice);

module.exports=router;