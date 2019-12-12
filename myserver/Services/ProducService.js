let ProductModel = require("../models/ProductModel")
class ProducService {
    constructor(){
        this.productModel = new ProductModel();
    }
    showPro(pro_id,callback){
        this.productModel.selectByID(pro_id,function (data) {
            callback(data);
        })
    }
    showBread(bre_id,callback){
        console.log(bre_id);
        
        this.productModel.selectByBreadID(bre_id,function (data) {
            callback(data);
        })
    }
    showIceCream(ice_id,callback){
        this.productModel.selectByIceCreamID(ice_id,function (data) {
            callback(data);
        })
    }
    showCoffee(coff_id,callback){
        this.productModel.selectByCoffeeID(coff_id,function (data) {
            callback(data);
        })
    }



}
module.exports = ProducService;