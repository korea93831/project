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
            }
        },
        {
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Product',
            tableName:'products',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Product.hasMany(db.MarkProduct,{ foreignKey: 'productId', sourceKey: 'id' });
        db.Product.hasMany(db.Chat,{ foreignKey: 'productId', sourceKey: 'id' });
        db.Product.belongsTo(db.User,{ foreignKey: 'productRegID', targetKey: 'id' });
        db.Product.belongsTo(db.ProductTag,{ foreignKey: 'productTag', targetKey: 'id' });
    }
}
module.exports=Product;