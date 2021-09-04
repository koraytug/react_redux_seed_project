// const dbConfig = require("./db.config.js");
import {url} from "./db.config";
import {MongoClient} from "mongodb";

// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

// const db = {};
// db.mongoose = mongoose;
// db.url = url;
// db.customers = require("./customer.model.js")(mongoose);

// module.exports = db;

export const client = new MongoClient(url);

export async function connectClient() {
    await client.connect();
}

export async function getDb() {
    const dbName = "TESTAPP";
    return client.db(dbName);
}

