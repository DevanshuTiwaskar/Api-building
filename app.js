const express = require("express")
const app = express();

const indexRouter = require("./routers/indexRouter")
const apiRouter = require("./routers/apiRouter")

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))


///rendering show the html file means it will show the page
// app.get("/data",(req,res) =>{
//     res.render("index")
// })



//send the data in json format
//api is prefixed with /api so that we can differentiate between the api and the normal routes
//api means we are sending the data in json format

// app.get("/api/data",(req,res) =>{
//     res.json({
//         name:"devanshu",
//         age:20
//     })
// })



app.use("/",indexRouter)
app.use("/api",apiRouter)

app.listen(3000,()=>{
    console.log("server is running on post 3000")
})