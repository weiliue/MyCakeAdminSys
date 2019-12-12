//引入SqlBase
let SqlBase = require("./SqlBase");

class SysModel extends SqlBase{
    constructor(){
        super();
    }

    //查询首页的商品id
    queryProduct(callBack){
        let sql = `select * from product`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }
     //查询分类表的信息
     queryTagByID(id,callBack){
        let sql = `select * from tag where id = ${id}`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }
    queryTagByName(name,callBack){
        let sql = `select * from tag where tag_title = '${name}'`;
        
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }

    //查询面包表的信息
    queryBreadPro(callBack){
        let sql = `select * from bread`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }

    //删除商品
    deleteProByID(id,callBack){
        let sql = `delete from product where id = ${id}`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
        this.connection.end();
    }

    //添加商品
    addPro(name,infor,price,tagid,imgsrc,callBack){
        let sql = `insert into product(pro_name,pro_infor,pro_price,tag_id,pro_img) values('${name}','${infor}','${price}','${tagid}','${imgsrc}')`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("添加数据错误"+error);
                return;
            }
            callBack(data);
        });
        this.connection.end();
    }

    //修改商品
    updatePro(id,name,infor,price,tagid,imgsrc,callBack){
        let sql = `update product set pro_name = '${name}',pro_infor = '${infor}',pro_price = '${price}',pro_img = '${imgsrc}',tag_id = '${tagid}' where id = '${id}'`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("添加数据错误"+error);
                return;
            }
            callBack(data);
        });
        this.connection.end();
    }

    //查询商品根据id
    queryProByID(id,callBack){
        let sql = `select * from product where id = ${id}`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }
    

    //查询商品根据name
    searchProByName(name,callBack){
        let sql = `select * from product where pro_name like '%${name}%'`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }

    //查询购物车所有商品
    queryCartPro(callBack){
        let sql = `select * from cart`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }

    //查看用户
    queryUser(callBack){
        let sql = `select * from user`;
        // console.log(sql)
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("查询数据错误"+error);
                return;
            }
            callBack(data);
        });
    }

    //登录、注册
    // 通过用户名查询用户
    queryByAdminName(adminname,callback){
        let sql = `select * from admin where name = '${adminname}'`;
        this.connection.query(sql,function (error,data) {
            if(error){
                console.log("查询用户错误="+error);
            }
            callback(data);
        })
    }
    // 插入数据库(注册)
    insertInfor(adminname,passwd,callback){
        let sql = `insert into admin(name,password) values('${adminname}','${passwd}')`;
        this.connection.query(sql,function(error,data){
            if(error){
                console.log("插入用户错误="+error);
            }
            callback(data);
        })
    }
}
module.exports = SysModel;