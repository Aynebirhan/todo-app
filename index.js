const express = require("express");

const PORT = 8000;

//init app
const app = express();

//set view engine
app.set("view engine", "ejs");

//server listen
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})