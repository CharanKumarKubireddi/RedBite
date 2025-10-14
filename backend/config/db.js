import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
      "mongodb+srv://charankubireddi:Pass1234@cluster0.bqvgdcy.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
