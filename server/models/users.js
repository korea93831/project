const Sequelize=require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize){

        User.init({
            email:{
                type: Sequelize.STRING(40),
                allowNull:false,
                unique:true
            },
            nickname:{
                type:Sequelize.STRING(15),
                allowNull:false,
                unique:false
            },
            password:{
                type:Sequelize.STRING(100),
                allowNull:true
            },
            localMain:{
                type:Sequelize.STRING(10),
                allowNull:true,
                unique:false
            },
            localSub:{
                type:Sequelize.STRING(40),
                allowNull:true,
                unique:false
            },
            score:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            profile:{
                type:Sequelize.STRING(50),
                allowNull:true,
            },
        },
        {
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
    static associate(db){
        db.User.hasMany(db.Notice,{foreignKey:'noticeRegID',sourceKey:'id'});
        db.User.hasMany(db.Product,{foreignKey:'productRegID',sourceKey:'id'});
        db.User.hasMany(db.Reply,{foreignKey:'userID',sourceKey:'id'});
        db.User.hasMany(db.Chat,{foreignKey:'sendChatter',sourceKey:'id'});
        db.User.hasMany(db.Chat,{foreignKey:'catchChatter',sourceKey:'id'});
        db.User.hasMany(db.MarkProduct,{foreignKey:'userID',sourceKey:'id'});
        db.User.hasMany(db.MarkNotice,{foreignKey:'userID',sourceKey:'id'})
    }
}

module.exports=User;