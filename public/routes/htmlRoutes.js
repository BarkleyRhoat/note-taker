const express = require("express");
const path = require("path");
const router = express.Router();


router.get('/', (req, res) => {

    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
});

router.get('./notes', (req, res) => {
    const notesPath = path.join(__direname, '../public/notes.html');
    res.sendFile(notesPath);
});



module.exports = router;