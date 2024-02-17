const Sequelize=require('sequelize');

class Chat extends Sequelize.Model{
    static initiate(sequelize){

        Chat.init({
            chatContext:{
                type: Sequelize.TEXT,
                allowNull:true
            }
        },
        {
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Chat',
            tableName:'chats',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Chat.belongsTo(db.User,{ foreignKey: 'sendChatter', targetKey: 'id' });
        db.Chat.belongsTo(db.User,{ foreignKey: 'catchCatter', targetKey: 'id' });
        db.Chat.belongsTo(db.Product,{ foreignKey: 'productId', targetKey: 'id' });
    }
}
module.exports=Chat;