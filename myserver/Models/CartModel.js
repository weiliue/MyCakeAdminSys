let SqlBase = require("./SqlBase")
class CartModel extends SqlBase{
    constructor(){
        super();
    }
    selectByUserID(user_id,callback){
        let sql = `select * from cart where user_id = ${user_id}`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("购物车查询错误="+error);
            }
            callback(data);
        })
    }
    updateCount(pro_name,pro_count,user_id,callback){
        let sql = `update cart set count = ${pro_count} where name = '${pro_name}' and user_id='${user_id}'`;
        console.log(sql);
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("购物车更新数量错误"+error);
            }
            console.log(data);
            callback(data);
        })
    }
    deleteByProName(pro_name,user_id,callback){
        let sql = `delete from cart where name = '${pro_name}' and user_id='${user_id}'`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("删除购物车记录错误"+error);
            }
            callback(data);
        })
    }
    deleteAllRecord(user_id,callback){
        let sql = `delete from cart where user_id='${user_id}'`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("删除购物车所有记录错误"+error);
            }
            callback(data);
        })
    }
    
}
module.exports = CartModel;