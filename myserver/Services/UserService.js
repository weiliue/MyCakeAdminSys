 let UserModel = require("../models/UserModel");
class UserService{
    constructor(){
        this.userModel = new UserModel();
    }
    register(username,passwd,callback){
        let that =this;
        this.userModel.selectByUserName(username,function(data){
            if(data.length == 0){
                // 用户名不存在，插入数据
                that.userModel.insert(username,passwd,function (data) {
                    // console.log(data);
                    // 插入成功，返回true
                    if(data){
                        callback({flag:true});
                    }
                    
                });
            }else{ //否则,返回false,代表用户名已经存在
                callback({flag:false});
            }
        })
    }
    login(username,passwd,callback){
        // 通过用户名查询
        this.userModel.selectByUserName(username,(data)=>{
            // console.log(data);
            // 如果用户存在
            if(data.length){
                // 判断密码是否正确
                if(passwd == data[0].password){
                    callback({login:1,userID: data[0].id,userName:data[0].username});
                }else{ //密码不正确
                    callback({login:0});
                }
            }else{ //用户不存在
                callback({login:-1});
            }
        })
    }
}
module.exports = UserService;