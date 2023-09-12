const data = require("../data.js")
const User = require("../model/userModel.js")
const CreatePost = async (req, res) => {
    try{
        const {name, roll} = req.body;


        const user = await User.create({name, roll});

        if(user){
            res.send({
                message: "user created",
                user,
            })
        }


    }catch(err){
        console.log(err);
    }
}

module.exports =  {CreatePost};