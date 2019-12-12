class SqlBase{
    constructor(){
        let mysql = require("mysql");
        this.connection = mysql.createConnection({
            host:"47.94.96.106",
            user:"root",
            password:"lichen@123",
            port:"3306",
            database:"myCake"
        });
        this.connection.connect();
    }

    sqlQuery(sql, callback) {

        this.connection.query(sql, function (err, data) {
            if (err) {
                console.log("错误：" + err)
                return
            }
          callback(data)
        //   console.log(data);
          
        })

    }
    
}
module.exports = SqlBase;