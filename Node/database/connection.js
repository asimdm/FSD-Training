const mongoose = require('mongoose');
exports.connectToDb = async () => {
    mongoose.connect(process.env.MONGOOSE_URI,{useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err)
    });
};