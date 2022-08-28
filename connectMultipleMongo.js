import mongoose from "mongoose"

async function makeNewConnection(uri) {
  const db = await mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  db.on("error", function (error) {
    console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`)
    db.close().catch(() =>
      console.log(`MongoDB :: failed to close connection ${this.name}`)
    )
  })

  db.on("connected", function () {
    mongoose.set("debug", function (col, method, query, doc) {
      console.log(
        `MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(
          query
        )},${JSON.stringify(doc)})`
      )
    })
    console.log(`MongoDB :: connected ${this.name}`)
  })

  db.on("disconnected", function () {
    console.log(`MongoDB :: disconnected ${this.name}`)
  })

  return db
}

// Use

const url2 = "mongodb://localhost:27017/dbm2"
const url1 = "mongodb://localhost:27017/dbm1"

const db2 = await makeNewConnection(url2)
const db1 = await makeNewConnection(url1)

export default { db1, db2 }
