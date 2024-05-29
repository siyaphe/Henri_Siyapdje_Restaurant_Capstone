import mongoose from "mongoose";
// ----------------Import Mongoose librairie

const foodSchema = new mongoose.Schema({
  name: {type:String,required:true},
  description: {type:String,required:true},
  price:{type:Number,required:true},
  image: {type:String,required:true},
  category:{type:String,required:true}
})
//---------------create mongoose schema
const foodModel = mongoose.model.food || mongoose.model("food", foodSchema)
// define the mongoose model
export default foodModel;