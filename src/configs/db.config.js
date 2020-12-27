const mysql = require('mysql')

const mySqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'',
    database:'app_test_api_nodejs'
})
mySqlConnection.connect();

module.exports = mySqlConnection