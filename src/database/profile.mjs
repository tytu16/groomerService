import { ObjectId } from 'mongodb';
import { ProfileOne } from '../../test/data.js';
import {getDatabase} from './mongo.mjs';

const collectionName = 'profiles';
const profiles = new Map();

async function insertProfile(profile){
    const database = await getDatabase();
    const {insertedId} = await database.collection(collectionName).insertOne(profile);
    profiles.set(profile.email,insertedId);
    console.log(profiles);
    console.log('new profiles above');
    return insertedId;
}

async function getProfiles(){
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

async function getProfileByEmail(email){
  console.log(`retrieving new profile by email: ${email}`);
  const mongoId = profiles.get(email);
  console.log(mongoId);
  return await getProfileById(mongoId);
}

async function getProfileById(id){
    const database = await getDatabase();
    return await database.collection(collectionName).findOne({_id: new ObjectId(id)});
}

async function deleteProfile(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
      _id: new ObjectID(id),
    });
}
  
async function updateProfile(id, profile) {
    const database = await getDatabase();
    delete profile._id;
    await database.collection(collectionName).update(
      { _id: new ObjectID(id), },
      {
        $set: {
          ...profile,
        },
      },
    );
}
  
export {
    insertProfile,
    getProfiles,
    getProfileByEmail,
    getProfileById,
    updateProfile,
    deleteProfile
}