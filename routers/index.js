/*
 * @Author: hrh
 * @Date: 2022-08-26 13:28:41
 * @LastEditTime: 2022-10-10 09:56:27
 * @LastEditors: hrh
 * @Description: 中转资源请求
 */
const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/download', function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", req.headers.origin);
  const url = req.query.url;
  const options = {
    method: "GET",
    url: url,
    headers: {
      // "Referer": request.host,

    }
  };
  request(options).pipe(res);
});

module.exports = router;
