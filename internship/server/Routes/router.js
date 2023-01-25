const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/usersControllers.js")
const upload = require('../multerconfig/storageConfig.js')


//routes
router.post("/user/register", upload.single("user_profile"), controllers.userpost);


module.exports = router