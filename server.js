//Load env variables
if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
//Import dependencies
const express = require("express");
const cors = require('cors');
const db = require('./config/DB');
const notesController = require('./controllers/notesController');

//Create an express/cors app
const app = express();
app.use(express.json());
app.use(cors());

//connect do DBS
db();

//Routing

app.get('/notes', notesController.fetchNotes);

app.get('/notes/:id', notesController.fetchNote);

app.post('/notes', notesController.createNote);

app.put('/notes/:id', notesController.updateNote);

app.delete('/notes/:id', notesController.deleteNote);

//Start our server
app.listen(process.env.PORT);