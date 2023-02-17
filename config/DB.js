//Load env variables
if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const mongoose = require('mongoose');

async function db() {
    try{
      mongoose.set("strictQuery", true);
      await mongoose.connect(process.env.DB_URL);
      console.log("Connected to dbs");
    }catch(err){
      console.log(err);
    }
    
}

module.exports = db;