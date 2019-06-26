'use strict';
const config = require("../config");
let url =  config.API_PREFIX;
const express = require('express')
let router = express.Router();
let fetch = require('node-fetch');

router.get("/one",(req, res)=>{
    fetch(url+"/todos/1")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            res.send({result:json});
        })
})

router.get("/two",(req, res)=>{
    fetch(url+"/todos/2")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            res.send({result:json});
        })
})

module.exports = router;