const userData = require("../database/models/Products");
const mongo = require("../database/connection");
// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

exports.getUserDetails = async (req, res)=> {
    try{
        const users = await userData.find();
        res.send({
            "statusCode": 200,
            "message": "Data of users",
            "data": users
        });
    }catch(error){
        res.send({
            "statusCode": 400,
            "message": "Data of users",
            "error": error.message
        });
    }
};

exports.setUserDetails = async (req, res) => {
    try{
        const userData1 = req.body;
        console.log(userData1);
        res.send(userData1);
    }catch(error){
        res.send(error.message);
    }
};