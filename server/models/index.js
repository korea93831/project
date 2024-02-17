const Sequelize=require('sequelize');
const fs=require('fs');
const path=require('path');
const env=process.env.NODE_ENV||'development';
const config=require('../config/config.json')[env];

const User=require('./users');
const Product=require('./products');
const Notice=require('./notices');
const Chat=require('./chats');
const Reply=require('./reply');
const ProductTag=require('./productTag');
const MarkNotice=require('./markNotice');
const MarkProduct=require('./markProduct');


const db={}
const sequelize=new Sequelize(
  config.database,config.username,config.password,config
);

db.sequelize=sequelize;
db.User=User;
db.Product=Product;
db.Notice=Notice;
db.Chat=Chat;
db.Reply=Reply;
db.ProductTag=ProductTag;
db.MarkNotice=MarkNotice;
db.MarkProduct=MarkProduct;

User.initiate(sequelize);
Product.initiate(sequelize);
Notice.initiate(sequelize);
Chat.initiate(sequelize);
Reply.initiate(sequelize);
ProductTag.initiate(sequelize);
MarkNotice.initiate(sequelize);
MarkProduct.initiate(sequelize);



Object.keys(db).forEach(modelName=>{
  if(db[modelName].associate){
    db[modelName].associate(db)
  }
})

module.exports=db;