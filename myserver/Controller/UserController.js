// 引入注册的业务逻辑层
let UserService = require("../Services/UserService");
module.exports.register=function(req,res){
    // 解析前端提交过来的数据
    let username = req.body.username;
    let passwd = req.body.passwd;
    // 新建一个对象
    let userService = new UserService();
    // 调用业务逻辑层的register方法
    userService.register(username,passwd,function(data){
        res.json(data);
    })
}
module.exports.login=function(req,res) {
    // 解析前端提交过来的数据
    let username = req.body.username;
    let passwd = req.body.passwd;
    // 新建一个对象
    let userService = new UserService();
    // 调用业务逻辑层的login方法
    userService.login(username,passwd,function(data){
        res.json(data);
    })
}