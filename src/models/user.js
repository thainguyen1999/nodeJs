const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true,
        minLength:6,
        maxLength:255
    },
    lastname:{
        type:String,
        required: true,
        unique: true,
        minLength:6,
        maxLength:255
    },
    mnumber: {
        type:String,
        required:true,
        validate: {
            validator: (v)=>{
                const regExp = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
                return v.match(regExp) && v.startsWith('0');
            },
            message: t => `${t.value} không phải là số điện thoại`
        }
    },
    username:{
        type:String,
        required: true,
        minLength:6,
        maxLength:255
    },
    password:{
        type:String,
        required: true,
        minLength:6,
        maxLength:255
    },

});
module.exports = mongoose.model("User",userSchema);