const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/api_building").then(()=>{
    try {
        console.log("connect to db")
    } catch (error) {
        console.log("error in db:",error)
        
    }
})

const userShema = mongoose.Schema({
    user: String,
    username: String,
})

module.exports = mongoose.model("user", userShema);