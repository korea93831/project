const Sequelize=require('sequelize');

class Reply extends Sequelize.Model{
    static initiate(sequelize){

        Reply.init({
            replyContext:{
                type:Sequelize.TEXT,
                allowNull:false
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW
            },
        })
    }
    static associate(db){
        db.Reply.belongsTo(db.User,{ foreignKey: 'userID', targetKey: 'id' });
        db.Reply.belongsTo(db.Notice,{ foreignKey: 'noticeId', targetKey: 'id' });
    }
}
module.exports=Reply;