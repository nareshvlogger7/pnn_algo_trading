require("dotenv").config(); 
const mysql = require("mysql2");
const urlBD= mysql.createConnection//root:oYxaHDcQlCVRGsWIStqxnHwmhjJQhNzH@mysql.railway.internal:3306/railway
const connection = mysql.createConnection(urlBD);
module.exports=connection;