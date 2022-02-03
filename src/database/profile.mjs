import { ObjectId } from 'mongodb';
import { ProfileOne } from '../../test/data.js';
import {getDatabase} from './mongo.mjs';

const collectionName = 'profiles';
const profiles = new Map();

async function insertProfile(profile){
    const database = await getDatabase();
    console.log('inserting profile into database');
    const {insertedId} = await database.collection(collectionName).insertOne(profile);
    console.log(`profile inserted with id ${insertedId}`);
    profiles.set(profile.email,insertedId);
    return insertedId;
}

async function getProfiles(){
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

async function getProfileByEmail(email){
  console.log(`retrieving new profile by email: ${email}`);
  try{
    const mongoId = profiles.get(email);
    console.log(mongoId);
    return await getProfileById(mongoId);
  } catch(e){
    console.log('error getting profile');
    console.log(e);
  }

}

async function getProfileById(id){
    const database = await getDatabase();
    return await database.collection(collectionName).findOne({_id: new ObjectId(id)});
}

async function deleteProfileByEmail(email){

}

async function deleteProfileById(id) {
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
    deleteProfileById,
    deleteProfileByEmail
}