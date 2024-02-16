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
                unique:true
            },
            password:{
                type:Sequelize.STRING(100),
                allowNull:true
            },
            localMain:{
                type:Sequelize.INTEGER,
                allowNull:true,
                unique:true
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
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW
            },
            profile:{
                type:Sequelize.STRING(50),
                allowNull:true,
            }
        })
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