const Sequelize=require('sequelize');

class Reply extends Sequelize.Model{
    static initiate(sequelize){

        Reply.init({
            replyContext:{
                type:Sequelize.TEXT,
                allowNull:false
            }
        },
        {
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Reply',
            tableName:'reples',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Reply.belongsTo(db.User,{ foreignKey: 'userID', targetKey: 'id' });
        db.Reply.belongsTo(db.Notice,{ foreignKey: 'noticeId', targetKey: 'id' });
    }
}
module.exports=Reply;