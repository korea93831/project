const Sequelize=require('sequelize');

class Notice extends Sequelize.Model{
    static initiate(sequelize){

        Notice.init({
            NoticeTitle:{
                type:Sequelize.STRING(40),
                allowNull:fatrlse
            },
            NoticeContext:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            NoticeTag:{
                type:Sequelize.STRING(20),
                allowNull:true
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
            }
        },
        {
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'Notice',
            tableName:'notices',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Notice.hasMany(db.Reply,{ foreignKey: 'noticeId', sourceKey: 'id' });
        db.Notice.hasMany(db.MarkNotice,{ foreignKey: 'noticeId', sourceKey: 'id' })
        db.Notice.belongsTo(db.User,{ foreignKey: 'noticeRegID', targetKey: 'id' });
    }
}
module.exports=Notice;