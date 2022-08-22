if(process.env.NODE_ENV !== 'production') require('dotenv').config();


const mysql=require('mysql');
 

var db=mysql.createPool
(
      {
            user: process.env.dbUser,
            password: process.env.dbPassword,
            database: process.env.dbName,
            host: process.env.dbHost,
            port: process.env.dbPort,
            charset : 'utf8mb4'
      }

);


module.exports=db;