const mongoose = require("mongoose");

module.exports.connectToMongoDb = async () => {
    mongoose.set('strictQuery', false);
    mongoose
    .connect(process.env.URL_MONGO)
    .then(() => { 
        console.log("connnect to db");
    })
    .catch((err) => {
    console.log(err);
    });
};