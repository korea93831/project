const Sequelize=require('sequelize');

class Product extends Sequelize.Model{
    static initiate(sequelize){

        Product.init({
            imagePath:{
                type:Sequelize.TEXT,
                allowNull:false
            },
            productTitle:{
                type:Sequelize.STRING(40),
                allowNull:false
            },
            productContext:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            checkCount:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            price:{
                type:Sequelize.INTEGER,
                allowNull:true,
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW
            },
        })
    }
    static associate(db){
        db.Product.hasMany(db.MarkProduct,{ foreignKey: 'productId', sourceKey: 'id' });
        db.Product.hasMany(db.Chat,{ foreignKey: 'productId', sourceKey: 'id' });
        db.Product.belongsTo(db.User,{ foreignKey: 'productRegID', targetKey: 'id' });
        db.Product.belongsTo(db.productTag,{ foreignKey: 'productTag', targetKey: 'id' });
    }
}
module.exports=Product;