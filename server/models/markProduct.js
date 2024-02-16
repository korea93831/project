const Sequelize=require('sequelize');

class MarkProduct extends Sequelize.Model{
    static initiate(sequelize){

        MarkProduct.init({ })
    }
    static associate(db){
        db.MarkProduct.belongsTo(db.User,{ foreignKey: 'userID', targetKey: 'id' });
        db.MarkProduct.belongsTo(db.Product,{ foreignKey: 'productId', targetKey: 'id' });
    }
}
module.exports=MarkProduct;