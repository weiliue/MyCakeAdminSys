let msfUserService = require("../Services/msfUserService");

// 登录
module.exports.login=function(req,res) {
    let phone = req.query.phone;
    let passwd = req.query.passwd;
	// console.log(phone,passwd);
    let msfuserService = new msfUserService();
    msfuserService.login(phone,passwd,function(data){
        res.json(data);
    })
}


// 注册
module.exports.register=function(req,res){
	let username = req.query.username;
    let phone = req.query.phone;
    let passwd = req.query.passwd;
    let msfuserService = new msfUserService();
    msfuserService.register(username,phone,passwd,function(data){
        res.json(data);
    })
}


