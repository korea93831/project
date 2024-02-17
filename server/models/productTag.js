const Sequelize=require('sequelize');

class ProductTag extends Sequelize.Model{
    static initiate(sequelize){

        ProductTag.init({
            tagName:{
                type: Sequelize.STRING(10),
                allowNull:false
            }
        },
        {
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'ProductTag',
            tableName:'producttags',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.ProductTag.belongsTo(db.Product,{ foreignKey: 'productTag', targetKey: 'id' });
    }
}
module.exports=ProductTag;