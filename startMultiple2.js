import connection from "./connectMulti2.js"
import userSchema1 from "./db1/schema.js"
const dbs = connection()

// create schema
//await db1.connect()
// const UserDb1 = db1.model("User", userSchema1)
console.log("db1 :>> ", dbs)
//console.log("UserDb1 :>> ", UserDb1)
//await db1.connect()

// ("connect", async () => {
//   console.log("UserDb1 :>> ", UserDb1)
//   await UserDb1.insert({ name: "deepak", email: "d1@dee.com" })

//   let records = await UserDb1.find({})
//   console.log("records :>> ", records)
// })
