import { ObjectId } from 'mongodb';
import {getDatabase} from './mongo.mjs';

const collectionName = 'profiles';

async function insertProfile(profile){
    const database = await getDatabase();
    const {insertedId} = await database.collection(collectionName).insertOne(profile);
    return insertedId;
}

async function getProfiles(){
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

async function getProfile(id){
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
    getProfile,
    updateProfile,
    deleteProfile
}