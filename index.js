const express = require("express");
const dotenv = require("dotenv");
const data = require("./data.js");
const connectionDB = require("./db/conn.js");
const userRouter = require("./route/userRoute.js")



dotenv.config();
const PORT = process.env.PORT || 1000;
const app = express();



app.use(express.json())
connectionDB();



// app.get("/", (req, res)=>{
//     console.log("app running");
//     res.json({data})
// });

// app.get("/about", (req, res)=>{
//     res.send({
//         "message": "running",
//         "length": data.length,
//     })
// })



app.use("/api/user", userRouter);

app.listen(PORT, ()=>{
    console.log(`port listening ${PORT}`);
})