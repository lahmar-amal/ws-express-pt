// require external module
const express = require("express");
// app: instance d'express (express: class)
const app = express();
// we don't require non module folders/files
// const public = require("./public");
// app.use : to use express methods
// acess all files in public
app.use(express.static("public"));
// get index.html
app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/index.html");
});
// get services.html
app.get("/services", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/services.html");
});
app.get("/style", (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
});
const port = 5000;
app.listen(port, () => console.log(`this server is running on ${port}`));
