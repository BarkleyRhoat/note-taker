const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//middle ware 
app.use(express.json());
//middle ware
app.use(express.urlencoded({ extended: true}));
// middle ware
app.use(express.static("public"));


const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

app.use("/api", apiRouter);

app.use("/", htmlRouter);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);
