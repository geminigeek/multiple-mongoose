import mongoose from "mongoose"
const { Schema } = mongoose

const schemaSend = {
  db1: {
    // database

    customer: new Schema({
      // collection
      mailaddress: { type: String },
    }),

    settings: new Schema({
      // collection
      customerId: { type: String, required: false },
      options: { type: Array, required: false },
    }),
  },

  db2: {
    // database

    article: new Schema({
      // collection
      description: { type: String },
      numOfPages: { type: Number, required: false },
      weight: { type: Number, required: false },
    }),

    paperback: new Schema({
      // collection
      description: { type: String, required: false },
      numOfPages: { type: Number, required: false },
      weight: { type: Number, required: false },
    }),
  },
}
export default schemaSend
