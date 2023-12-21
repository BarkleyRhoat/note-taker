const express = require("express");

//setting port
const PORT = process.env.PORT || 3001;


const app = express();

const apiRoutes = require('./public/routes/apiRoutes');
const htmlRoutes = require('./public/routes/htmlRoutes');

//middle ware 
app.use(express.json());
//middle ware
app.use(express.urlencoded({ extended: false}));
// middle ware
app.use(express.static("public"));



app.use(apiRoutes);

app.use(htmlRoutes);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);
