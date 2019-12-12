let SqlBase = require("./SqlBase");
class msfUserModel extends SqlBase {
  constructor() {
    super();
  }

  selectByUserName(phone,callback) {
    let sql = `select * from user where phone = '${phone}'`;
    this.sqlQuery(sql, callback)
    
  }

  insert(username,phone,passwd,callback){
    let sql = `insert into user(username,phone,password) values('${username}','${phone}','${passwd}')`;
    this.sqlQuery(sql, callback)
}

}
module.exports = msfUserModel;



