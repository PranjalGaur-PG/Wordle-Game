const mongoose = require("mongoose");
require('dotenv').config();


const connectDB = async () => {
    try {

        await mongoose.connect(process.env.mongo_uri);
        console.log("MongoDB connected !");

    } catch(err) {

        console.log(err.message);
        process.exit(1);

    }
};

module.exports = connectDB;