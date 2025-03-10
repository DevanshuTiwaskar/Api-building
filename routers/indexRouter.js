const express = require('express')
const router = express.Router()
const userModel = require("../models/userModel")

// const data = require("../data")

// router.get("/",(req,res)=>{
//     res.render("index", {data} )
// })

router.post("/create",async (req, res)=>{
   try {
    const user = await userModel.create({
        name: req.body.name,
        username: req.body.username
    });
    res.send("user is create successfully")
   } catch (error) {
    res.send(error.message)
   }
});




module.exports = router