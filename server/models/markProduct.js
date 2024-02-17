const Sequelize=require('sequelize');

class MarkProduct extends Sequelize.Model{
    static initiate(sequelize){

        MarkProduct.init(
            { }
            ,
            {
                sequelize,
                timestamps:true,
                underscored:false,
                modelName:'MarkProduct',
                tableName:'markproducts',
                paranoid:false,
                charset:'utf8',
                collate:'utf8_general_ci'
            })
    }
    static associate(db){
        db.MarkProduct.belongsTo(db.User,{ foreignKey: 'userID', targetKey: 'id' });
        db.MarkProduct.belongsTo(db.Product,{ foreignKey: 'productId', targetKey: 'id' });
    }
}
module.exports=MarkProduct;