const fs = require("fs");
const path = require("path");

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function createNewNote(body, notesArray) {
    const animal = body;
    notesArray.push(animal);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
      );
    return body;
}

module.exports = {
    findById,
    createNewNote
}