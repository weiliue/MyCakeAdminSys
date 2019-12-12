let msfUserModel = require("../models/msfUserModel");
class msfUserService {
	constructor() {
		this.msfuserModel = new msfUserModel();
	}

	// 登录
	login(phone, passwd, callback) {
		console.log("passwd----" + passwd)
		let obj = {
			msg: '登录'
		};
		this.msfuserModel.selectByUserName(phone, (data) => {
			if (data.length != 0) {
				// console.log("data-----" + JSON.stringify(data[0]))
				if (passwd === data[0].password) {
					obj.msg = '登录成功';
					obj.userID = data[0].id;
					obj.phone = data[0].phone;
				} else {
					obj.msg = '账号错误'
				}
				callback(obj)
				// console.log(obj)
			}
		})
	}

	// 注册
	register(username,phone, passwd, callback) {
		let that = this;
		this.msfuserModel.selectByUserName(phone, function(data) {
			if (data.length == 0) {
				that.msfuserModel.insert(username,phone, passwd, function(data) {
					console.log(data);
					if (data) {
						callback({
							msg:'注册成功'
						});
					}
				});
			} else { 
				callback({ msg: '注册失败' });
				res.json(data);
			}
		})
	}

}
module.exports = msfUserService;
