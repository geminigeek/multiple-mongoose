import mongoose from "mongoose"
const { Schema } = mongoose
const userSchema = new Schema({
  name: String,
  email: String,
  status: {
    type: Number,
    default: 1,
  },
})
export default userSchema
