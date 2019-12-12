//引入对象
let IndexModel = require("../Models/IndexModel");

class IndexService {
    constructor() {
        this.indexModel = new IndexModel();
    }

    // 查询到商品（product）的信息
    QueryPro(callBack) {
        let that = this;
        this.indexModel.queryTag(function (data) {//分类的数据
            for (let i = 0; i < data.length; i++) {
                let tagId = data[i].id;

                //查询商品（product）的信息
                that.indexModel.queryProByTagId(tagId, function (result) {
                    data[i].proInfor = result;
                    if (i == result.length) {
                        callBack(data);
                    }
                })
            }
        });
    }


    // 查询到购物车（cart）的信息
    QueryCart(id,name,callBack) {
        let obj = {
            msg:-1,
            cartData:[]
        };
        this.indexModel.queryCart(id,name,function (data) {
            // console.log(data)
            if(data.length == 0){
                obj.msg = 0;
            }else{
                obj.msg = 1;
                obj.cartData = data;
            }
            callBack(obj);
        });
    }

    //根据（pro_id）插入商品信息(product表)
    InsertCartInfor(id,userId,callBack) {
        let that = this;
       
        this.indexModel.queryProById(id,function (data) {
            // console.log(data)
            let proImg = data[0].pro_img;
            let proNmae = data[0].pro_name;
            let proPrice = data[0].pro_price;
            //let userId = 1;
            let count = 1;

            console.log(userId)

            that.indexModel.insertCartInfor(proImg,proNmae,proPrice,userId,count,function(result){
                callBack(result);
            });
        });
    }
    //根据（pro_id）插入商品信息（bread）表
    InsertBreadCartInfor(id,userId,callBack) {
        let that = this;
       
        this.indexModel.queryBreadById(id,function (data) {
            // console.log(data)
            let proImg = data[0].bre_img;
            let proNmae = data[0].bre_name;
            let proPrice = data[0].bre_price;
            let count = 1;
            // console.log(proImg,proNmae,proPrice)

            that.indexModel.insertCartInfor(proImg,proNmae,proPrice,userId,count,function(result){
                callBack(result);
            });
        });
    }
    //根据（pro_id）插入商品信息（icecream）
    InsertIcecreamCartInfor(id,userId,callBack) {
        let that = this;
       
        this.indexModel.queryIcecreamById(id,function (data) {
            // console.log(data)
            let proImg = data[0].ice_img;
            let proNmae = data[0].ice_name;
            let proPrice = data[0].ice_price;
            let count = 1;
            // console.log(proImg,proNmae,proPrice)

            that.indexModel.insertCartInfor(proImg,proNmae,proPrice,userId,count,function(result){
                callBack(result);
            });
        });
    }
    //根据（pro_id）插入商品信息（coffee）
    InsertCoffeeCartInfor(id,userId,callBack) {
        let that = this;
       
        this.indexModel.queryCoffeeById(id,function (data) {
            // console.log(data)
            let proImg = data[0].coff_img;
            let proNmae = data[0].coff_name;
            let proPrice = data[0].coff_price;
            let count = 1;
            // console.log(proImg,proNmae,proPrice)

            that.indexModel.insertCartInfor(proImg,proNmae,proPrice,userId,count,function(result){
                callBack(result);
            });
        });
    }

    UpdataCartCount(name,count,userId,callBack) {
        let obj = {
            msg:"修改数据成功"
        };
        this.indexModel.updataCartInfor(name,count,userId,function (data) {    
            callBack(obj);
        });
    }


    //分类（sort）信息根据tagid
    QuerySortPro(tagId,callBack){
        this.indexModel.querySortPro(tagId,function(data){
            // console.log(data)
            callBack(data);
        });
    }

    QueryTag(tagId,callBack){
        this.indexModel.queryTagById(tagId,function(data){
            // console.log(data)
            callBack(data);
        });
    }














    //查询所有商品信息
    // QueryProByTagId(callBack){
    //     let that = this;
    //     let obj = {};

    //     // 查询到分类（tag）的信息
    //     this.indexModel.queryTag(function(data){

    //         for(let i = 0; i < data.length; i++){
    //             let tagId = data[i].id;
    //             let tag_img = data[i].tag_img;
    //             let tag_name = data[i].tag_title;

    //             //查询商品（product）的信息
    //             that.indexModel.queryProByTagId(tagId,function(result){
    //                 for(let j = 0; j < result.length; j++){
    //                     result[j].tagImg = tag_img;
    //                     result[j].tagName = tag_name;
    //                     obj["key" + tagId] = result;//把数组放到一个对象里面
    //                 }

    //                 if(i == result.length){
    //                     callBack(obj);
    //                 }
    //             })
    //         }
    //     });
    // }
}
module.exports = IndexService;