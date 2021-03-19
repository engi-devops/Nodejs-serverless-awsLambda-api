const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { MONGO_CONNECTION_STRING } = require('./config/DB');
const mongoose = require('mongoose');
mongoose.connect(MONGO_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log(`we are connected!`);    
        });

const {
    routes: userRoutes,
} = require('./user/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoutes);

module.exports = app;