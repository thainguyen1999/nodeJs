const express=require("express");
const app= express();
require("dotenv").config();
const database = require("./src/database");
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{ // la 1 event luon luon nghe ko bh dừng
    console.log("server is running....");
});

app.set("view engine","ejs");
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


 const authRouter= require("./src/routers/user.route")
app.use("/users", authRouter)
