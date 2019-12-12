//引入对象
let SysModel = require("../Models/SysModel");

class SysService {
    constructor() {
        this.sysModel = new SysModel();
    }

    //查询所有商品信息显示到后台系统界面
    QueryProduct(callBack) {
        this.sysModel.queryProduct((data) => {
            // console.log(data)
            callBack(data);
        });
    }

    QueryBreadPro(callBack) {
        this.sysModel.queryBreadPro(function (data) {
            callBack(data);
        })
    }

    //删除商品
    DeleteProByID(id, callBack) {
        this.sysModel.deleteProByID(id, function (data) {
            callBack(data);
        })
    }

    //添加商品
    AddPro(name, infor, price, tagname, imgsrc, callBack) {
        this.sysModel.queryTagByName(tagname,(result)=>{
            let tagid = result[0].id;
            this.sysModel.addPro(name, infor, price, tagid, imgsrc, function (data) {
                callBack(data);
            });
        })
        
    }

    //修改商品
    UpdatePro(id, name, infor, price, tagname, imgsrc, callBack) {
        this.sysModel.queryTagByName(tagname, (result) => {
            // console.log(result)
            let tagid = result[0].id;
            this.sysModel.updatePro(id, name, infor, price, tagid, imgsrc, function (data) {
                callBack(data);
            });
        });
    }

    //查询一条商品信息
    QueryProByID(id, callBack) {
        this.sysModel.queryProByID(id, (data)=> {
            let tagid = data[0].tag_id;
            this.sysModel.queryTagByID(tagid,function (result) {
                // console.log(result);
                data[0].tag_title = result[0].tag_title;
                callBack(data);
            }); 
        })
    }

    SearchProByName(name, callBack) {
        this.sysModel.searchProByName(name, function (data) {
            callBack(data);
        })
    }

    //查询购物车所有信息
    QueryCartPro(callBack) {
        let that = this;
        this.sysModel.queryCartPro(function (data) {
            that.sysModel.queryUser(function (result) {

                for (let i = 0; i < data.length; i++) {
                    let userid = data[i].user_id;
                    for (let j = 0; j < result.length; j++) {
                        let id = result[j].id;
                        if (userid == id) {
                            data[i].userName = result[j].username;
                        }
                    }
                }
                // console.log(data)
                callBack(data);
            });

        })
    }

    //登录注册
    registerAdmin(adminname, passwd, callback) {
        let that = this;
        this.sysModel.queryByAdminName(adminname, function (data) {
            if (data.length == 0) {
                // 用户名不存在，插入数据
                that.sysModel.insertInfor(adminname, passwd, function (data) {
                    // console.log(data);
                    // 插入成功，返回true
                    if (data) {
                        callback({ flag: true });
                    }

                });
            } else { //否则,返回false,代表用户名已经存在
                callback({ flag: false });
            }
        })
    }
    loginAdmin(adminname, passwd, callback) {
        // 通过用户名查询
        this.sysModel.queryByAdminName(adminname, (data) => {
            // console.log(data);
            // 如果用户存在
            if (data.length) {
                // 判断密码是否正确
                if (passwd == data[0].password) {
                    callback({ login: 1, adName: data[0].name });
                } else { //密码不正确
                    callback({ login: 0 });
                }
            } else { //用户不存在
                callback({ login: -1 });
            }
        })
    }
}
module.exports = SysService;