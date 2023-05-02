const mysql = require('mysql');
require('dotenv').config();

class config {
    static port = process.env.PORT;
    static addresses(){
         const address = mysql.createPool({
            connectionLimit : 10,
            host            : process.env.host,
            user            : process.env.user,
            password        : process.env.password,
            database        : process.env.database,
            debug : false
        })
        return address
    }
    static addressesCilent(){
        const client = mysql.createConnection({
            connectionLimit : 10,
            host            : process.env.host,
            user            : process.env.user,
            password        : process.env.password,
            database        : process.env.database,
            debug : false
          })
          return client
    }
    

}



module.exports = config;