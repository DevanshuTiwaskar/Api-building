const express = require('express')
const router = express.Router()
const userModel = require("../models/userModel")

// const data = require("../data")

// router.get("/",(req,res)=>{
//     res.json(data)
// })

// router.post("/create",async (req, res)=>{
//     try {
//         const user = await userModel.create({
//             name: req.body.name,
//             username: req.body.username
    
//         });
//         res.json({ success: true, message: "user create successfully`"  })
//     } catch (error) {
//         res.json({  success: false, messsage: error.message })
//     }
// });


// const users = [
//     {_id: "1", name: "dev"},
//     {_id: "2", name: "devanshu"},
// ]

// showing all user in users array
// router.get("/user", (req, res) =>{
//     res.json(users)
// })


// find a user in users array
// router.get("/user/:id", (req,res)=>{
//     const found = users.find(elem => elem._id === req.params.id);
//     if(!found) return res.json({success: false, message: "usernot found"})

//         res.json(found);
// })



// create a user in users array
// router.post("/user/create",(req,res) => {
//     const index = Math.floor(Math.random() * 10)
//     users.push({_id: index, name: req.body.name})

//     res.json(users)
// })

////---------------------------------------------------------------------------------------------------------------------

//what is RESTFUL API 
//restful api(representational state transfer application programming interface) that allows two computer systems to comunicate securely over the internet


//REST API vs API
// The main difference between a REST API and an API is that a REST API is a specific type of API that adheres to the REST architecture, while an API can refer to any type of interface that allows communication between different systems. 

///NOW Creating RESTFUL Api

router.get("/user", async (req,res)=>{
    let users = await userModel.find()
    res.json(users)
})


router.post("/user",async (req,res)=>{
    let user = await userModel.create({
        name: req.body.name,
        username: req.body.username
    });
    res.json(user)
})


router.put("/user/:id", async (req,res) => {
    let updateuser = await userModel.findOneAndUpdate(
        {
            _id: req.params.id
        },
         {
            username: req.body.username
         },
         {new: true}
    );
    res.json(updateuser)
});



router.delete("/user/:id", async (req,res) => {
    let deleteuser = await userModel.findOneAndDelete(
        {
            _id: req.params.id
        },
    );
    res.json(deleteuser)
});


module.exports = router