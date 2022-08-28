import mongoose from "mongoose"

async function getConnections(url, db) {
  return new Promise((resolve, reject) => {
    mongoose.createConnection(
      url,
      { useUnifiedTopology: true },
      function (err, client) {
        if (err) {
          console.error(err)
          resolve(false)
        } else {
          resolve(client.db(db))
        }
      }
    )
  })
}

async function connect() {
  let dbs = []
  dbs["db1"] = await getConnections("mongodb://localhost:27017/db1")
  dbs["db2"] = await getConnections("mongodb://localhost:27017/db2")
  return dbs
}
export default connect
