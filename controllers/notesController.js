const Note = require('../models/note');

const fetchNotes = async (req, res) => {
    //Find the notes
   const notes = await Note.find();
    //respond with them
    res.json({notes: notes})
};

const fetchNote = async (req, res) => {
    //GEt id off the url
    const noteId = req.params.id;
    //Find the note using id
    const note = await Note.findById(noteId);
    //Respond with the note
    res.json({note: note})
};

const createNote = async (req, res) => {
    //Get the sent in data off request body
   const title = req.body.title;
   const content = req.body.content;
    //Create a note with it
   const note = await Note.create({
    title: title,
    content:content
   });
    //Respond with new note
    res.json({note: note});
};

const updateNote = async (req, res) => {
    //get the id off the url
    const noteId = req.params.id;
    //Get the data off req body
    const title = req.body.title;
    const content = req.body.content;
    //Find and update record
    await Note.findByIdAndUpdate(noteId, {
        title: title,
        content: content
    });
    //Find updated note
    const note = await Note.findById(noteId);
    //Respond with it
    res.json({note: note});
};

const deleteNote = async (req, res) => {
    //Get id off url
    const noteId = req.params.id;
    //Delete the record
    await Note.deleteOne({id: noteId});
    //respond
    res.json({success: "Record deleted!"})
};

module.exports = {
    fetchNotes: fetchNotes,
    fetchNote: fetchNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote
}