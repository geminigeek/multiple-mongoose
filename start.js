import db1Connection from "./db1/connectDb1.js"
const { User } = db1Connection.models


console.log('User :>> ', User);
console.log(db1Connection.Model)