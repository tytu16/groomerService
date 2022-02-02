import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";
import {insertProfile} from "./profile.mjs";
import { ProfileOne } from "../../test/data.js";

let database = null;
let profiles = new Map();

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

async function initializeTestDB(){
    const insertId = insertProfile(ProfileOne());
    profiles.set(ProfileOne().id, insertId);
}

export {
    getDatabase,
    startDatabase,
    initializeTestDB,
    profiles
}