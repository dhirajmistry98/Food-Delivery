import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://greatstcak:981906@cluster0.azxvr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}