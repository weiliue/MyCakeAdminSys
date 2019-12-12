let SqlBase = require("./SqlBase")

class ProductModel extends SqlBase{
    constructor(){
        super();
    }
    // 根据产品id查询数据
    selectByID(id,callback){
        let sql = `select * from product where id = ${id}`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("查询产品错误="+error);
            }
            callback(data);
        })
    }

    selectByBreadID(id,callback){
        
        let sql = `select * from bread where id = '${id}'`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("查询产品错误="+error);
            }
            callback(data);
        })
    }

    selectByCoffeeID(id,callback){
        let sql = `select * from coffee where id = '${id}'`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("查询产品错误="+error);
            }
            callback(data);
        })
    }


    selectByIceCreamID(id,callback){
        let sql = `select * from iceCream where id = '${id}'`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("查询产品错误="+error);
            }
            callback(data);
        })
    }
}
module.exports = ProductModel;