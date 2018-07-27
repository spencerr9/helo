const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express()

app.use(bodyParser.json());

const port = 3009

massive( process.env.CONNECTION_STRING ).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))
app.listen(port, () => console.log(`Shut up, Richard! Port: ${port}`))