module.exports.showPro = function (req,res) {
    let pro_id = req.body.pro_id
    let ProducService = require("../Services/ProducService");
    let producService = new ProducService();
    producService.showPro(pro_id,function (data) {
        res.json(data);
    })
}

module.exports.showBread = function (req,res) {
    let bre_id = req.body.bre_id;
    console.log(bre_id);
    
    let ProducService = require("../Services/ProducService");
    let producService = new ProducService();
    producService.showBread(bre_id,function (data) {
        res.json(data);
    })
}

module.exports.showIceCream = function (req,res) {
    let ice_id = req.body.ice_id
    let ProducService = require("../Services/ProducService");
    let producService = new ProducService();
    producService.showIceCream(ice_id,function (data) {
        res.json(data);
    })
}

module.exports.showCoffee = function (req,res) {
    let coff_id = req.body.coff_id
    let ProducService = require("../Services/ProducService");
    let producService = new ProducService();
    producService.showCoffee(coff_id,function (data) {
        res.json(data);
    })
}