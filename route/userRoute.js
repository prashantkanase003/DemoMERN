const express = require("express");
const {CreatePost} = require("../controller/userController.js");
const router = express.Router();


router.post("/create", CreatePost);

module.exports = router;