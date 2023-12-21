const apiRoute = require("express").Router();
const path = require("path");
const fs = require("fs");

const { v4: uuidv4 } = require("uuid");

apiRoute.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "..","./db/db.json"));
});

apiRoute.post("/notes", (req, res) => {

    let data = JSON.parse(fs.readFileSync("db/db.json"));

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    data.push(newNote);

    fs.writeFileSync("db/db.json", JSON.stringify(data));

    res.json(data);
});

apiRoute.delete("/notes/:id", (req, res) => {
    let data = JSON.parse(fs.readFileSync(db/db.json));

    data = data.filter((note) => note.id !== req.params.id);

    fs.writeFileSync("db/db.json", JSON.stringify(data));

    res.json(data);
});

module.exports = apiRoute;