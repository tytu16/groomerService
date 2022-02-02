import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

let database = null;

async function startDatabase() {
    const mongo = await MongoMemoryServer.create();
    const mongoDBURL = mongo.getUri();
    const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});
    database = connection.db();
}

async function getDatabase() {
    if(!database) await startDatabase();
    return database;
}

export {
    getDatabase,
    startDatabase
}