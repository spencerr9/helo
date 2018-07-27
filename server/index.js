const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const controller = require('./controller')

const app = express()

app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'))

//Auth
app.post('api/register', controller.register)

const port = 3009

massive( process.env.CONNECTION_STRING ).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))
app.listen(port, () => console.log(`Shut up, Richard! Port: ${port}`))