const express = require('express');
const router = express.Router();
const fs = require('fs');


const { v4: uuidv4 } = require("uuid");

//this will store the path to json
const dbPath = 'db/db.json';

// will parse json file
const readJson = () => {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
};

const writeJson = (data) => {

    fs.writeFileSync(dbPath, JSON.stringify(data));
};

// routes for get and post request
router.get('/api/notes', (req, res) => {
    const dbJson = readJson();
    res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const dbJson = readJson();

    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    dbJson.push(newNote)
    writeJson(dbJson);
    res.json(dbJson);

})

router.delete('/api/notes/:id', (req, res) => {
    const dbJson = readJson();
    const newNotes = dbJson.filter((note) => note.id !== req.params.id);
    writeJson(newNotes);
    res.json({ message : 'note deleted successfully.'});
});

module.exports = router;

