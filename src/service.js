import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import { ProfileOne } from '../test/data.js';
import {startDatabase, initializeTestDB, profiles} from './database/mongo.mjs';
import {insertProfile, getProfiles, getProfileByEmail} from './database/profile.mjs';
import {validateEmailPassword} from "./login/loginService.js";

// npm run start from root directory to begin hot-swapping server

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.post('/login', async (req, res) => {
    const {email,password} = req.body;
    try{
        if(validateEmailPassword(email, password)){
            const data = await getProfileByEmail(email);
            console.log(data);
            return res.send(data);
        }
    } catch (e) {
        console.log('sumethin\'s fishy');
        console.log(e);
        return res.status(401).send({ errMessage: e });
    }
})

app.get('/profile', (req, res) => {
    console.log('get request received');
    return res.send(Object.values(groomer));
})

app.post('/profile', (req, res) => {
    console.log(req.headers);
    console.log(req.body.text);
    return res.send('Received a POST HTTP method');
});

app.put('/profile/:profileId', (req, res) => {
    return res.send(`PUT HTTP method on profile/${req.params.profileId} resource`);
});

app.delete('/profile/:profileId', (req, res) => {
    return res.send(`DELETE HTTP method on profile/${req.params.profileId} resource`);
});

startDatabase().then(async() => {
    app.listen(3000, () => {
        console.log('beep boop hello me');
        console.log('setup the server stuff goes here...');
        console.log(`listening on port ${process.env.PORT}`)
    });

    initializeTestDB();
});