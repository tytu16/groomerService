import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import { ProfileOne } from '../test/data.js';
import {startDatabase} from './database/mongo.mjs';
import {insertProfile, getProfiles} from './database/profile.mjs';

// npm run start from root directory to begin hot-swapping server

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.post('/login', (req, res) => {
    return res.send(ProfileOne());
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
});