// Start the module in the application
import mongooseMulti from "mongoose-multi"
import { db as dbConfig } from "./config.js" // external network file
import schemaSend from "./multi-schema.js"
//console.log("dbConfig :>> ", dbConfig)
//console.log('schemaSend :>> ', schemaSend);
const db = mongooseMulti.start(dbConfig, schemaSend) // schema file path => mongoose-multi trys to require it

// // wait for connection to be open
// db.application.mongooseConnection.once("open", function () {
//   // use it
//   db.application.customer.find().exec(function (err, docs) {
//     // do sth. here with customers
//   })

//   db.books.article.findOneAndUpdate().exec(function (err, doc) {
//     // do sth. here with article
//   })

//   db.application.customer.findExactOne({}, function (err, doc) {
//     // err if no or more than one docs are found
//     // do sth. here with customer
//   })

//   db.books.article.findMinOne({}, function (err, doc) {
//     // err if no docs are found
//     // do sth. here with article
//   })
// })
