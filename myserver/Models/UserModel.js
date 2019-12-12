let SqlBase = require("./SqlBase");
class UserModel extends SqlBase{
    constructor(){
        super();
    }
    // 通过用户名查询用户
    selectByUserName(username,callback){
        let sql = `select * from user where username = '${username}'`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("查询用户错误="+error);
            }
            callback(data);
        })
    }
    // 插入数据库
    insert(username,passwd,callback){
        let sql = `insert into user(username,password) values('${username}','${passwd}')`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("插入用户错误="+error);
            }
            callback(data);
        })
    }
}
module.exports = UserModel;