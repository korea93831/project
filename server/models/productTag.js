const Sequelize=require('sequelize');

class productTag extends Sequelize.Model{
    static initiate(sequelize){

        productTag.init({
            tagName:{
                type: Sequelize.STRING(10),
                allowNull:false
            }
        })
    }
    static associate(db){
        db.productTag.belongsTo(db.Product,{ foreignKey: 'productTag', targetKey: 'id' });
    }
}
module.exports=productTag;