const mongo =require("./database/connection.js");
const express = require('express');
const app = express();
const dotenv = require("dotenv");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const routes = require("./routes/index.route");
dotenv.config();


app.use("/", routes);
  

const main = async () => {
    const connect = await mongo.connectToDb();
    app.listen(process.env.PORT);
};

main();

// const productObj= new product({
//     "UserNo": 12,
//     "name": "User2",
//     "email": "user2@gmail.com",
//     "mobile_number": 1234567899,
//     "password": "password2"
// })

// try{
//   productObj.save();
// }catch(err){
//   console.log(err);
// }