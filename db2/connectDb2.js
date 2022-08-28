// connections/fast.js
import mongoose from "mongoose"
const url = "mongodb://localhost:27017/db2"
const conn = mongoose.createConnection(url)
conn.model("User", require("./schema"))

module.exports = conn
