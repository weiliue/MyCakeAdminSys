//引入IndexServie
let IndexServie = require("../Services/IndexService");

module.exports.QueryCart = function(req,res){
    //解析前端提交过来的数据
    let proname = req.query.name;
    let userId = req.query.userId;
    let indexServie = new IndexServie();
    indexServie.QueryCart(userId,proname,function(data){
        res.json(data);
    });
}

//查询首页的商品信息
module.exports.QueryPro = function(req,res){
    let indexServie = new IndexServie();
    indexServie.QueryPro(function(data){
        res.json(data);
    });
}

module.exports.InsertCartInfor = function(req,res){
    //解析前端提交过来的数据
    let id = req.query.id;
    let userId = req.query.userId;
    // console.log(id)
    let indexServie = new IndexServie();
    indexServie.InsertCartInfor(id,userId,function(data){
        res.json(data);
    });
}
module.exports.InsertBreadCartInfor = function(req,res){
    //解析前端提交过来的数据
    let id = req.query.id;
    let userId = req.query.userId;
    // console.log(id)
    let indexServie = new IndexServie();
    indexServie.InsertBreadCartInfor(id,userId,function(data){
        res.json(data);
    });
}
module.exports.InsertIcecreamCartInfor = function(req,res){
    //解析前端提交过来的数据
    let id = req.query.id;
    let userId = req.query.userId;

    // console.log(id)
    let indexServie = new IndexServie();
    indexServie.InsertIcecreamCartInfor(id,userId,function(data){
        res.json(data);
    });
}
module.exports.InsertCoffeeCartInfor = function(req,res){
    //解析前端提交过来的数据
    let id = req.query.id;
    let userId = req.query.userId;

    // console.log(id)
    let indexServie = new IndexServie();
    indexServie.InsertCoffeeCartInfor(id,userId,function(data){
        res.json(data);
    });
}

module.exports.UpdataCartCount = function(req,res){
    //解析前端提交过来的数据
    let name = req.query.name;
    let count = req.query.count;
    let userId = req.query.userId;
    // console.log(id)
    let indexServie = new IndexServie();
    indexServie.UpdataCartCount(name,count,userId,function(data){
        res.json(data);
    });
}




//分类（sort）的服务器代码
module.exports.QuerySortPro = function(req,res){
    let tagId = req.query.id;
    let indexServie = new IndexServie();
    indexServie.QuerySortPro(tagId,function(data){
        res.json(data);
    });
}

module.exports.QueryTag = function(req,res){
    let tagId = req.query.id;
    let indexServie = new IndexServie();
    indexServie.QueryTag(tagId,function(data){
        res.json(data);
    });
}


