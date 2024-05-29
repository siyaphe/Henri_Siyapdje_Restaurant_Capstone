import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://siyapdje:Kopa1918$@malia-cluster.rf3mpcg.mongodb.net/Restaurant').then(()=>console.log("DB Connected"));
}