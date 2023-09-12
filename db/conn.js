const mongoose = require("mongoose");

const connectionDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        if(conn){
            console.log("connection Successfull");
            console.log(`host : ${conn.connection.host}`);
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = connectionDB;