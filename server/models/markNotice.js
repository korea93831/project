const Sequelize=require('sequelize');

class MarkNotice extends Sequelize.Model{
    static initiate(sequelize){

        MarkNotice.init({ })
    }
    static associate(db){
        db.MarkNotice.belongsTo(db.User,{ foreignKey: 'userID', targetKey: 'id' });
        db.MarkNotice.belongsTo(db.Notice,{ foreignKey: 'noticeId', targetKey: 'id' });
    }
}
module.exports=MarkNotice;