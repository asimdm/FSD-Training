const userModel = require("../database/models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.signup = async (req, res) => {
  try {
    const userData = req.body;
    console.log(req.userId)
    const userExists = await userModel.findOne({ email: userData.email });

    if (userExists) {
      res.send({
        statusCode: 200,
        message: "User already exists. Please try to login",
        error: false,
        data: userExists,
      });
    }else{

    const hash = crypto.createHash("sha1");
    hash.update(userData.password + process.env.SALT);
    const hashPassword = hash.digest("hex");

    const newUser = new userModel({
      name: userData.name,
      email: userData.email,
      password: hashPassword,
      mobile_number: userData.mobile_number,
      dob: userData.dob,
      address: userData.address,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);
    res.send({
      statusCode: 200,
      message: "User created successfully",
      error: false,
      data: newUser,
      token: token,
    });
  }} catch (error) {
    res.send({
      statusCode: 400,
      message: error.message,
      error: true,
      data: null,
    });
  }
};

exports.signin = async (req,res) => {
    try{
        const userData = req.body;
        const hash = crypto.createHash("sha1");
        hash.update(userData.password + process.env.SALT);
        const hashPassword = hash.digest("hex");
        const existCheck = await userModel.findOne({email: userData.email, password: hashPassword});
        if(existCheck){
            const token = jwt.sign({ userId: existCheck._id }, process.env.SECRET_KEY);
            res.send({
                "statusCode": 200,
                "message": "Logged In",
                "error": false,
                "data": existCheck,
                "token": token
            })
        }
        else{
            res.send({
                "statusCode": 400,
                "message": "User not found. Create a new user",
                "error": true,
            })
        }
    }catch (error) {
        res.send({
          statusCode: 400,
          message: error.message,
          error: true,
          data: null,
        });
    }
}