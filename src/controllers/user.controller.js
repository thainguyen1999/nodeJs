const User= require("../models/user")
const e= require("express")
exports.get=(req,res)=>{
    User.find({}).then(rs=>{
        res.render("list",{
            items: rs
        });
    }).catch(err=>{
        res.send(err);
    })
}
exports.createForm = (req,res)=>{
    res.render("form");
};
exports.save = (req,res)=>{
    let s = req.body;
    let newUser = new User(s);
    newUser.save().then(rs=>{
        res.redirect("/");
    }).catch(err=>{
        res.send(err);
    })
};