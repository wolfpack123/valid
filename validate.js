const mongoose = require("mongoose");
const validator = require("validator");

const LoginSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        minlength:3,
        unique:[true,"Name is already present"]
    },
    email:{
        type: String,
        unique:[true,"Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
     }
})
const Login = new mongoose.model("Login", LoginSchema);
module.exports = Login;