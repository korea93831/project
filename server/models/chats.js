const Sequelize=require('sequelize');

class Chat extends Sequelize.Model{
    static initiate(sequelize){

        Chat.init({
            chatContext:{
                type: Sequelize.TEXT,
                allowNull:true
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW
            }
        })
    }
    static associate(db){
        db.Chat.belongsTo(db.User,{ foreignKey: 'sendChatter', targetKey: 'id' });
        db.Chat.belongsTo(db.User,{ foreignKey: 'catchCatter', targetKey: 'id' });
        db.Chat.belongsTo(db.Product,{ foreignKey: 'productId', targetKey: 'id' });
    }
}
module.exports=Chat;