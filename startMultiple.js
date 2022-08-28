import connections from "./connectMultipleMongo.js"
import userSchema1 from "./db1/schema.js"
const { db1, db2 } = connections

async function main() {
//   let db2 = await connection
  const UserDb1 = db1.model("User", userSchema1)
  const UserDb2 = db2.model("User", userSchema1)

  await UserDb2.create({ name: "deepak2", email: "d2@dee.com" })
  await UserDb1.create({ name: "deepak", email: "d1@dee.com" })
  let records = await UserDb1.find({})
  console.log("records :>> ", records)
}

main()
