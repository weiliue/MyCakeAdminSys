let CartModel = require("../models/CartModel");
class CartService {
    constructor(){
        this.cartModel = new CartModel();
    }
    showCart(user_id,callback){
        this.cartModel.selectByUserID(user_id,function (data) {
           callback(data); 
        })
    }
    updateCount(pro_name,pro_count,user_id,callback){
        this.cartModel.updateCount(pro_name,pro_count,user_id,function (data) {
            callback(data); 
         })
    }
    deleteRecord(pro_name,user_id,callback){
        this.cartModel.deleteByProName(pro_name,user_id,function (data) {
            callback(data);
        })
    }
    deleteAllRecord(user_id,callback){
        this.cartModel.deleteAllRecord(user_id,function (data) {
            callback(data);
        })
    }
}
module.exports = CartService;