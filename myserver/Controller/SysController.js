//引入SysService
let SysService = require("../Services/SysService");

module.exports.QueryProduct = function(req,res){
    let sysService = new SysService();
    sysService.QueryProduct(function(data){
        res.json(data);
    })
}

module.exports.QueryBreadPro = function(req,res){
    let sysService = new SysService();
    sysService.QueryBreadPro(function(data){
        res.json(data);
    })
}

//增删改
module.exports.AddPro = function(req,res){
    let name = req.body.name;
    let infor = req.body.infor;
    let price = req.body.price;
    let tagname = req.body.tag_title;
    let imgsrc = req.body.pro_img;
    let sysService = new SysService();
    sysService.AddPro(name,infor,price,tagname,imgsrc,function(data){
        res.json(data);
    })
}

module.exports.UpdatePro = function(req,res){
    let id = req.body.id;
    let name = req.body.name;
    let infor = req.body.infor;
    let price = req.body.price;
    let tagname = req.body.tagname;
    let imgsrc = req.body.pro_img;
    let sysService = new SysService();
    sysService.UpdatePro(id,name,infor,price,tagname,imgsrc,function(data){
        res.json(data);
    })
}

module.exports.DeleteProByID = function(req,res){
    let id = req.query.id;
    let sysService = new SysService();
    sysService.DeleteProByID(id,function(data){
        res.json(data);
    })
}

module.exports.QueryProByID = function(req,res){
    let id = req.query.id;
    let sysService = new SysService();
    sysService.QueryProByID(id,function(data){
        res.json(data);
    })
}

module.exports.SearchProByName = function(req,res){
    let name = req.query.name;
    let sysService = new SysService();
    sysService.SearchProByName(name,function(data){
        res.json(data);
    })
}

module.exports.QueryCartPro = function(req,res){
    let sysService = new SysService();
    sysService.QueryCartPro(function(data){
        res.json(data);
    })
}

//登录注册
module.exports.registerAdmin=function(req,res){
    // 解析前端提交过来的数据
    let adminname = req.body.name;
    let passwd = req.body.passwd;
    // 新建一个对象
    let sysService = new SysService();
    // 调用业务逻辑层的register方法
    sysService.registerAdmin(adminname,passwd,function(data){
        res.json(data);
    })
}
module.exports.loginAdmin=function(req,res) {
    // 解析前端提交过来的数据
    let adminname = req.body.name;
    let passwd = req.body.passwd;
    // 新建一个对象
    let sysService = new SysService();
    // 调用业务逻辑层的login方法
    sysService.loginAdmin(adminname,passwd,function(data){
        res.json(data);
    })
}

