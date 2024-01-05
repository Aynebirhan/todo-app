const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;

//init app
const app = express();

const connectionUrl = "mongodb://localhost:27017/todoDb";
mongoose.connect(connectionUrl)
  .then(() => 
    console.log("Database connection successfully")
  )
  .catch((error) => 
    console.log(error.message)
  )

//set view engine
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  try{
    res.render("index")

  }catch(error){
    res.status(500).send(error.message)
  }

})

//server listen
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})