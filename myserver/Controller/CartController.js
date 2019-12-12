module.exports.showCart = function(req,res) {
    let user_id = req.body.user_id;
    // 引入购物车的业务逻辑层
    let CartService = require("../Services/CartService");
    // 新建一个对象
    let cartService = new CartService();
    cartService.showCart(user_id,function(data) {
        res.json(data);
    })
}
module.exports.updateCount=function (req,res) {
    let pro_name=req.body.pro_name;
    let pro_count=req.body.pro_count;
    let user_id = req.body.user_id;
    // 引入购物车的业务逻辑层
    let CartService = require("../Services/CartService");
    // 新建一个对象
    let cartService = new CartService();
    cartService.updateCount(pro_name,pro_count,user_id,function(data) {
        res.json(data);
    })
}
module.exports.deleteRecord = function (req,res) {
    let pro_name = req.body.pro_name;
    let user_id = req.body.user_id;
    // 引入购物车的业务逻辑层
    let CartService = require("../Services/CartService");
    // 新建一个对象
    let cartService = new CartService();
    cartService.deleteRecord(pro_name,user_id,function (data) {
        res.json(data);
    })
}
module.exports.deleteAllRecord = function (req,res) {
    let user_id = req.body.user_id;
    // 引入购物车的业务逻辑层
    let CartService = require("../Services/CartService");
    // 新建一个对象
    let cartService = new CartService();
    cartService.deleteAllRecord(user_id,function (data) {
        res.json(data);
    })
}