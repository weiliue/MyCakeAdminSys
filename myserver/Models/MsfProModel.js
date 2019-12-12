let SqlBase = require("./SqlBase");
class MsfProModel extends SqlBase {
  constructor() {
    super();
  }

// 获取蛋糕
  select(callback) {
    let sql = `select * from product`;
    // console.log(sql)
    this.sqlQuery(sql, callback)
  }
  
  // 获取面包
  selectB(callback) {
    let sql = `select * from bread`;
    // console.log(sql)
    this.sqlQuery(sql, callback)
  }
  
  // 获取冰淇淋
  selectI(callback) {
    let sql = `select * from iceCream`;
    // console.log(sql)
    this.sqlQuery(sql, callback)
  }
  
  // 获取下午茶
  selectC(callback) {
    let sql = `select * from coffee`;
    // console.log(sql)
    this.sqlQuery(sql, callback)
  }

  //bl
  //根据id获取面包信息
  selectBByID(id, callback) {
    let sql = `select * from bread where id = ${id}`;
    // console.log(sql)
    this.sqlQuery(sql, callback)
  }
  //根据id获取冰淇淋信息
  selectIByID(id, callback) {
    let sql = `select * from iceCream where id = ${id}`;
    // console.log(sql)
    this.sqlQuery(sql, callback)
  }
  //根据id获取下午茶信息
  selectCByID(id, callback) {
    let sql = `select * from coffee where id = ${id}`;
    // console.log(sql)
    this.sqlQuery(sql, callback)
  }
  
}
module.exports = MsfProModel;



