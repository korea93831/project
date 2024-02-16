const Sequelize=require('sequelize');

class Notice extends Sequelize.Model{
    static initiate(sequelize){

        Notice.init({
            NoticeTitle:{
                type:Sequelize.STRING(40),
                allowNull:false
            },
            NoticeContext:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            goodCount:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            repleCount:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW
            },
        })
    }
    static associate(db){
        db.Notice.hasMany(db.Reply,{ foreignKey: 'noticeId', sourceKey: 'id' });
        db.Notice.hasMany(db.MarkNotice,{ foreignKey: 'noticeId', sourceKey: 'id' })
        db.Notice.belongsTo(db.User,{ foreignKey: 'noticeRegID', targetKey: 'id' });
    }
}
module.exports=Notice;