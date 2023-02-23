/*
 * @Author: hrh
 * @Date: 2022-08-26 13:28:03
 * @LastEditTime: 2022-08-26 13:28:21
 * @LastEditors: hrh
 * @Description: 
 */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
 
//根据不同的功能 划分模块 (动态)
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/user',require('./routers/index.js'));
 
app.listen(3000,(res,req)=>{
    console.log('Node app start at port 3000');
});
