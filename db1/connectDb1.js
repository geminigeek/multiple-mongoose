// connections/fast.js
import mongoose from "mongoose"
import userSchema from "./schema.js"
const url = "mongodb://localhost:27017/db1"
const conn = await mongoose.createConnection(url)
conn.model("User", userSchema)

export default conn
