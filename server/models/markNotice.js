const Sequelize=require('sequelize');

class MarkNotice extends Sequelize.Model{
    static initiate(sequelize){

        MarkNotice.init(
            { },
            {
                sequelize,
                timestamps:true,
                underscored:false,
                modelName:'MarkNotice',
                tableName:'marknotices',
                paranoid:false,
                charset:'utf8',
                collate:'utf8_general_ci'
            })
    }
    static associate(db){
        db.MarkNotice.belongsTo(db.User,{ foreignKey: 'userID', targetKey: 'id' });
        db.MarkNotice.belongsTo(db.Notice,{ foreignKey: 'noticeId', targetKey: 'id' });
    }
}
module.exports=MarkNotice;