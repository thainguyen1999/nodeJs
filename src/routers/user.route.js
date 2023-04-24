const express = require("express");
const {models} = require("mongoose");
let router = express.Router();
let controller = require("../controllers/user.controller");


router.get("/", controller.get);
router.get("/creat-user", controller.createForm);
router.post("/creat-user",controller.save);

module.exports= router;


