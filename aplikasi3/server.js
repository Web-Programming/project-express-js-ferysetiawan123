const express = require("express");
const app = express();
const port = 3000;

//Serving Static File di Folder Public
app.use(express.static('public'))

app.listen(port, (req, res) => {
    console.log('Server Running at http://localhost')
});