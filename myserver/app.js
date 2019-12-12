const express = require("express");

const app = express();

//引入fs
let fs = require('fs');

//跨域处理
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});


//引入(multer)文件上传模块
let multer = require('multer');
//设置静态文件
app.use(express.static('public'));


let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json())


//设置路由
//引入文件控制器
app.post(
	"/upload",
	multer({
		dest: __dirname + "/public/upload/imgs/"
	}).array("file"),
	function (req, res) {
		var responseJson = {
			code: "1" // 上传的文件信息
		};
		//原始文件的地址
		var src_path = req.files[0].path;
		//重新设置图片的名字
		var fileName = new Date().getTime() + ".jpg";
		//设置图片的地址
		var des_path = req.files[0].destination + fileName;

		// console.log(des_path);

		//修改文件名称，可更改文件的存放路径.oldPath 原路径;newPath 新路径
		fs.rename(src_path, des_path, function (err) {
			if (err) {
				throw err;
			}
			//获取文件信息,des_path 文件路径
			fs.stat(des_path, function (err, stat) {
				if (err) {
					throw err;
				}

				var path = "http://localhost:8888/upload/imgs/" + fileName;
				res.json({
					upload_file: path
				});
			});
		});
	}
);



//wle
//引入产品模块


//引入IndexController 首页模块
let IndexController = require("./Controller/IndexController");
app.get("/queryProByTagId", IndexController.QueryPro);
app.get("/queryTagInfor", IndexController.QueryTag);
app.get("/querySortProByTagId", IndexController.QuerySortPro);
app.get("/queryCartInfor", IndexController.QueryCart);
app.get("/updataCartCount", IndexController.UpdataCartCount);

//引入系统模块
let SysController = require("./Controller/SysController");
//查询
app.get("/queryPro", SysController.QueryProduct);
app.get("/queryBreadPro", SysController.QueryBreadPro);
app.get("/deleteProByID", SysController.DeleteProByID);
app.get("/queryProByID", SysController.QueryProByID);
app.get("/searchProByName", SysController.SearchProByName);
app.get("/queryCartPro", SysController.QueryCartPro);
//登录注册
app.post("/adminRegister", SysController.registerAdmin);
app.post("/adminLogin", SysController.loginAdmin);

//上传图片和添加、修改商品信息
app.post("/productAdd", urlencodedParser, SysController.AddPro);
app.post("/productUpdate", urlencodedParser, SysController.UpdatePro);

app.get("/insertCartInfor", IndexController.InsertCartInfor);
app.get("/insertBreadCartInfor", IndexController.InsertBreadCartInfor);
app.get("/insertIcecreamCartInfor", IndexController.InsertIcecreamCartInfor);
app.get("/insertCoffeeCartInfor", IndexController.InsertCoffeeCartInfor);




//bl
// 引入注册的控制层模块
let UserController = require("./Controller/UserController");
app.post("/login", UserController.login)
app.post("/register", UserController.register)

// 引入购物车的控制层模块
let CartController = require("./Controller/CartController")
app.post("/showCart", CartController.showCart)
app.post("/updateCount", CartController.updateCount)
app.post("/deleteRecord", CartController.deleteRecord)
app.post("/deleteAllRecord", CartController.deleteAllRecord)

// 引入产品的控制层模块
let ProductController = require("./Controller/ProductController");
app.post("/showPro", ProductController.showPro)
app.post("/showIceCream", ProductController.showIceCream)
app.post("/showBread", ProductController.showBread)
app.post("/showCoffee", ProductController.showCoffee)



// msf
let MsfProModel = require('./Models/MsfProModel');

// 获取蛋糕信息
app.get("/cake", (req, resp) => {
	let user = new MsfProModel();
	user.select(function (data) {
		resp.json(data);

	})
	// console.log("get...");
})

// 获取冰淇淋信息
app.get("/icecream", (req, resp) => {
	let user = new MsfProModel();
	user.selectI(function (data) {
		resp.json(data);

	})
	// console.log("get...");
})

// 获取下午茶咖啡信息
app.get("/coffee", (req, resp) => {
	let user = new MsfProModel();
	user.selectC(function (data) {
		resp.json(data);

	})
	// console.log("get...");
})

// 获取面包信息
app.get("/bread", (req, resp) => {
	let user = new MsfProModel();
	user.selectB(function (data) {
		resp.json(data);

	})
	// console.log("get...");
})

let msfUserController = require("./Controller/msfUserController");
app.get("/login",msfUserController.login)
app.get("/register",msfUserController.register)


// bl 

// 根据id获取冰淇淋信息
app.post("/showCake", (req, resp) => {
	let id = req.body.id;
	// console.log(id);
	let user = new MsfProModel();
	user.selectIByID(id,function(data){
	resp.json(data);
		
	})
	// console.log("get..."); 
})

// 根据id获取下午茶信息
app.post("/showCoffeeInfor", (req, resp) => {
	let id = req.body.id;
	let user = new MsfProModel();
	user.selectCByID(id,function(data){
	resp.json(data);
		
	})
	// console.log("get..."); 
})

// 根据id获取面包信息
app.post("/showBreadInfor", (req, resp) => {
	let id = req.body.id;
	let user = new MsfProModel();
	user.selectBByID(id,function(data){
	resp.json(data);
	})
	// console.log("get..."); 
})


//监听端口
app.listen(8888, function () {
	console.log("server runing in port 8888...")
});
