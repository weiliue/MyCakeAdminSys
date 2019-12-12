//引入SqlBase
let SqlBase = require("./SqlBase");

class IndexModel extends SqlBase {
    constructor() {
        super();
    }

    //查询首页的分类信息
    queryTag(callBack) {
        let sql = `select * from tag`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("查询数据错误" + error);
                return;
            }
            callBack(data);
        });
    }
    //根据分类 tag_id 查询商品
    queryProByTagId(id, callBack) {
        let sql = `select * from product where tag_id = ${id} limit 4`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("查询数据错误" + error);
                return;
            }
            callBack(data);
        });
    }


    //根据分类id查询首页的分类信息
    // queryTagById(callBack){
    //     let sql = `select tag_title and pro_id from tag,product,pro_tag where tag.id = product.tag_id and product.id = pro_tag.pro_id`;
    //     this.connection.query(sql,function(error,data){
    //         if(error){
    //             console.log("查询数据错误"+error);
    //             return;
    //         }
    //         callBack(data);
    //     });
    // }

    //查询购物车的信息
    queryCart(id,name, callBack) {
        let sql = `select * from cart where name = '${name}' and user_id = ${id}`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("查询数据错误" + error);
                return;
            }
            callBack(data);
        });
    }

    //根据id查询商品信息
    queryProById(id, callBack) {
        let sql = `select * from product where id = ${id}`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("查询数据错误" + error);
                return;
            }
            callBack(data);
        });
    }
    queryBreadById(id, callBack) {
        let sql = `select * from bread where id = ${id}`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("查询数据错误" + error);
                return;
            }
            callBack(data);
        });
    }
    queryIcecreamById(id, callBack) {
        let sql = `select * from iceCream where id = ${id}`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("查询数据错误" + error);
                return;
            }
            callBack(data);
        });
    }
    queryCoffeeById(id, callBack) {
        let sql = `select * from coffee where id = ${id}`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("查询数据错误" + error);
                return;
            }
            callBack(data);
        });
    }

    //往购物车插入数据
    insertCartInfor(proImg, proNmae, proPrice, userId, count, callBack) {
        let sql = `insert into cart(cart_img,name,price,user_id,count) values('${proImg}','${proNmae}',${proPrice},${userId},${count})`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("插入数据错误" + error);
                return;
            }
            callBack(data);
        });
        this.connection.end();
    }

    //修改购物车的数据
    updataCartInfor(name, count, userId, callBack) {
        let sql = `update cart set count = ${count} where name = '${name}' and user_id = ${userId}`;
        // console.log(sql)
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("修改数据错误" + error);
                return;
            }
            callBack(data);
        });
        this.connection.end();
    }



    //查询分类的商品
    querySortPro(tagId, callBack) {
        let sql = `select * from product where tag_id = ${tagId}`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("修改数据错误" + error);
                return;
            }
            callBack(data);
        });
    }

    queryTagById(tagId, callBack) {
        let sql = `select * from tag where id = ${tagId}`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log("修改数据错误" + error);
                return;
            }
            callBack(data);
        });
    }

}
module.exports = IndexModel;