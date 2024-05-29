import mongoose from "mongoose"
// import the mongoose librairie
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})
// create the mongoose schema for user data

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;