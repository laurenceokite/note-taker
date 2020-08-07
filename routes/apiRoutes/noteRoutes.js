const { findById, createNewNote } = require('../../lib/notes');
const router = require('express').Router();
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
});

router.post('/notes', (req, res) => {
    if (!notes.length) {
        req.body.id = 1;
    } else {
        req.body.id = notes[(notes.length-1)].id + 1;
    }
    console.log(req.body.id)
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    res.send('Note Deleted');
})

module.exports  = router;